import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { localizedUrl, languageAlternates } from "@/lib/seo";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const publicPaths = [""];
  return publicPaths.flatMap(path => routing.locales.map(locale => ({
    url: localizedUrl(locale, path), alternates: {languages: languageAlternates(path)},
  })));
}
