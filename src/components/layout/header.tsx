import { getTranslations } from "next-intl/server";
import { Container } from "./container";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import type { Locale } from "@/lib/seo";
import { getArticles, articlePath } from "@/lib/blog/content";
export async function Header({locale}: {locale: Locale}) {
  const t = await getTranslations("Navigation");
  const articles = getArticles();
  const articleTranslations = Object.fromEntries(articles.filter(article => article.locale === locale).map(article => {
    const translation = articles.find(item => item.locale !== locale && item.translationKey === article.translationKey);
    return [articlePath(article), translation ? articlePath(translation) : `/${locale === "es" ? "en" : "es"}/blog/`];
  }));
  return (
    <header className="border-b">
      <Container className="header-layout">
        <a href={`/${locale}/`} translate="no" className="control-link font-semibold tracking-tight">Renzo Gallegos</a>
        <nav aria-label={t("label")} className="home-navigation">
          {["expertise", "experience", "work", "education", "contact"].map(id => (
            <a key={id} href={`/${locale}/#${id}`} className="control-link">{t(id)}</a>
          ))}
          <a href={`/${locale}/blog/`} className="control-link">{t("blog")}</a>
        </nav>
        <div className="flex items-center justify-end gap-4">
          <LanguageSwitcher locale={locale} articleTranslations={articleTranslations} />
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
