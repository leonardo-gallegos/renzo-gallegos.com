import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { getArticles } from "@/lib/blog/content";
import { localizedUrl, siteConfig } from "@/lib/seo";

export const dynamic = "force-static";
export const dynamicParams = false;
export function generateStaticParams() { return routing.locales.map(locale => ({ locale })); }
const xml = (value: string) => value.replace(/[<>&"']/g, character => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;" })[character]!);

export async function GET(_request: Request, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return new Response(null, { status: 404 });
  const items = getArticles(locale).map(article => {
    const url = localizedUrl(locale, `blog/${article.slug}`);
    return `<item><title>${xml(article.title)}</title><link>${url}</link><guid isPermaLink="true">${url}</guid><description>${xml(article.description)}</description><pubDate>${new Date(`${article.publishedAt}T00:00:00Z`).toUTCString()}</pubDate><category>${xml(article.category)}</category></item>`;
  }).join("");
  const description = locale === "es" ? "Notas técnicas sobre datos y operaciones mineras." : "Technical notes on data and mining operations.";
  const body = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>${siteConfig.name} — Blog (${locale})</title><link>${localizedUrl(locale, "blog")}</link><description>${description}</description><language>${locale}</language><atom:link href="${siteConfig.url}/${locale}/feed.xml" rel="self" type="application/rss+xml"/>${items}</channel></rss>`;
  return new Response(body, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
