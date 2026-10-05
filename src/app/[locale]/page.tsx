import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/hero";
import { routing } from "@/i18n/routing";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <main>
      <Hero locale={locale} />

      <section id="experience" className="mx-auto max-w-7xl px-6 py-24 md:px-8">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          {locale === "es" ? "Siguiente etapa" : "Next section"}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
          {locale === "es" ? "Experiencia profesional" : "Professional experience"}
        </h2>
      </section>
    </main>
  );
}
