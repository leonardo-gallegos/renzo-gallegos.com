import { getTranslations } from "next-intl/server";
import { HomeSection } from "./home-section";

export async function Insights() {
  const t = await getTranslations("Insights");
  return (
    <HomeSection id="insights" title={t("title")} intro={t("forthcoming")}>
      <ul className="insight-list">
        {["architecture", "operations", "ml"].map(topic => (
          <li key={topic} className="border-t py-5 text-lg font-medium leading-8">{t(topic)}</li>
        ))}
      </ul>
    </HomeSection>
  );
}
