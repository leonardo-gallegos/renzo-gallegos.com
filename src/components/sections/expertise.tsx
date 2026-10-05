import { getTranslations } from "next-intl/server";
import { expertise, professionalSummary } from "@/data/expertise";
import type { Locale } from "@/lib/seo";
import { HomeSection } from "./home-section";

export async function Expertise({ locale }: { locale: Locale }) {
  const t = await getTranslations("Sections");
  return (
    <HomeSection id="expertise" title={t("expertise")} intro={professionalSummary[locale]}>
      <div className="open-grid">
        {expertise.map(area => (
          <div key={area.id} className="grid-entry">
            <h3 className="entry-title">{area.title[locale]}</h3>
            <p className="entry-description">{area.description[locale]}</p>
            <ul className="topic-list">
              {area.topics.map(topic => <li key={topic.en}>{topic[locale]}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </HomeSection>
  );
}
