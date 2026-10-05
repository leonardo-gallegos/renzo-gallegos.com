import { Container } from "@/components/layout/container";
import Link from "next/link";
export default function RootPage() {
  return <main className="flex min-h-svh items-center"><Container>
    <h1 className="text-4xl font-semibold tracking-tight" translate="no">Renzo Gallegos</h1>
    <p className="mt-4 text-muted-foreground">Selecciona idioma / <span lang="en">Select language</span></p>
    <nav aria-label="Idioma / Language" className="mt-8 flex flex-wrap gap-6">
      <Link href="/es/" prefetch={false} hrefLang="es" className="text-link">Español</Link>
      <Link href="/en/" prefetch={false} hrefLang="en" lang="en" className="text-link">English</Link>
    </nav>
  </Container></main>;
}
