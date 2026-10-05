import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Container } from "@/components/layout/container";
import { ArticleList } from "@/components/blog/article-list";
import { getArticles } from "@/lib/blog/content";
import { blogMetadata } from "@/lib/blog/seo";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: "Blog" });
  return blogMetadata(locale, t("metaTitle"), t("description"));
}
export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Blog" });
  const articles = getArticles(locale);
  const featured = articles.find(article => article.featured);
  return <main id="main-content" tabIndex={-1} className="blog-page">
    <Container>
      <div className="blog-intro">
        <h1 className="blog-title">{t("title")}</h1>
        <p className="section-description">{t("description")}</p>
        <a href={`/${locale}/feed.xml`} className="text-link control-link mt-5 text-sm">{t("feed")}</a>
      </div>
      {featured && <section aria-labelledby="featured-article-title" className="mb-10">
        <h2 id="featured-article-title" className="text-base font-medium mb-4">{t("featured")}</h2>
        <ArticleList articles={[featured]} locale={locale} headingLevel={3} />
      </section>}
      {articles.length ? <ArticleList articles={articles.filter(article => article !== featured)} locale={locale} /> : <p>{t("empty")}</p>}
    </Container>
  </main>;
}
