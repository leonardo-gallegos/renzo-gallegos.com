import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/hero";
import { TechnologyMarquee } from "@/components/sections/technology-marquee";
import { Expertise } from "@/components/sections/expertise";
import { Experience } from "@/components/sections/experience";
import { Achievements } from "@/components/sections/achievements";
import { Awards } from "@/components/sections/awards";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Education } from "@/components/sections/education";
import { Insights } from "@/components/sections/insights";
import { Contact } from "@/components/sections/contact";
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
  return (
    <main id="main-content" tabIndex={-1}>
      <JsonLd data={personJsonLd(locale)} />
      <Hero locale={locale} />
      <TechnologyMarquee />
      <Expertise locale={locale} />
      <Experience locale={locale} />
      <Achievements locale={locale} />
      <Awards locale={locale} />
      <FeaturedWork locale={locale} />
      <Education locale={locale} />
      <Insights />
      <Contact />
    </main>
  );
}
