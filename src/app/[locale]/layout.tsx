import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { routing } from "@/i18n/routing";
import { personJsonLd, siteConfig } from "@/lib/seo";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const isEs = locale === "es";
  const title = isEs
    ? "Renzo Gallegos | Minería, Ciencia de Datos e Integración IT/OT"
    : "Renzo Gallegos | Mining, Data Science & IT/OT Integration";
  const description = isEs
    ? "Ingeniero de Minas especializado en ciencia de datos, analítica industrial, AVEVA PI System, Machine Learning e integración IT/OT para operaciones mineras."
    : "Mining Engineer specialized in data science, industrial analytics, AVEVA PI System, Machine Learning and IT/OT integration for mining operations.";

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    alternates: {
      canonical: `${siteConfig.url}/${locale}/`,
      languages: {
        es: `${siteConfig.url}/es/`,
        en: `${siteConfig.url}/en/`,
        "x-default": `${siteConfig.url}/es/`,
      },
    },
    openGraph: {
      type: "website",
      url: `${siteConfig.url}/${locale}/`,
      title,
      description,
      siteName: siteConfig.name,
      locale: isEs ? "es_PE" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();
  const jsonLd = personJsonLd(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NextIntlClientProvider messages={messages}>
        <ThemeProvider>
          <Header locale={locale} />
          {children}
          <Footer />
        </ThemeProvider>
      </NextIntlClientProvider>
    </>
  );
}
