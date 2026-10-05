import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { routing } from "@/i18n/routing";
import { geist } from "@/lib/fonts";
import "../globals.css";
export const dynamicParams = false;
export function generateStaticParams() {return routing.locales.map(locale => ({locale}));}
export default async function LocaleLayout({children, params}: {
  children: React.ReactNode; params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();
  return <html lang={locale} className={geist.variable} suppressHydrationWarning>
    <body><NextIntlClientProvider locale={locale} messages={messages}><ThemeProvider>
      <a href="#main-content" className="skip-link">{messages.Navigation.skip}</a>
      <Header locale={locale} />{children}<Footer />
    </ThemeProvider></NextIntlClientProvider></body>
  </html>;
}
