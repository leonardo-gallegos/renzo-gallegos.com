import Link from "next/link";

export function Header({ locale }: { locale: "es" | "en" }) {
  const otherLocale = locale === "es" ? "en" : "es";

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8">
        <Link href={`/${locale}/`} className="font-semibold tracking-tight">
          Renzo Gallegos
        </Link>

        <nav className="flex items-center gap-5 text-sm text-muted-foreground">
          <Link href={`/${locale}/#experience`} className="hover:text-foreground">
            {locale === "es" ? "Experiencia" : "Experience"}
          </Link>
          <Link href={`/${locale}/blog/`} className="hover:text-foreground">
            Blog
          </Link>
          <Link href={`/${otherLocale}/`} className="hover:text-foreground">
            {otherLocale.toUpperCase()}
          </Link>
        </nav>
      </div>
    </header>
  );
}
