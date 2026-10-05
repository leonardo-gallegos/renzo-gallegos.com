import "server-only";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { cache } from "react";
import matter from "gray-matter";
import readingTime from "reading-time";
import { routing } from "@/i18n/routing";
import { localizedUrl, type Locale } from "@/lib/seo";
import { parseArticleMeta, type ArticleMeta } from "./schema";

export type Article = ArticleMeta & { body: string; minutes: number };

const loadArticles = cache((): Article[] => {
  const articles = routing.locales.flatMap(locale => {
    const directory = join(process.cwd(), "content", "blog", locale);
    return readdirSync(directory).filter(file => file.endsWith(".mdx")).sort().map(file => {
      const path = join(directory, file);
      const { data, content } = matter(readFileSync(path, "utf8"));
      const meta = parseArticleMeta(data, path, locale);
      if (file !== `${meta.slug}.mdx`) throw new Error(`${path}: filename must match slug`);
      if (!content.trim()) throw new Error(`${path}: article body is empty`);
      return { ...meta, body: content, minutes: Math.max(1, Math.ceil(readingTime(content).minutes)) };
    });
  });
  const routes = new Set<string>();
  const pairs = new Set<string>();
  for (const article of articles) {
    const route = `${article.locale}/${article.slug}`;
    const pair = `${article.locale}/${article.translationKey}`;
    if (routes.has(route) || pairs.has(pair)) throw new Error(`Duplicate blog slug or translation key: ${route}`);
    routes.add(route);
    pairs.add(pair);
  }
  return articles;
});

export function getArticles(locale?: Locale): Article[] {
  return loadArticles().filter(article => !article.draft && (!locale || article.locale === locale))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || a.slug.localeCompare(b.slug));
}

export function getArticle(locale: Locale, slug: string) {
  return getArticles(locale).find(article => article.slug === slug);
}

export function articlePath(article: Pick<ArticleMeta, "locale" | "slug">) {
  return `/${article.locale}/blog/${article.slug}/`;
}

export function articleAlternates(article: ArticleMeta) {
  const translations = getArticles().filter(item => item.translationKey === article.translationKey);
  const languages: Record<string, string> = Object.fromEntries(translations.map(item => [item.locale, localizedUrl(item.locale, `blog/${item.slug}`)]));
  if (translations.length > 1) languages["x-default"] = languages.es;
  return languages;
}

export function relatedArticles(article: Article): Article[] {
  return getArticles(article.locale).filter(item => item.slug !== article.slug)
    .map(item => ({ item, score: (item.category === article.category ? 2 : 0) + item.tags.filter(tag => article.tags.includes(tag)).length }))
    .filter(entry => entry.score > 0)
    .sort((a, b) => b.score - a.score || b.item.publishedAt.localeCompare(a.item.publishedAt) || a.item.slug.localeCompare(b.item.slug))
    .slice(0, 3).map(entry => entry.item);
}
