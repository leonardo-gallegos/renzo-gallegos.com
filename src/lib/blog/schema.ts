import type { Locale } from "@/lib/seo";

export const categories = {
  "industrial-data": { es: "Datos industriales", en: "Industrial data" },
  "mining-analytics": { es: "Analítica minera", en: "Mining analytics" },
  "data-science": { es: "Ciencia de datos", en: "Data science" },
  "it-ot": { es: "IT/OT", en: "IT/OT" },
  "digital-transformation": { es: "Transformación digital", en: "Digital transformation" },
} as const;

export type ArticleMeta = {
  title: string;
  description: string;
  slug: string;
  locale: Locale;
  publishedAt: string;
  updatedAt?: string;
  category: keyof typeof categories;
  tags: string[];
  featured: boolean;
  draft: boolean;
  translationKey: string;
};

const fields = ["title", "description", "slug", "locale", "publishedAt", "updatedAt", "category", "tags", "featured", "draft", "translationKey"];
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

// Fail the build with the source filename rather than publishing incomplete metadata.
export function parseArticleMeta(value: unknown, file: string, locale: Locale): ArticleMeta {
  const fail = (message: string): never => { throw new Error(`${file}: ${message}`); };
  if (!value || typeof value !== "object" || Array.isArray(value)) fail("frontmatter must be an object");
  const data = value as Record<string, unknown>;
  for (const key of Object.keys(data)) if (!fields.includes(key)) fail(`unknown field '${key}'`);
  const string = (key: string) => {
    const item = data[key];
    if (typeof item !== "string" || !item.trim() || item !== item.trim()) return fail(`'${key}' must be a nonempty trimmed string`);
    return item;
  };
  const boolean = (key: string) => {
    const item = data[key];
    if (typeof item !== "boolean") return fail(`'${key}' must be a boolean`);
    return item;
  };
  const date = (key: string) => {
    const item = string(key);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(item) || Number.isNaN(Date.parse(item)) || new Date(item).toISOString().slice(0, 10) !== item) fail(`'${key}' must be a valid quoted YYYY-MM-DD date`);
    return item;
  };
  const slug = string("slug");
  const translationKey = string("translationKey");
  if (!slugPattern.test(slug) || !slugPattern.test(translationKey)) fail("slug and translationKey must use lowercase URL-safe words");
  if (data.locale !== locale) fail("locale must match its content directory");
  const category = string("category");
  if (!Object.hasOwn(categories, category)) fail(`unsupported category '${category}'`);
  const tags = data.tags;
  if (!Array.isArray(tags) || !tags.length || !tags.every(tag => typeof tag === "string" && tag.trim() === tag && tag.length > 0)) fail("tags must be a nonempty list of trimmed strings");
  const validTags = tags as string[];
  if (new Set(validTags).size !== validTags.length) fail("tags must be unique");
  const publishedAt = date("publishedAt");
  const updatedAt = data.updatedAt === undefined ? undefined : date("updatedAt");
  if (updatedAt && updatedAt < publishedAt) fail("updatedAt cannot precede publishedAt");
  return {
    title: string("title"), description: string("description"), slug, locale,
    publishedAt, ...(updatedAt ? { updatedAt } : {}),
    category: category as ArticleMeta["category"], tags: validTags,
    featured: boolean("featured"), draft: boolean("draft"), translationKey,
  };
}
