import { text, type EducationItem } from "./types";

export const education: EducationItem[] = [
  { id: "continental", institution: "Universidad Continental – Escuela de Posgrado", qualification: text("Maestría en Ciencia de Datos", "Master’s in Data Science"), period: { start: "2025-08", end: "2027-08" }, inProgress: true },
  { id: "cibertec", institution: "CIBERTEC", qualification: text("Ingeniería de Ciencia de Datos e Inteligencia Artificial", "Data Science and Artificial Intelligence Engineering"), period: { start: "2026-01", end: "2029-01" }, inProgress: true },
  { id: "harvard", institution: "Harvard Business School Online", qualification: text("ManageMentor – General Management & Strategy"), period: { year: 2022 } },
  { id: "ucsp", institution: "Universidad Católica San Pablo", qualification: text("Bachiller en Ciencia de la Computación", "Bachelor’s degree in Computer Science"), period: { start: "2017-08", end: "2020-08" } },
  { id: "unsa-mining", institution: "Universidad Nacional de San Agustín", qualification: text("Bachiller en Ingeniería de Minas", "Bachelor’s degree in Mining Engineering"), period: { start: "2015-03", end: "2019-12" } },
  { id: "unsa-safety", institution: "Universidad Nacional de San Agustín", qualification: text("Especialización Profesional en Seguridad Minera e Industrial", "Professional Specialization in Mining and Industrial Safety"), period: { start: "2017-03", end: "2017-10" } },
];
