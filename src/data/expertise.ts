import { text, type ExpertiseArea } from "./types";

export const professionalSummary = text(
  "Ingeniero de Minas y Bachiller en Ciencia de la Computación con más de 5 años de experiencia en minería metálica y no metálica, especializado en transformación digital, integración IT/OT y analítica de datos industriales.",
  "Mining Engineer and Computer Science graduate with 5+ years of experience in metal and non-metal mining, specialized in digital transformation, IT/OT integration and industrial data analytics.",
);

export const expertise: ExpertiseArea[] = [
  {
    id: "mining",
    title: text("Minería & Mine-to-Mill", "Mining & Mine-to-Mill"),
    description: text(
      "Conocimiento operativo de la cadena de valor minera y experiencia evaluando e implementando tecnologías para mina, planta y operaciones integradas.",
      "Operational knowledge of the mining value chain, with experience evaluating and implementing technologies for mine, plant and integrated operations.",
    ),
    topics: [text("Mine-to-Mill"), text("FMS / Dispatch"), text("Planeamiento", "Planning"), text("Geología", "Geology"), text("Mantenimiento", "Maintenance"), text("Operaciones integradas", "Integrated operations")],
  },
  {
    id: "industrial-data",
    title: text("Datos industriales & IT/OT", "Industrial data & IT/OT"),
    description: text(
      "Arquitecturas y modelos de datos industriales que conectan historiadores, sistemas operacionales y bases de datos relacionales.",
      "Industrial data architectures and models connecting historians, operational systems and relational databases.",
    ),
    topics: [text("AVEVA PI System"), text("PI AF"), text("PI Vision"), text("PI Web API"), text("PI SDK"), text("SCADA"), text("PostgreSQL")],
  },
  {
    id: "data-science",
    title: text("Ciencia de datos & analítica", "Data science & analytics"),
    description: text(
      "Análisis avanzado y machine learning orientados a transformar datos operacionales en decisiones de negocio.",
      "Advanced analytics and machine learning that turn operational data into business decisions.",
    ),
    topics: [text("Python"), text("Scikit-learn"), text("Jupyter"), text("Machine Learning"), text("Análisis de causa raíz", "Root cause analysis"), text("Power BI")],
  },
  {
    id: "transformation",
    title: text("Transformación digital & proyectos", "Digital transformation & projects"),
    description: text(
      "Evaluación, priorización y ejecución de iniciativas tecnológicas con enfoque en valor, escalabilidad y adopción.",
      "Evaluation, prioritization and delivery of technology initiatives focused on value, scalability and adoption.",
    ),
    topics: [text("Portafolio", "Portfolio"), text("Prefactibilidad", "Pre-feasibility"), text("Factibilidad", "Feasibility"), text("VAN / TIR / ROI", "NPV / IRR / ROI"), text("SAFe"), text("Scrum")],
  },
];
