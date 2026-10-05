import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
export type Locale = (typeof routing.locales)[number];
export const siteConfig = {
  name: "Renzo Gallegos", url: "https://renzogallegos.com",
  linkedin: "https://linkedin.com/in/renzo-gallegos", email: "renzo.leonardo@hotmail.com",
};
export function localizedUrl(locale: Locale, path = "") {
  return siteConfig.url + "/" + locale + "/" + (path ? path.replace(/^\/+|\/+$/g, "") + "/" : "");
}
export function languageAlternates(path = "") {
  return {es: localizedUrl("es", path), en: localizedUrl("en", path), "x-default": localizedUrl("es", path)};
}
export function homeMetadata(locale: Locale, title: string, description: string): Metadata {
  return {
    metadataBase: new URL(siteConfig.url), title, description,
    alternates: {canonical: localizedUrl(locale), languages: languageAlternates()},
    openGraph: {type: "website", url: localizedUrl(locale), title, description,
      siteName: siteConfig.name, locale: locale === "es" ? "es_PE" : "en_US",
      alternateLocale: [locale === "es" ? "en_US" : "es_PE"]},
    twitter: {card: "summary", title, description},
    robots: {index: true, follow: true}, manifest: "/manifest.webmanifest",
  };
}
export function personJsonLd(locale: Locale) {
  return {"@context": "https://schema.org", "@type": "Person", name: siteConfig.name,
    url: siteConfig.url, sameAs: [siteConfig.linkedin],
    description: locale === "es"
      ? "Ingeniero de Minas y profesional de Ciencia de Datos especializado en operaciones integradas, analítica industrial e integración IT/OT."
      : "Mining Engineer and Data Science professional specialized in integrated operations, industrial analytics and IT/OT integration.",
    knowsAbout: ["Mining Engineering", "Data Science", "Industrial Analytics", "IT/OT Integration"]};
}
