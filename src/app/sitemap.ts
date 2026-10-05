import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { localizedUrl, languageAlternates } from "@/lib/seo";
import { getArticles, articleAlternates } from "@/lib/blog/content";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const publicPaths = ["", "blog"];
  const pages = publicPaths.flatMap(path => routing.locales.map(locale => ({
    url: localizedUrl(locale, path), alternates: {languages: languageAlternates(path)},
  })));
  return [...pages, ...getArticles().map(article => ({
    url: localizedUrl(article.locale, `blog/${article.slug}`),
    lastModified: article.updatedAt ?? article.publishedAt,
    alternates: { languages: articleAlternates(article) },
  }))];
}
