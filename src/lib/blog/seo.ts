import type { Metadata } from "next";
import { localizedUrl, languageAlternates, siteConfig, socialImage, type Locale } from "@/lib/seo";
import { articleAlternates, type Article } from "./content";

export function blogMetadata(locale: Locale, title: string, description: string): Metadata {
  const url = localizedUrl(locale, "blog");
  return {
    metadataBase: new URL(siteConfig.url), title, description,
    alternates: { canonical: url, languages: languageAlternates("blog"), types: { "application/rss+xml": `/${locale}/feed.xml` } },
    openGraph: { type: "website", title, description, url, siteName: siteConfig.name, locale: locale === "es" ? "es_PE" : "en_US", images: [socialImage] },
    twitter: { card: "summary_large_image", title, description, images: [socialImage.url] },
    robots: { index: true, follow: true },
  };
}

export function articleMetadata(article: Article): Metadata {
  const url = localizedUrl(article.locale, `blog/${article.slug}`);
  const title = `${article.title} | ${siteConfig.name}`;
  return {
    metadataBase: new URL(siteConfig.url), title, description: article.description,
    authors: [{ name: siteConfig.name, url: localizedUrl(article.locale) }],
    keywords: article.tags,
    alternates: { canonical: url, languages: articleAlternates(article) },
    openGraph: {
      type: "article", url, title, description: article.description, siteName: siteConfig.name,
      locale: article.locale === "es" ? "es_PE" : "en_US",
      publishedTime: article.publishedAt, ...(article.updatedAt ? { modifiedTime: article.updatedAt } : {}),
      authors: [localizedUrl(article.locale)], tags: article.tags, images: [socialImage],
    },
    twitter: { card: "summary_large_image", title, description: article.description, images: [socialImage.url] },
    robots: { index: true, follow: true },
  };
}

export function articleJsonLd(article: Article) {
  const url = localizedUrl(article.locale, `blog/${article.slug}`);
  return {
    "@context": "https://schema.org", "@type": "BlogPosting", headline: article.title,
    description: article.description, datePublished: article.publishedAt,
    ...(article.updatedAt ? { dateModified: article.updatedAt } : {}),
    author: { "@type": "Person", "@id": `${siteConfig.url}/#person`, name: siteConfig.name, url: localizedUrl(article.locale), sameAs: [siteConfig.linkedin] },
    mainEntityOfPage: { "@type": "WebPage", "@id": url }, inLanguage: article.locale,
    keywords: article.tags.join(", "), image: `${siteConfig.url}${socialImage.url}`,
  };
}

export function breadcrumbJsonLd(article: Article, homeLabel: string) {
  return {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: homeLabel, item: localizedUrl(article.locale) },
      { "@type": "ListItem", position: 2, name: "Blog", item: localizedUrl(article.locale, "blog") },
      { "@type": "ListItem", position: 3, name: article.title, item: localizedUrl(article.locale, `blog/${article.slug}`) },
    ],
  };
}
