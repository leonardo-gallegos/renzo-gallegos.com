import { getTranslations } from "next-intl/server";
import { articlePath, type Article } from "@/lib/blog/content";
import { categories } from "@/lib/blog/schema";
import { regionalLocale } from "@/lib/format";
import type { Locale } from "@/lib/seo";

export function ArticleDate({ date, locale }: { date: string; locale: Locale }) {
  return <time dateTime={date}>{new Intl.DateTimeFormat(regionalLocale(locale), { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`))}</time>;
}

export async function ArticleList({ articles, locale, headingLevel = 2 }: { articles: Article[]; locale: Locale; headingLevel?: 2 | 3 }) {
  const t = await getTranslations({ locale, namespace: "Blog" });
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return <ul className="article-list">
    {articles.map(article => <li key={article.slug} className="article-preview">
      <div className="article-preview-meta">
        <ArticleDate date={article.publishedAt} locale={locale} />
        <p>{categories[article.category][locale]}</p>
        <p>{t("readingTime", { minutes: article.minutes })}</p>
      </div>
      <div>
        <Heading className="entry-title"><a href={articlePath(article)} className="text-link">{article.title}</a></Heading>
        <p className="entry-description">{article.description}</p>
      </div>
    </li>)}
  </ul>;
}
