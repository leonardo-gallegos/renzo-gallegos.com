import { getTranslations } from "next-intl/server";
import { Container } from "./container";
import { siteConfig } from "@/lib/seo";
export async function Footer() {
  const t = await getTranslations("Navigation");
  return <footer className="border-t"><Container className="flex flex-col justify-between gap-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
    <p translate="no">© {new Date().getFullYear()} Renzo Gallegos</p>
    <div className="flex flex-wrap gap-6"><a href={siteConfig.linkedin} className="text-link">LinkedIn</a>
    <a href={"mailto:" + siteConfig.email} className="text-link">{t("email")}</a></div>
  </Container></footer>;
}
