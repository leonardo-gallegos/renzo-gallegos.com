import { getTranslations } from "next-intl/server";
import { experience } from "@/data/experience";
import type { Locale } from "@/lib/seo";
import { HomeSection } from "./home-section";
import { DateRange } from "./date-range";

export async function Experience({ locale }: { locale: Locale }) {
  const t = await getTranslations("Sections");
  return (
    <HomeSection id="experience" title={t("experience")}>
      <ol className="experience-list">
        {experience.map(employer => (
          <li key={employer.id} className="experience-entry">
            <div className="experience-meta">
              <DateRange {...employer} locale={locale} present={t("present")} />
              {employer.location && <p className="mt-2 text-sm text-muted-foreground">{employer.location[locale]}</p>}
            </div>
            <div className="min-w-0">
              <h3 className="entry-title" translate="no">{employer.employer}</h3>
              <ul className="role-list">
                {employer.roles.map(role => (
                  <li key={role.start}>
                    <p className="font-medium leading-7">{role.title[locale]}</p>
                    {employer.roles.length > 1 && (
                      <p className="mt-1 text-sm text-muted-foreground">
                        <DateRange {...role} locale={locale} present={t("present")} />
                      </p>
                    )}
                  </li>
                ))}
              </ul>
              {employer.highlights.length > 0 && (
                <ul className="experience-highlights">
                  {employer.highlights.map(highlight => <li key={highlight.en}>{highlight[locale]}</li>)}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </HomeSection>
  );
}
