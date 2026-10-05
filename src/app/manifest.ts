import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Renzo Gallegos",
    short_name: "Renzo Gallegos",
    description: "Mining, Data Science & IT/OT Integration",
    start_url: "/es/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
  };
}
