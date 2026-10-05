import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/hero";
import { JsonLd } from "@/components/json-ld";
import { routing } from "@/i18n/routing";
import { homeMetadata, personJsonLd } from "@/lib/seo";
type Props = {params: Promise<{locale: string}>};
export async function generateMetadata({params}: Props) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({locale, namespace: "Metadata"});
  return homeMetadata(locale, t("title"), t("description"));
}
export default async function HomePage({params}: Props) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  return <main id="main-content" tabIndex={-1}><JsonLd data={personJsonLd(locale)} /><Hero /></main>;
}
