import { getTranslations } from "next-intl/server";
import { Container } from "./container";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig, type Locale } from "@/lib/seo";
export async function Header({locale}: {locale: Locale}) {
  const t = await getTranslations("Navigation");
  return <header className="border-b"><Container className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-4">
    <a href={"/" + locale + "/"} translate="no" className="control-link font-semibold tracking-tight">Renzo Gallegos</a>
    <nav aria-label={t("label")} className="flex flex-wrap items-center gap-2 sm:gap-4">
      <a href={siteConfig.linkedin} className="control-link">LinkedIn</a>
      <LanguageSwitcher locale={locale} /><ThemeToggle />
    </nav>
  </Container></header>;
}
