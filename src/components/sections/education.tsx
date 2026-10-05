import { getTranslations } from "next-intl/server";
import { education } from "@/data/education";
import type { Locale } from "@/lib/seo";
import { HomeSection } from "./home-section";
import { DateRange } from "./date-range";

export async function Education({ locale }: { locale: Locale }) {
  const t = await getTranslations("Sections");
  return (
    <HomeSection id="education" title={t("education")} className="compact-section">
      <ul className="education-list">
        {education.map(item => (
          <li key={item.id} className="education-entry">
            <div>
              <h3 className="text-base font-medium leading-7">{item.qualification[locale]}</h3>
              <p className="mt-1 text-sm leading-6 text-muted-foreground" translate="no">{item.institution}</p>
            </div>
            <div className="text-sm text-muted-foreground">
              {"year" in item.period
                ? <time dateTime={String(item.period.year)}>{item.period.year}</time>
                : <DateRange {...item.period} locale={locale} present={t("present")} />}
              {item.inProgress && <p className="mt-2 font-medium text-foreground">{t("inProgress")}</p>}
            </div>
          </li>
        ))}
      </ul>
    </HomeSection>
  );
}
