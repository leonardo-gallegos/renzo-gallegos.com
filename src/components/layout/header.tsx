import { getTranslations } from "next-intl/server";
import { Container } from "./container";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import type { Locale } from "@/lib/seo";
export async function Header({locale}: {locale: Locale}) {
  const t = await getTranslations("Navigation");
  return (
    <header className="border-b">
      <Container className="header-layout">
        <a href={`/${locale}/`} translate="no" className="control-link font-semibold tracking-tight">Renzo Gallegos</a>
        <nav aria-label={t("label")} className="home-navigation">
          {["expertise", "experience", "work", "education", "contact"].map(id => (
            <a key={id} href={`/${locale}/#${id}`} className="control-link">{t(id)}</a>
          ))}
        </nav>
        <div className="flex items-center justify-end gap-4">
          <LanguageSwitcher locale={locale} />
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
