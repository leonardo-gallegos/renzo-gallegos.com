import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import sharp from "sharp";
import ts from "typescript";

// Reuse the real frontmatter validator without a separate schema or TS runtime.
const source = readFileSync("src/lib/blog/schema.ts", "utf8");
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } });
const { parseArticleMeta } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
const origin = "https://renzogallegos.com";
const locales = ["es", "en"];
const social = `${origin}/images/renzo-gallegos-social.png`;
const read = file => {
  const path = join("out", file);
  assert(existsSync(path), `Missing export: ${path}`);
  const value = readFileSync(path, "utf8");
  assert(value.length, `Empty export: ${path}`);
  return value;
};
const values = (xml, tag) => [...xml.matchAll(new RegExp(`<${tag}(?:\\s[^>]*)?>([^<]*)</${tag}>`, "g"))].map(match => match[1]);
const equalSet = (actual, expected, label) => {
  assert.equal(actual.length, new Set(actual).size, `${label}: duplicates`);
  assert.deepEqual([...actual].sort(), [...expected].sort(), label);
};
const all = locales.flatMap(locale => readdirSync(join("content/blog", locale)).filter(file => file.endsWith(".mdx")).map(file => {
  const path = join("content/blog", locale, file);
  const meta = parseArticleMeta(matter(readFileSync(path, "utf8")).data, path, locale);
  assert.equal(file, `${meta.slug}.mdx`, "Filename must match slug");
  return meta;
}));
const articles = all.filter(article => !article.draft);
const pages = locales.flatMap(locale => [ `/${locale}/`, `/${locale}/blog/` ]);
for (const article of articles) pages.push(`/${article.locale}/blog/${article.slug}/`);
equalSet(pages, [...new Set(pages)], "Unique public routes");
for (const path of pages) {
  const html = read(`${path.slice(1)}index.html`);
  assert(html.includes(`rel="canonical" href="${origin}${path}"`), `${path}: canonical`);
  assert(html.includes(social), `${path}: social image`);
  assert(html.includes('name="twitter:card" content="summary_large_image"'), `${path}: Twitter`);
  assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1, `${path}: one H1`);
  assert(html.includes(`lang="${path.split("/")[1]}"`), `${path}: language`);
  assert(!/name="robots" content="[^"]*noindex/.test(html), `${path}: indexable`);
}
assert(/name="robots" content="[^"]*noindex/.test(read("index.html")), "Chooser must be noindex");
assert(/name="robots" content="[^"]*noindex/.test(read("404.html")), "404 must be noindex");
const sitemap = read("sitemap.xml");
equalSet(values(sitemap, "loc"), pages.map(path => origin + path), "Sitemap public URLs");
for (const article of articles) {
  const html = read(`${article.locale}/blog/${article.slug}/index.html`);
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(match => JSON.parse(match[1]));
  const posting = schemas.find(schema => schema["@type"] === "BlogPosting");
  assert(posting, `${article.slug}: BlogPosting`);
  assert.equal(posting.headline, article.title);
  assert.equal(posting.datePublished, article.publishedAt);
  assert.equal(posting.dateModified, article.updatedAt);
  assert.equal(posting.inLanguage, article.locale);
  const pair = articles.filter(item => item.translationKey === article.translationKey);
  for (const alternate of pair) assert(html.includes(`href="${origin}/${alternate.locale}/blog/${alternate.slug}/"`), "Real alternate");
}
for (const draft of all.filter(article => article.draft)) assert(!existsSync(join("out", draft.locale, "blog", draft.slug, "index.html")), "Draft exported");
for (const locale of locales) {
  const xml = read(`${locale}/feed.xml`);
  assert(xml.startsWith('<?xml version="1.0"'), "XML declaration");
  assert(xml.includes(`<language>${locale}</language>`), "Feed language");
  const items = [...xml.matchAll(/<item>(.*?)<\/item>/gs)].map(match => match[1]);
  const expected = articles.filter(article => article.locale === locale);
  equalSet(items.flatMap(item => values(item, "link")), expected.map(article => `${origin}/${locale}/blog/${article.slug}/`), "Feed URLs");
  for (const article of expected) {
    const item = items.find(item => item.includes(`${origin}/${locale}/blog/${article.slug}/`));
    assert.equal(values(item, "pubDate")[0], new Date(`${article.publishedAt}T00:00:00Z`).toUTCString());
  }
}
const robots = read("robots.txt");
assert(robots.includes("Allow: /") && robots.includes(`Sitemap: ${origin}/sitemap.xml`), "Robots crawling/sitemap");
assert(!/^Disallow:\s*\/\s*$/m.test(robots), "Robots blocks site");
assert.equal(JSON.parse(read("manifest.webmanifest")).start_url, "/es/");
const image = await sharp(join("out", "images/renzo-gallegos-social.png")).metadata();
assert.equal(image.format, "png");
assert.equal(image.width, 1200);
assert.equal(image.height, 630);
for (const locale of locales) {
  const filename = `renzo-gallegos-cv-${locale}.pdf`;
  const original = readFileSync(join("public/cv", filename));
  const exported = readFileSync(join("out/cv", filename));
  assert(original.length > 5 && exported.length > 5, `${locale}: non-empty CV required`);
  assert.equal(original.subarray(0, 5).toString(), "%PDF-", `${locale}: source PDF signature`);
  assert.equal(exported.subarray(0, 5).toString(), "%PDF-", `${locale}: exported PDF signature`);
  assert(original.equals(exported), `${locale}: PDF bytes must be preserved`);
  const home = read(`${locale}/index.html`);
  assert(home.includes(`href="/cv/${filename}"`) && home.includes(`download="${filename}"`), `${locale}: localized download`);
}
const walk = directory => readdirSync(directory, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? walk(join(directory, entry.name)) : [join(directory, entry.name)]);
assert(!walk("out").some(file => file.toLowerCase().endsWith(".docx")), "DOCX source files must not be public");
assert(!sitemap.includes(".pdf"), "Home remains canonical; PDFs are not sitemap entries");
console.log(`Validated static artifact: ${pages.length} public pages, ${articles.length} published articles, 2 feeds, robots, sitemap, manifest, 404, 1200×630 PNG and 2 unchanged localized CV PDFs; no DOCX export.`);
