import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.url}/es/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          es: `${siteConfig.url}/es/`,
          en: `${siteConfig.url}/en/`,
        },
      },
    },
    {
      url: `${siteConfig.url}/en/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          es: `${siteConfig.url}/es/`,
          en: `${siteConfig.url}/en/`,
        },
      },
    },
  ];
}
