import { text, type Achievement } from "./types";

export const achievements: Achievement[] = [
  { id: "portfolio", value: 151, format: "number", label: text("oportunidades de mejora gestionadas", "improvement opportunities managed"), context: text("Portafolio de transformación digital en Las Bambas.", "Digital transformation portfolio at Las Bambas.") },
  { id: "project-cost", value: 0.6, format: "percent", label: text("reducción del costo de un proyecto", "project cost reduction"), context: text("Costo del proyecto: USD 70K → USD 26K.", "Project cost: USD 70K → USD 26K.") },
  { id: "records", value: 45000, format: "compact", label: text("registros analizados y depurados", "records analyzed and cleaned"), context: text("SYSTEMMIN 8.5, Compañía Minera Raura.") },
  { id: "workers", value: 1120, format: "number", label: text("trabajadores cubiertos por una aplicación de gestión SSO", "workers covered by an OHS management application"), context: text("Compañía Minera Raura.") },
];
