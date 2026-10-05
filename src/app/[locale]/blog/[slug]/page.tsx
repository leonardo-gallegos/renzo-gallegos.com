import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Container } from "@/components/layout/container";
import { JsonLd } from "@/components/json-ld";
import { ArticleDate, ArticleList } from "@/components/blog/article-list";
import { getMdxComponents } from "@/components/blog/mdx-components";
import { Giscus } from "@/components/blog/giscus";
import { getGiscusConfig } from "@/lib/giscus";
import { getArticle, getArticles, articlePath, relatedArticles } from "@/lib/blog/content";
import { categories } from "@/lib/blog/schema";
import { renderArticle } from "@/lib/blog/render";
import { articleMetadata, articleJsonLd, breadcrumbJsonLd } from "@/lib/blog/seo";
import { siteConfig } from "@/lib/seo";

type Props = { params: Promise<{ locale: string; slug: string }> };
export const dynamicParams = false;
export function generateStaticParams({ params }: { params: { locale: string } }) {
  if (!hasLocale(routing.locales, params.locale)) return [];
  return getArticles(params.locale).map(article => ({ slug: article.slug }));
}
async function resolveArticle(params: Props["params"]) {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const article = getArticle(locale, slug);
  if (!article) notFound();
  return article;
}
export async function generateMetadata({ params }: Props) { return articleMetadata(await resolveArticle(params)); }

export default async function ArticlePage({ params }: Props) {
  const article = await resolveArticle(params);
  const { locale } = article;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Blog" });
  const { Content, headings } = await renderArticle(article.body);
  const related = relatedArticles(article);
  const giscus = getGiscusConfig();
  const translation = getArticles().find(item => item.locale !== locale && item.translationKey === article.translationKey);
  return <main id="main-content" tabIndex={-1} className="blog-page">
    <Container>
      <JsonLd data={articleJsonLd(article)} />
      <JsonLd data={breadcrumbJsonLd(article, t("home"))} />
      <div className="reading-layout">
        <nav aria-label={t("breadcrumbs")} className="breadcrumbs">
          <ol><li><a href={`/${locale}/`} className="text-link">{t("home")}</a></li><li><a href={`/${locale}/blog/`} className="text-link">Blog</a></li><li aria-current="page">{article.title}</li></ol>
        </nav>
        <article>
          <header className="article-header">
            <h1 className="blog-title">{article.title}</h1>
            <p className="article-lead">{article.description}</p>
            <div className="article-metadata">
              <a href={`/${locale}/`} className="text-link" rel="author" translate="no">{siteConfig.name}</a>
              <span><ArticleDate date={article.publishedAt} locale={locale} /></span>
              <span>{t("readingTime", { minutes: article.minutes })}</span>
              <span>{categories[article.category][locale]}</span>
            </div>
            {article.updatedAt && <p className="mt-3 text-sm text-muted-foreground">{t("updated")} <ArticleDate date={article.updatedAt} locale={locale} /></p>}
            <ul className="topic-list" aria-label={t("tags")}>{article.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
            {translation && <a href={articlePath(translation)} hrefLang={translation.locale} lang={translation.locale} className="control-link text-link mt-4 text-sm">{translation.locale === "en" ? "Read in English" : "Leer en español"}</a>}
          </header>
          {headings.length >= 4 && <nav aria-label={t("toc")} className="article-toc">
            <p className="font-medium">{t("toc")}</p>
            <ul>{headings.map(heading => <li key={heading.id} className={heading.depth === 3 ? "toc-subheading" : undefined}><a className="text-link" href={`#${heading.id}`}>{heading.title}</a></li>)}</ul>
          </nav>}
          <div className="article-body"><Content components={getMdxComponents(t("table"))} /></div>
        </article>
        {related.length > 0 && <section aria-labelledby="related-title" className="article-bottom">
          <h2 id="related-title" className="entry-title">{t("related")}</h2>
          <ArticleList articles={related} locale={locale} headingLevel={3} />
        </section>}
        {giscus && <section aria-labelledby="comments-title" className="article-bottom">
          <h2 id="comments-title" className="entry-title mb-6">{t("comments")}</h2>
          <Giscus config={giscus} locale={locale} term={`${locale}/${article.translationKey}`} title={t("comments")} />
        </section>}
        <a href={`/${locale}/blog/`} className="text-link control-link mt-10">{t("back")}</a>
      </div>
    </Container>
  </main>;
}
