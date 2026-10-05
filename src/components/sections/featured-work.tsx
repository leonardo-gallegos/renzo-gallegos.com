import { getTranslations } from "next-intl/server";
import { featuredWork } from "@/data/featured-work";
import type { Locale } from "@/lib/seo";
import { HomeSection } from "./home-section";

export async function FeaturedWork({ locale }: { locale: Locale }) {
  const t = await getTranslations("Sections");
  return (
    <HomeSection id="work" title={t("work")}>
      <div className="open-grid">
        {featuredWork.map(work => (
          <div key={work.id} className="grid-entry">
            <h3 className="entry-title">{work.title[locale]}</h3>
            <p className="entry-description">{work.description[locale]}</p>
            <ul className="topic-list">
              {work.tags.map(tag => <li key={tag.en}>{tag[locale]}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </HomeSection>
  );
}
