import { getTranslations } from "next-intl/server";
import { achievements } from "@/data/achievements";
import { regionalLocale } from "@/lib/format";
import type { Locale } from "@/lib/seo";
import { HomeSection } from "./home-section";

export async function Achievements({ locale }: { locale: Locale }) {
  const t = await getTranslations("Sections");
  return (
    <HomeSection id="achievements" title={t("achievements")}>
      <dl className="achievement-grid">
        {achievements.map(item => (
          <div key={item.id} className="achievement-entry">
            <dt className="achievement-label">{item.label[locale]}</dt>
            <dd className="achievement-value">
              {new Intl.NumberFormat(regionalLocale(locale), {
                style: item.format === "percent" ? "percent" : "decimal",
                notation: item.format === "compact" ? "compact" : "standard",
                maximumFractionDigits: 0,
              }).format(item.value)}
            </dd>
            <dd className="mt-4 text-sm leading-6 text-muted-foreground">{item.context[locale]}</dd>
          </div>
        ))}
      </dl>
    </HomeSection>
  );
}
