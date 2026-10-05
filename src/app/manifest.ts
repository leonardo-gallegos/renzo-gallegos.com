import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Renzo Gallegos",
    short_name: "Renzo Gallegos",
    description: "Mining, Data Science & IT/OT Integration",
    start_url: "/es/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
  };
}
