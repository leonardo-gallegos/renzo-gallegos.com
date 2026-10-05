"use client";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import type { Locale } from "@/lib/seo";
export function LanguageSwitcher({locale, articleTranslations}: {locale: Locale; articleTranslations: Record<string, string>}) {
  const pathname = usePathname();
  const t = useTranslations("Navigation");
  const other = locale === "es" ? "en" : "es";
  const parts = pathname.split("/").filter(Boolean);
  parts[0] = other;
  const currentPath = "/" + pathname.split("/").filter(Boolean).join("/") + "/";
  const href = parts[1] === "blog" && parts.length > 2
    ? articleTranslations[currentPath] ?? `/${other}/blog/`
    : "/" + parts.join("/") + "/";
  return <a href={href} hrefLang={other} lang={other} aria-label={t("language")}
    className="control-link">{other.toUpperCase()}</a>;
}
