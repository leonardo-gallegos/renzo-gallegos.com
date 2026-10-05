// Operator-side Node 22 tool; never uploaded as a production runtime.
import assert from "node:assert/strict";

const canonical = "https://renzogallegos.com";
const args = process.argv.slice(2);
assert(args.length === 0 || (args.length === 2 && args[0] === "--base-url"), "Usage: npm run smoke:live [-- --base-url http://127.0.0.1:PORT]");
const base = new URL(args[1] ?? canonical);
assert(!base.username && !base.password && base.pathname === "/" && !base.search && !base.hash, "Use an origin without credentials/path/query");
const local = base.protocol === "http:" && ["127.0.0.1", "localhost", "[::1]"].includes(base.hostname);
assert(base.origin === canonical || local, "Target must be canonical production or HTTP loopback for local rehearsal");
const articles = [
  "/es/blog/estructurar-pi-af-operacion-minera/",
  "/en/blog/structure-pi-af-mining-operation/",
  "/es/blog/arquitectura-datos-mine-to-mill/",
  "/en/blog/mine-to-mill-data-architecture/",
];
const publicPages = ["/es/", "/en/", "/es/blog/", "/en/blog/", ...articles];
const probes = [
  ["/", 200, ["text/html"]],
  ...publicPages.map(path => [path, 200, ["text/html"]]),
  ["/sitemap.xml", 200, ["application/xml", "text/xml"]],
  ["/robots.txt", 200, ["text/plain"]],
  ...["es", "en"].map(locale => [`/${locale}/feed.xml`, 200, ["application/xml", "text/xml", "application/rss+xml"]]),
  ...["es", "en"].map(locale => [`/cv/renzo-gallegos-cv-${locale}.pdf`, 200, ["application/pdf"]]),
  ["/images/renzo-gallegos-social.png", 200, ["image/png"]],
  ["/manifest.webmanifest", 200, ["application/manifest+json", "application/json"]],
  ...["/this-route-should-not-exist/", "/cv/Renzo_Gallegos_CV_ES.docx", "/cv/Renzo_Gallegos_CV_EN.docx",
    "/assets/cv-source/Renzo_Gallegos_CV_ES.docx", "/assets/cv-source/Renzo_Gallegos_CV_EN.docx",
    "/.env", "/.env.local", "/.env.production", "/.git/config", "/package.json", "/package-lock.json",
    "/AGENTS.md", "/src/lib/seo.ts", "/task05-qa/validation.json"].map(path => [path, 404, ["text/html"]]),
];
let failures = 0;
const assets = new Set();
const headers = ["cache-control", "referrer-policy", "x-content-type-options", "x-frame-options", "permissions-policy", "content-security-policy", "content-security-policy-report-only", "x-robots-tag"];
const report = { checkedAt: new Date().toISOString(), target: base.origin, mode: local ? "LOCAL REHEARSAL — not live evidence" : "PRODUCTION HTTP — browser/platform checks still required", results: [] };
const request = url => fetch(url, { redirect: "manual", signal: AbortSignal.timeout(15000), headers: { "User-Agent": "RenzoReleaseSmoke/1.0", "Cache-Control": "no-cache" } });
async function check(path, status, types) {
  const result = { path, expectedStatus: status };
  try {
    const response = await request(new URL(path, base));
    result.status = response.status;
    result.headers = Object.fromEntries(headers.map(name => [name, response.headers.get(name)]));
    const type = (response.headers.get("content-type") ?? "").split(";")[0].trim().toLowerCase();
    result.contentType = type;
    assert.equal(response.status, status, "HTTP status (unexpected redirects also fail)");
    assert(types.includes(type), `MIME: expected ${types.join(" or ")}, got ${type || "missing"}`);
    const bytes = Buffer.from(await response.arrayBuffer());
    assert(bytes.length, "Empty body");
    const text = bytes.toString("utf8");
    if (status === 200 && /\.(js|css)$/.test(path)) assert(!/^\s*(?:<!doctype|<html)/i.test(text), "Asset returned HTML");
    if (path.endsWith(".pdf")) assert.equal(bytes.subarray(0, 5).toString(), "%PDF-", "PDF signature");
    if (path.endsWith(".png")) {
      assert.equal(bytes.subarray(0, 8).toString("hex"), "89504e470d0a1a0a", "PNG signature");
      assert(bytes.length >= 24, "PNG header");
      assert.equal(bytes.readUInt32BE(16), 1200, "PNG width");
      assert.equal(bytes.readUInt32BE(20), 630, "PNG height");
    }
    if (path === "/manifest.webmanifest") assert.equal(JSON.parse(text).start_url, "/es/");
    if (path === "/robots.txt") {
      assert(text.includes(`Sitemap: ${canonical}/sitemap.xml`) && text.includes("Allow: /"), "Robots sitemap/allow");
      assert(!/^Disallow:\s*\/\s*$/m.test(text), "Robots blocks site");
    }
    if (path === "/sitemap.xml") {
      const urls = [...text.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
      // Additional real published URLs are allowed as the catalog grows.
      for (const page of publicPages) assert(urls.includes(canonical + page), `Sitemap missing ${page}`);
      assert(!urls.includes(canonical + "/") && !urls.some(url => /\.pdf|should-not-exist/.test(url)), "Unexpected sitemap entry");
    }
    if (path.endsWith("/feed.xml")) {
      const locale = path.split("/")[1];
      assert(text.startsWith("<?xml") && text.includes(`<language>${locale}</language>`), "Feed declaration/language");
      for (const article of articles.filter(article => article.startsWith(`/${locale}/`))) assert(text.includes(canonical + article), "Feed missing launch article");
    }
    if (type === "text/html" && (publicPages.includes(path) || path === "/" || path === "/this-route-should-not-exist/")) {
      const robots = text.match(/<meta\b[^>]*name="robots"[^>]*content="([^"]*)"/i)?.[1] ?? "";
      if (!publicPages.includes(path)) assert(robots.includes("noindex"), "Chooser/error must be noindex");
      else {
        assert(!/noindex|none/i.test(robots) && !/noindex|none/i.test(response.headers.get("x-robots-tag") ?? ""), "Public page must be indexable");
        assert(text.includes(`rel="canonical" href="${canonical}${path}"`), "Canonical");
        assert(text.includes(`lang="${path.split("/")[1]}"`), "Document language");
        assert.equal((text.match(/<h1(?:\s|>)/g) ?? []).length, 1, "One H1");
        assert(/<title>[^<]+<\/title>/.test(text) && /name="description" content="[^"]+"/.test(text), "Title/description");
        for (const locale of ["es", "en", "x-default"]) assert(text.includes(`hrefLang="${locale}"`), `Missing hreflang ${locale}`);
        assert(text.includes(`${canonical}/images/renzo-gallegos-social.png`), "Social image metadata");
        const schemas = [...text.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(match => JSON.parse(match[1]));
        if (/^\/(es|en)\/$/.test(path)) {
          assert(schemas.some(schema => schema["@type"] === "Person"), "Person schema");
          assert(text.includes(`href="/cv/renzo-gallegos-cv-${path.split("/")[1]}.pdf"`), "Localized CV link");
        } else if (articles.includes(path)) {
          const posting = schemas.find(schema => schema["@type"] === "BlogPosting");
          assert(posting?.author?.name === "Renzo Gallegos" && posting.datePublished, "Article author/date schema");
          assert(schemas.some(schema => schema["@type"] === "BreadcrumbList"), "Breadcrumb schema");
          const paired = articles[articles.indexOf(path) ^ 1];
          assert(text.includes(`href="${canonical}${paired}"`), "Actual translated alternate");
        } else assert(text.includes(`href="/${path.split("/")[1]}/feed.xml"`), "RSS discovery");
      }
      for (const match of text.matchAll(/(?:src|href)="([^"?#]+\.(?:js|css))(?:[?#][^"]*)?"/g)) {
        const asset = new URL(match[1], base);
        if (asset.origin === base.origin && asset.pathname.startsWith("/_next/static/")) assets.add(asset.pathname);
      }
    }
    result.pass = true;
  } catch (error) {
    failures++;
    result.pass = false;
    result.error = error.cause ? `${error.message}: ${error.cause.message}` : error.message;
  }
  report.results.push(result);
}
for (const probe of probes) await check(...probe);
for (const asset of assets) {
  await check(asset, 200, asset.endsWith(".css") ? ["text/css"] : ["text/javascript", "application/javascript", "application/x-javascript"]);
  // Maps should not be deployed by default; directory/artifact inventory remains necessary.
  await check(`${asset}.map`, 404, ["text/html"]);
}
if (!local) {
  for (const origin of ["http://renzogallegos.com", "http://www.renzogallegos.com", "https://www.renzogallegos.com"]) {
    const suffix = "/es/blog/estructurar-pi-af-operacion-minera/?launch-check=1";
    const result = { path: origin + suffix, expectedDestination: canonical + suffix };
    try {
      let url = new URL(result.path);
      const chain = [];
      for (let hop = 0; hop < 5; hop++) {
        const response = await request(url);
        await response.body?.cancel();
        chain.push({ url: url.href, status: response.status, location: response.headers.get("location") });
        if (response.status === 200) break;
        assert([301, 308].includes(response.status), "Expected permanent redirect");
        assert(response.headers.get("location"), "Missing redirect location");
        url = new URL(response.headers.get("location"), url);
        assert(["renzogallegos.com", "www.renzogallegos.com"].includes(url.hostname), "Unexpected redirect host");
        assert.equal(url.pathname + url.search, suffix, "Path/query changed");
      }
      result.chain = chain;
      assert(chain.length >= 2 && chain.at(-1).status === 200, "Redirect loop/limit or absent redirect");
      assert.equal(chain.at(-1).url, result.expectedDestination, "Canonical destination");
      result.pass = true;
    } catch (error) { failures++; result.pass = false; result.error = error.message; }
    report.results.push(result);
  }
}
report.failures = failures;
report.note = "Headers are recorded, not policy-approved. This HTTP check does not establish browser UX, PDF language/content, full XML validity, crawler access, Search Console, GA4/Giscus, performance or complete privacy.";
console.log(JSON.stringify(report, null, 2));
process.exitCode = failures ? 1 : 0;
