import type { Metadata } from "next";
import { geist } from "@/lib/fonts";
import { Analytics } from "@/components/analytics";
import "../globals.css";
export const metadata: Metadata = {
  title: "Renzo Gallegos | Selecciona idioma / Select language",
  description: "Portfolio de Renzo Gallegos. Español / English.",
  robots: { index: false, follow: true },
};
export default function EntryLayout({children}: {children: React.ReactNode}) {
  return <html lang="es" className={geist.variable}><body>{children}<Analytics /></body></html>;
}
