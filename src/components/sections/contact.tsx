import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/lib/seo";
import { HomeSection } from "./home-section";

export async function Contact() {
  const t = await getTranslations("Contact");
  const nav = await getTranslations("Navigation");
  return (
    <HomeSection id="contact" title={t("title")} intro={t("description")} className="contact-section">
      <div className="flex flex-wrap gap-3">
        <a href={`mailto:${siteConfig.email}`} className="hero-cta bg-primary text-primary-foreground hover:bg-primary/85">{nav("email")}</a>
        <a href={siteConfig.linkedin} className="hero-cta border hover:bg-muted">LinkedIn</a>
      </div>
      <p className="mt-5 break-words text-sm text-muted-foreground" translate="no">{siteConfig.email}</p>
    </HomeSection>
  );
}
