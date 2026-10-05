import { getTranslations } from "next-intl/server";
import { Container } from "@/components/layout/container";
import { technologies } from "@/data/technologies";

export async function TechnologyMarquee() {
  const t = await getTranslations("Technologies");
  return (
    <section aria-labelledby="technology-title" className="technology-section">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
          <h2 id="technology-title" className="text-sm font-medium">{t("title")}</h2>
          <label className="marquee-control control-link gap-2 text-sm text-muted-foreground">
            <input type="checkbox" name="pause-technologies" aria-controls="technology-track" />
            {t("pause")}
          </label>
        </div>
        <div className="marquee-window">
          <div id="technology-track" className="marquee-track">
            <ul className="technology-list" aria-label={t("title")}>
              {technologies.map(item => <li key={item} translate="no">{item}</li>)}
            </ul>
            <ul className="technology-list marquee-copy" aria-hidden="true">
              {technologies.map(item => <li key={item} translate="no">{item}</li>)}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
