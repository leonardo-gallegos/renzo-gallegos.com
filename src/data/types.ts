import type { Locale } from "@/lib/seo";

export type LocalizedText = Record<Locale, string>;
export type Month = `${number}-${number}`;
export type Period = { start: Month; end?: Month };

export type Role = Period & { title: LocalizedText };
export type Experience = Period & {
  id: string;
  employer: string;
  location?: LocalizedText;
  roles: Role[];
  highlights: LocalizedText[];
};
export type ExpertiseArea = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  topics: LocalizedText[];
};
export type Achievement = {
  id: string;
  value: number;
  format: "number" | "percent" | "compact";
  label: LocalizedText;
  context: LocalizedText;
};
export type Award = {
  id: string;
  title: LocalizedText;
  organization: string;
  date: Month;
  context?: LocalizedText;
};
export type FeaturedWork = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  tags: LocalizedText[];
};
export type EducationItem = {
  id: string;
  institution: string;
  qualification: LocalizedText;
  period: Period | { year: number };
  inProgress?: boolean;
};

export const text = (es: string, en = es): LocalizedText => ({ es, en });
