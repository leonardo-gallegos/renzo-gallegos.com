import { getTranslations } from "next-intl/server";
import { awards } from "@/data/awards";
import { formatMonth } from "@/lib/format";
import type { Locale } from "@/lib/seo";
import { HomeSection } from "./home-section";

export async function Awards({ locale }: { locale: Locale }) {
  const t = await getTranslations("Sections");
  return (
    <HomeSection id="recognition" title={t("awards")} className="compact-section">
      <ul className="compact-list">
        {awards.map(award => (
          <li key={award.id} className="compact-entry">
            <time dateTime={award.date} className="text-sm text-muted-foreground">{formatMonth(award.date, locale)}</time>
            <div>
              <h3 className="text-base font-medium">{award.title[locale]} <span className="text-muted-foreground">— {award.organization}</span></h3>
              {award.context && <p className="mt-2 text-sm leading-6 text-muted-foreground">{award.context[locale]}</p>}
            </div>
          </li>
        ))}
      </ul>
    </HomeSection>
  );
}
