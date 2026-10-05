import type { Locale } from "./seo";
import type { Month } from "@/data/types";

export function regionalLocale(locale: Locale) {
  return locale === "es" ? "es-PE" : "en-US";
}

export function formatMonth(value: Month, locale: Locale) {
  return new Intl.DateTimeFormat(regionalLocale(locale), {
    month: "short", year: "numeric", timeZone: "UTC",
  }).format(new Date(`${value}-01T00:00:00Z`));
}
