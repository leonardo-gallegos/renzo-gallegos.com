import { getTranslations } from "next-intl/server";
import { HomeSection } from "./home-section";
import { getArticles } from "@/lib/blog/content";
import { ArticleList } from "@/components/blog/article-list";
import type { Locale } from "@/lib/seo";

export async function Insights({ locale }: { locale: Locale }) {
  const t = await getTranslations("Insights");
  return (
    <HomeSection id="insights" title={t("title")} intro={t("description")}>
      <ArticleList articles={getArticles(locale).slice(0, 3)} locale={locale} headingLevel={3} />
      <a href={`/${locale}/blog/`} className="text-link control-link mt-8">{t("all")}</a>
    </HomeSection>
  );
}
