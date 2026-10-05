import { text, type Experience } from "./types";

// Source: Task 02, section 10; location/role titles reconciled with owner CVs in Task 05.
export const experience: Experience[] = [
  {
    id: "southern", employer: "Southern Peru Copper Corporation",
    location: text("Toquepala, Tacna, Perú", "Toquepala, Tacna, Peru"), start: "2026-05",
    roles: [{ title: text("Supervisor de Centro Integrado de Operaciones (CIO)", "Integrated Operations Center (IOC) Supervisor"), start: "2026-05" }],
    highlights: [
      text("Gobernanza de datos y KPIs a lo largo de mina, concentradora, relaves, agua, energía y costos.", "Data and KPI governance across mine, concentrator, tailings, water, energy and costs."),
      text("Arquitectura PI Asset Framework e integración de series temporales con PostgreSQL.", "PI Asset Framework architecture and time-series integration with PostgreSQL."),
      text("Machine learning y analítica avanzada con Python, Scikit-learn, Jupyter y Docker; análisis de causa raíz.", "Machine learning and advanced analytics with Python, Scikit-learn, Jupyter and Docker; root cause analysis."),
      text("Dashboards de KPIs en PI Vision y plataforma analítica interna con FastAPI, PI SDK y PI Web API.", "KPI dashboards in PI Vision and an internal analytics platform with FastAPI, PI SDK and PI Web API."),
    ],
  },
  {
    id: "unacem", employer: "Grupo UNACEM", location: text("Lima, Perú", "Lima, Peru"), start: "2026-01", end: "2026-05",
    roles: [{ title: text("Analista de Negocio de Tecnología", "Technology Business Analyst"), start: "2026-01", end: "2026-05" }],
    highlights: [
      text("Portafolio de transformación tecnológica en más de 5 países; priorización y gobernanza de iniciativas.", "Technology transformation portfolio across 5+ countries; initiative prioritization and governance."),
      text("Modelos de demanda y operación de GBS, con seguimiento de KPIs y SLAs.", "GBS demand and operating models, with KPI and SLA tracking."),
      text("Planificación de iniciativas mediante PI Planning y SAFe.", "Initiative planning through PI Planning and SAFe."),
    ],
  },
  {
    id: "las-bambas", employer: "Minera Las Bambas (MMG)", location: text("Apurímac, Perú", "Apurímac, Peru"), start: "2022-04", end: "2026-01",
    roles: [
      { title: text("Supervisor de Transformación Digital Minera", "Digital Mining Transformation Supervisor"), start: "2025-10", end: "2026-01" },
      { title: text("Analista de Transformación Digital Minera", "Digital Mining Transformation Analyst"), start: "2023-04", end: "2025-10" },
      { title: text("Analista Jr de Transformación Digital Minera", "Junior Mining Digital Transformation Analyst"), start: "2022-04", end: "2023-04" },
    ],
    highlights: [
      text("Transformación digital en colaboración con la alta dirección; gestión de un portafolio de 151 oportunidades de mejora.", "Digital transformation in partnership with senior management; management of a portfolio of 151 improvement opportunities."),
      text("Proyectos OT Mine-to-Mill e iniciativas para el Centro Remoto Integrado de Operaciones (IROC).", "Mine-to-Mill OT projects and Integrated Remote Operations Center (IROC) initiatives."),
      text("Evaluación de tecnologías mineras y estudios de prefactibilidad y factibilidad con VAN, TIR, ROI y payback.", "Mining technology evaluation and pre-feasibility/feasibility studies using NPV, IRR, ROI and payback."),
      text("Evaluación de infraestructura cloud y on-premise para iniciativas tecnológicas.", "Evaluation of cloud and on-premise infrastructure for technology initiatives."),
    ],
  },
  {
    id: "raura", employer: "Compañía Minera Raura", start: "2022-02", end: "2022-05",
    roles: [{ title: text("Trainee de Seguridad y Salud Ocupacional (SSO) y Tecnología", "Occupational Health & Safety (OHS) and Technology Trainee"), start: "2022-02", end: "2022-05" }],
    highlights: [
      text("Análisis de 45.000 registros de SYSTEMMIN con Power BI.", "Analysis of 45,000 SYSTEMMIN records with Power BI."),
      text("Aplicación de gestión SSO en React para el seguimiento de 1.120 trabajadores.", "React OHS management application covering 1,120 workers."),
      text("Más de 15 evaluaciones web de protocolos de seguridad.", "15+ web-based safety protocol assessments."),
    ],
  },
  {
    id: "asercomet", employer: "ASERCOMET", start: "2020-01", end: "2021-12",
    roles: [
      { title: text("Asistente de Ingeniería de Proyectos", "Project Engineering Assistant"), start: "2021-01", end: "2021-12" },
      { title: text("Practicante de Ingeniería de Minas", "Mining Engineering Intern"), start: "2020-01", end: "2020-12" },
    ],
    highlights: [
      text("Planeamiento y control de proyectos para clientes mineros, incluidos proyectos Greenfield y Brownfield.", "Project planning and control for mining clients, including Greenfield and Brownfield projects."),
      text("Sistemas de control industrial y soporte de infraestructura y logística.", "Industrial control systems and infrastructure/logistics support."),
    ],
  },
  {
    id: "tricon", employer: "Tricon Global / TJ Goodman Inc.", location: text("Vernal, Utah, EE. UU.", "Vernal, Utah, USA"), start: "2014-12", end: "2015-04",
    roles: [{ title: text("Estudiante de Intercambio Internacional – Asistente de Producción", "International Exchange Student – Production Assistant"), start: "2014-12", end: "2015-04" }],
    highlights: [],
  },
];
