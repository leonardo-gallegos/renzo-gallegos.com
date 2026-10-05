import Link from "next/link";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";

export async function Hero({ locale }: { locale: "es" | "en" }) {
  const t = await getTranslations("Hero");
  const cvPath = locale === "es" ? "/cv/renzo-gallegos-es.pdf" : "/cv/renzo-gallegos-en.pdf";

  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden border-b">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />

      <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-8 lg:py-32">
        <div className="max-w-5xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-sm font-medium tracking-wide text-muted-foreground">
              {t("eyebrow")}
            </span>
          </div>

          <h1 className="max-w-5xl text-balance text-5xl font-semibold tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
            {t("title")}
          </h1>

          <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground md:text-xl">
            {t("description")}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link href="#experience">
                {t("experience")}
                <ArrowDown className="ml-2 size-4" />
              </Link>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <a href={cvPath} download>
                {t("resume")}
                <Download className="ml-2 size-4" />
              </a>
            </Button>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t pt-6 text-sm text-muted-foreground">
            <a href="https://linkedin.com/in/renzo-gallegos" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-foreground">
              LinkedIn <ArrowUpRight className="size-3.5" />
            </a>
            <a href="mailto:renzo.leonardo@hotmail.com" className="flex items-center gap-1 hover:text-foreground">
              Email <ArrowUpRight className="size-3.5" />
            </a>
            <span>Perú</span>
          </div>
        </div>
      </div>
    </section>
  );
}
