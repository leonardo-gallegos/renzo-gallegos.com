import { Download, ArrowDown } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/seo";
export async function Hero() {
  const t = await getTranslations("Hero");
  const nav = await getTranslations("Navigation");
  return <section aria-labelledby="hero-title" className="hero">
    <Container><div className="max-w-5xl">
      <p className="mb-7 text-sm font-medium text-muted-foreground sm:mb-9">{t("eyebrow")}</p>
      <h1 id="hero-title" className="hero-title">{t("title")}</h1>
      <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground md:mt-9 md:text-xl">{t("description")}</p>
      <div className="mt-9 flex flex-wrap gap-3">
        <button disabled aria-describedby="cta-status" className="hero-cta bg-primary text-primary-foreground">
          {t("experience")}<ArrowDown aria-hidden="true" className="size-4" />
        </button>
        <button disabled aria-describedby="cta-status" className="hero-cta border bg-background text-foreground">
          {t("resume")}<Download aria-hidden="true" className="size-4" />
        </button>
      </div>
      <p id="cta-status" className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">{t("pending")}</p>
      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t pt-6 text-sm md:mt-14">
        <a href={siteConfig.linkedin} className="text-link">LinkedIn</a>
        <a href={"mailto:" + siteConfig.email} className="text-link">{nav("email")}</a>
      </div>
    </div></Container>
  </section>;
}
