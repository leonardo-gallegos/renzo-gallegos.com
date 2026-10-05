import { text, type Award } from "./types";

export const awards: Award[] = [
  { id: "linker-2025", title: text("Premio “The Linker”", "“The Linker” award"), organization: "Linkminers", date: "2025-01" },
  { id: "mmg-2024", title: text("Reconocimiento al Desempeño", "Performance recognition"), organization: "MMG", date: "2024-05", context: text("Reducción del costo de un proyecto en 60%.", "60% reduction in the cost of one project.") },
  { id: "linker-2024", title: text("Finalista, categoría “The Linker”", "Finalist, “The Linker” category"), organization: "Linkminers", date: "2024-02" },
  { id: "mmg-2023", title: text("Reconocimiento al Desempeño", "Performance recognition"), organization: "MMG", date: "2023-07", context: text("Estudio de un sistema de alerta temprana para una instalación de almacenamiento de relaves.", "Early Warning System study for a Tailings Storage Facility.") },
];
