export const siteConfig = {
  name: "Renzo Gallegos",
  url: "https://renzogallegos.com",
  linkedin: "https://linkedin.com/in/renzo-gallegos",
  email: "renzo.leonardo@hotmail.com",
};

export function personJsonLd(locale: "es" | "en") {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Renzo Gallegos",
    url: siteConfig.url,
    sameAs: [siteConfig.linkedin],
    jobTitle:
      locale === "es"
        ? "Ingeniero de Minas especializado en Ciencia de Datos e Integración IT/OT"
        : "Mining Engineer specialized in Data Science and IT/OT Integration",
    knowsAbout: [
      "Mining Engineering",
      "Data Science",
      "Industrial Analytics",
      "IT/OT Integration",
      "AVEVA PI System",
      "Mine-to-Mill",
      "Machine Learning",
    ],
  };
}
