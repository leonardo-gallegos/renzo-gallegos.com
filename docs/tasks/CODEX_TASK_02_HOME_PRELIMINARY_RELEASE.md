# Codex Task 02 — Complete Home & Preliminary Hostinger Release

## Context

Continue the existing portfolio project for **Renzo Gallegos** at `https://renzogallegos.com`.

Task 01 already established the technical foundation: Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, Base UI, Nova preset, Geist, Lucide, `next-intl`, `next-themes`, static export with `output: "export"`, `/es/` and `/en/`, localized metadata, canonical URLs, hreflang, Open Graph/Twitter metadata, Person JSON-LD, robots, sitemap, manifest, responsive Header/Hero/Footer, accessibility baseline, and successful lint/build/typecheck validation.

Before changing files, read completely:

1. `AGENTS.md`
2. `CLAUDE.md`
3. Task 01 specification
4. Task 01 completion report
5. `package.json`
6. `next.config.ts`
7. `components.json`
8. current files under `src/app`
9. current files under `src/components`
10. current locale messages
11. installed `frontend-design` and `web-design-guidelines` skills

Inspect:

```bash
git status
git branch --show-current
```

Do not undo working Task 01 architecture.

---

## 1. Objective

Build the first **complete public-facing Home page** in Spanish and English.

At the end of Task 02, the site should be strong enough to publish as a **preliminary public version on Hostinger**.

Implement:

- refined Hero if needed
- Tech Stack marquee/ticker
- Areas of Expertise
- Professional Experience
- Achievements
- Awards / Recognition
- Featured Work
- Education
- Latest Insights teaser
- Contact / final CTA
- complete internal Home navigation
- semantic SEO improvements
- responsive refinement
- accessibility refinement
- static export validation
- preliminary deployment readiness checks
- activation of Experience CTA
- activation of CV CTA only if real PDF assets exist

Do **not** implement yet:

- full blog engine
- `/blog/[slug]`
- MDX processing
- Giscus
- CMS
- database
- authentication
- newsletter backend
- server actions
- analytics backend
- contact form backend
- case-study detail routes

---

## 2. Product positioning

This is not a generic software developer portfolio.

The positioning is:

**Mining Engineering + Data Science + Industrial Data + IT/OT Integration + Digital Transformation + Integrated Operations**

The Home should answer:

1. Who is Renzo?
2. What makes his profile different?
3. Which technologies and domains does he work with?
4. Where has he worked?
5. What problems has he solved?
6. What measurable results has he achieved?
7. What work can be shown publicly?
8. How can someone contact him?

---

## 3. Visual direction

Preserve the Task 01 visual system.

Use a restrained Vercel/Next.js-inspired language:

- neutral palette
- typography-first
- subtle borders
- strong whitespace
- clean information hierarchy
- precise grid
- restrained microinteractions
- high technical/professional feel

Avoid:

- purple/blue AI gradients
- glowing blobs
- glassmorphism everywhere
- animated particles
- fake dashboards
- stock imagery
- skill percentage bars
- progress rings
- fake charts
- giant company logos
- generic AI marketing copy
- excessive cards/shadows/rounding

Do not make the site look like a SaaS landing page.

---

## 4. Required section order

Use this narrative order:

```text
1. Header
2. Hero
3. Tech Stack / Domain Marquee
4. Expertise
5. Professional Experience
6. Achievements
7. Awards / Recognition
8. Featured Work
9. Education
10. Latest Insights
11. Contact / Final CTA
12. Footer
```

---

## 5. Content integrity

Use only verified content from this task and existing repository materials.

Never invent:

- metrics
- achievements
- technologies
- job titles
- employers
- clients
- certifications
- project values
- dates
- awards
- production improvements
- ROI
- publications
- case-study outcomes

Do not expose confidential mining information.

---

## 6. Verified professional summary

### Spanish

**Renzo Gallegos**

`Ingeniero de Minas | Ciencia de Datos e Integración IT/OT | Centro Integrado de Operaciones`

`Ingeniero de Minas y Bachiller en Ciencia de la Computación con más de 5 años de experiencia en minería metálica y no metálica, especializado en transformación digital, integración IT/OT y analítica de datos industriales.`

Core domains:

- Minería
- Ciencia de Datos
- Analítica Industrial
- Integración IT/OT
- Centro Integrado de Operaciones
- Transformación Digital
- Mine-to-Mill

### English

**Renzo Gallegos**

`Mining Engineer | Data Science & IT/OT Integration | Integrated Operations Center`

`Mining Engineer and Computer Science graduate with 5+ years of experience in metal and non-metal mining, specialized in digital transformation, IT/OT integration and industrial data analytics.`

Core domains:

- Mining
- Data Science
- Industrial Analytics
- IT/OT Integration
- Integrated Operations
- Digital Transformation
- Mine-to-Mill

---

## 7. Hero

Keep the working Task 01 Hero unless refinement is justified.

Spanish:

- Eyebrow: `Minería · Datos · Tecnología`
- Headline: `Ingeniería minera impulsada por datos.`
- Description: `Ingeniero de Minas y profesional de Ciencia de Datos especializado en operaciones integradas, analítica industrial e integración IT/OT.`
- Primary CTA: `Ver experiencia` → `#experience`
- Secondary CTA: `Descargar CV`

English:

- Eyebrow: `Mining · Data · Technology`
- Headline: `Building data-driven mining operations.`
- Description: `Mining Engineer and Data Science professional specialized in integrated operations, industrial analytics and IT/OT integration.`
- Primary CTA: `View experience` → `#experience`
- Secondary CTA: `Download résumé`

Only activate CV downloads if these real files exist:

```text
/public/cv/renzo-gallegos-es.pdf
/public/cv/renzo-gallegos-en.pdf
```

Do not fabricate PDFs or broken links.

---

## 8. Tech Stack / Domain Marquee

Create a restrained horizontal marquee.

Requirements:

- CSS-first
- no JS animation loop
- reduced-motion support
- readable in light/dark mode
- no rainbow logo wall

Curated items:

### Industrial / OT
- AVEVA PI System
- PI AF
- PI Vision
- PI Web API
- PI SDK
- SCADA
- FMS / Dispatch

### Data
- Python
- PostgreSQL
- SQL
- Scikit-learn
- Jupyter
- Docker
- FastAPI
- Power BI

### Cloud / Integration
- Azure
- Huawei Cloud

### Mining
- MinePlan
- Deswik
- Datamine
- Vulcan
- ArcGIS

Target around 12–18 items in the recurring sequence.

---

## 9. Expertise

Section ID:

```text
expertise
```

Create four pillars.

### Spanish

#### Minería & Mine-to-Mill
`Conocimiento operativo de la cadena de valor minera y experiencia evaluando e implementando tecnologías para mina, planta y operaciones integradas.`

Topics: Mine-to-Mill, FMS / Dispatch, Planeamiento, Geología, Mantenimiento, Operaciones Integradas.

#### Datos Industriales & IT/OT
`Arquitecturas y modelos de datos industriales que conectan historiadores, sistemas operacionales y bases de datos relacionales.`

Topics: AVEVA PI System, PI AF, PI Vision, PI Web API, PI SDK, SCADA, PostgreSQL.

#### Ciencia de Datos & Analítica
`Análisis avanzado y machine learning orientados a transformar datos operacionales en decisiones de negocio.`

Topics: Python, Scikit-learn, Jupyter, Machine Learning, Root Cause Analysis, Power BI.

#### Transformación Digital & Proyectos
`Evaluación, priorización y ejecución de iniciativas tecnológicas con enfoque en valor, escalabilidad y adopción.`

Topics: Portafolio, Prefactibilidad, Factibilidad, VAN / TIR / ROI, SAFe, Scrum.

Create professional English equivalents, not awkward literal translations.

---

## 10. Professional Experience

Section ID:

```text
experience
```

Use a timeline or editorial layout, not giant isolated cards.

### Southern Peru Copper Corporation
Location: `Ilabaya, Tacna, Perú`

**Supervisor de Centro Integrado de Operaciones (CIO)**  
`May 2026 – Actualidad`

English:  
**Integrated Operations Center (IOC) Supervisor**  
`May 2026 – Present`

Use 3–5 concise highlights derived from:

- data governance across mine, concentrator, tailings, water, energy and costs
- PI Asset Framework architecture
- time-series + PostgreSQL integration
- ML and advanced analytics with Python, Scikit-learn, Jupyter and Docker
- KPI dashboards in PI Vision
- internal CIO Analytics Platform with FastAPI, PI SDK and PI Web API
- root cause analysis
- KPI governance and RACI
- AI/ML and Generative AI evaluation

Do not reproduce the full CV.

### Grupo UNACEM
Location: `Lima, Perú`

**Analista de Negocio de Tecnología**  
`Ene 2026 – May 2026`

English:  
**Technology Business Analyst**  
`Jan 2026 – May 2026`

Highlights:

- technology transformation portfolio across 5+ countries
- GBS demand and operating models
- KPIs and SLAs
- PI Planning / SAFe
- initiative prioritization and governance

### Minera Las Bambas (MMG)
Location: `Apurímac, Perú`  
Overall period: `Abr 2022 – Ene 2026` / `Apr 2022 – Jan 2026`

Group role progression inside one employer section:

- **Supervisor de Transformación Digital Minera / Project Manager** — `Oct 2025 – Ene 2026`
- **Analista de Transformación Digital Minera / Project Manager** — `Abr 2023 – Oct 2025`
- **Analista Jr de Transformación Digital Minera** — `Abr 2022 – Abr 2023`

Use concise highlights:

- digital transformation and senior management partnership
- Mine-to-Mill OT projects
- pre-feasibility / feasibility
- mining technology evaluation
- cloud/on-premise infrastructure
- NPV / IRR / ROI / payback
- portfolio of 151 improvement opportunities
- IROC initiatives

Avoid duplicate bullets across roles.

### Compañía Minera Raura

**Trainee de Seguridad y Salud Ocupacional (SSO) y Tecnología**  
`Feb 2022 – May 2022`

English:  
**Occupational Health & Safety (OHS) and Technology Trainee**

Verified highlights:

- 45,000 SYSTEMMIN records analyzed with Power BI
- React OHS management app
- 1,120 workers monitored
- 15+ web-based safety protocol assessments

### ASERCOMET
`Ene 2020 – Dic 2021`

Roles:

- **Asistente de Ingeniería de Proyectos** — `Ene 2021 – Dic 2021`
- **Practicante de Ingeniería de Minas** — `Ene 2020 – Dic 2020`

Highlights:

- mining client project planning and control
- Greenfield / Brownfield projects
- industrial control systems
- infrastructure / logistics support

### Tricon Global / TJ Goodman Inc.
Location: `Vernal, Utah, USA`

**Estudiante de Intercambio Internacional – Asistente de Producción**  
`Dic 2014 – Abr 2015`

English:  
**International Exchange Student – Production Assistant**

Keep compact.

---

## 11. Achievements

Section ID:

```text
achievements
```

Use only these verified metrics:

### 151
ES: `oportunidades de mejora gestionadas`  
EN: `improvement opportunities managed`

### 60%
ES: `reducción del costo de un proyecto`  
EN: `project cost reduction`

Context: `USD 70K → USD 26K`

Do not imply portfolio-wide savings.

### 45K
ES: `registros analizados y depurados`  
EN: `records analyzed and cleaned`

Context: SYSTEMMIN 8.5 at Raura.

### 1,120
ES: `trabajadores cubiertos por una aplicación de gestión SSO`  
EN: `workers covered by an OHS management application`

Avoid gimmicky count-up effects.

---

## 12. Awards / Recognition

Use a compact recognition block:

- **Premio “The Linker” – Linkminers** — `Ene 2025`
- **Reconocimiento al Desempeño – MMG** — `May 2024` — context: 60% cost reduction
- **Finalista categoría “The Linker” – Linkminers** — `Feb 2024`
- **Reconocimiento al Desempeño – MMG** — `Jul 2023` — context: Early Warning System study for Tailings Storage Facility

Keep restrained.

---

## 13. Featured Work

Section ID:

```text
work
```

Public-safe teasers only. Do not create detail routes yet.

### Industrial Data Architecture
ES: `Arquitectura de datos industriales`  
`Diseño de estructuras de datos industriales y modelos PI AF para integrar información operacional a lo largo de la cadena de valor minera.`

EN: `Industrial Data Architecture`  
`Design of industrial data structures and PI AF models to integrate operational information across the mining value chain.`

Tags: AVEVA PI System, PI AF, Industrial Data, IT/OT.

### Mine-to-Mill Analytics
ES: `Analítica Mine-to-Mill`  
`Integración y análisis de datos operacionales para identificar restricciones, variabilidad y oportunidades de mejora entre mina y planta.`

EN: `Mine-to-Mill Analytics`  
`Integration and analysis of operational data to identify constraints, variability and improvement opportunities across mine and plant.`

Tags: Mine-to-Mill, Analytics, FMS, Process Data.

### Integrated Operations Analytics Platform
ES: `Plataforma analítica para operaciones integradas`  
`Portal interno para consolidar y visualizar información operacional mediante FastAPI e integraciones con PI System.`

EN: `Integrated Operations Analytics Platform`  
`Internal portal for consolidating and visualizing operational information through FastAPI and PI System integrations.`

Tags: FastAPI, PI Web API, PI SDK, Python.

### Mining Equipment Delay Analytics
ES: `Analítica de demoras de equipos`  
`Análisis de estados y demoras de equipos para evaluar su evolución y apoyar el control de desempeño operativo.`

EN: `Mining Equipment Delay Analytics`  
`Analysis of equipment states and delays to evaluate their evolution and support operational performance control.`

Tags: PostgreSQL, Python, FMS, Analytics.

Never expose server names, credentials, internal URLs, tags, production values, unpublished financial values or internal screenshots.

---

## 14. Education

Section ID:

```text
education
```

Keep visually subordinate to experience.

Verified education:

- Universidad Continental – Escuela de Posgrado — `Maestría en Ciencia de Datos` — `Ago 2025 – Ago 2027` — `En curso`
- CIBERTEC — `Ingeniería de Ciencia de Datos e Inteligencia Artificial` — `Ene 2026 – Ene 2029` — `En curso`
- Harvard Business School Online — `ManageMentor – General Management & Strategy` — `2022`
- Universidad Católica San Pablo — `Bachiller en Ciencia de la Computación` — `Ago 2017 – Ago 2020`
- Universidad Nacional de San Agustín — `Bachiller en Ingeniería de Minas` — `Mar 2015 – Dic 2019`
- Universidad Nacional de San Agustín — `Especialización Profesional en Seguridad Minera e Industrial` — `Mar 2017 – Oct 2017`

Create correct English equivalents.

---

## 15. Latest Insights

Section ID:

```text
insights
```

Do not create fake blog posts.

Spanish title: `Ideas y análisis`

Topic teasers:

- `Arquitecturas de datos industriales para minería`
- `Analítica Mine-to-Mill y operaciones integradas`
- `Machine Learning aplicado a operaciones mineras`

English title: `Insights`

Topic teasers:

- `Industrial data architectures for mining`
- `Mine-to-Mill analytics and integrated operations`
- `Machine learning for mining operations`

Clearly indicate articles are forthcoming if no actual posts exist.

No fake dates. No fake routes. No sitemap entries.

---

## 16. Contact / Final CTA

Section ID:

```text
contact
```

Spanish:

Heading: `Conversemos sobre minería, datos y tecnología.`

Supporting text:  
`Disponible para conectar sobre operaciones integradas, analítica industrial, transformación digital e integración IT/OT.`

English:

Heading: `Let's talk about mining, data and technology.`

Supporting text:  
`Open to connecting around integrated operations, industrial analytics, digital transformation and IT/OT integration.`

Actions:

- LinkedIn
- Email

No contact form or backend yet.

---

## 17. Header navigation

Now activate internal navigation.

Spanish:

- `Especialidades`
- `Experiencia`
- `Proyectos`
- `Educación`
- `Contacto`

English:

- `Expertise`
- `Experience`
- `Work`
- `Education`
- `Contact`

Do not add Blog until a real route exists.

Stable IDs:

```text
#expertise
#experience
#achievements
#work
#education
#insights
#contact
```

Respect reduced-motion if smooth scrolling is used.

---

## 18. Data architecture

Do not hardcode all professional data inside JSX.

Prefer typed data, for example:

```text
src/data/
├── experience.ts
├── expertise.ts
├── achievements.ts
├── awards.ts
├── featured-work.ts
├── education.ts
└── technologies.ts
```

Create useful types where needed:

```ts
type Experience
type Role
type ExpertiseArea
type Achievement
type Award
type FeaturedWork
type EducationItem
type Technology
```

Do not over-engineer. Do not use `any`.

---

## 19. Internationalization

Do not duplicate page components by locale.

Use existing locale architecture.

All visible text must exist in both Spanish and English.

Preserve `/es/` and `/en/` and route-preserving language switching.

---

## 20. SEO semantic improvements

Task 01 established technical SEO.

Task 02 must improve semantic SEO through visible content.

Verify:

- one H1
- logical H2 hierarchy
- meaningful H3s
- descriptive links
- no heading used only for visual size
- no duplicate hidden SEO text
- no keyword stuffing

Relevant concepts should appear naturally.

Spanish:

- ingeniería de minas
- ciencia de datos
- analítica industrial
- integración IT/OT
- AVEVA PI System
- Mine-to-Mill
- operaciones integradas
- transformación digital

English:

- mining engineering
- data science
- industrial analytics
- IT/OT integration
- AVEVA PI System
- Mine-to-Mill
- integrated operations
- digital transformation

Review Person JSON-LD and enhance only with verified information.

Do not add fake Organization, Review, Rating, FAQ or Award schema.

---

## 21. Performance

Requirements:

- Server Components by default
- `"use client"` only where required
- no autoplay media
- no video background
- no giant images
- no blocking third-party scripts
- no unnecessary animation libraries
- no JS animation loops for marquee
- minimal layout shift

Use CSS for simple animation and interaction.

---

## 22. Accessibility

Verify:

- keyboard navigation
- skip link
- visible focus
- accessible language/theme controls
- semantic landmarks
- logical headings
- adequate contrast
- reduced-motion support
- touch target sizing
- no hover-only interactions

---

## 23. Responsive quality

Review at:

```text
375px
430px
768px
1024px
1280px
1440px+
```

Check:

- no horizontal overflow
- readable line lengths
- CTA wrapping
- timeline readability
- marquee clipping
- section padding
- navigation usability
- grid collapse behavior

Mobile must be intentionally designed, not compressed desktop.

---

## 24. Preliminary Hostinger readiness

The result should be ready for a preliminary static deployment.

Verify:

```bash
npm run build
```

generates:

```text
/out
```

The export must include at minimum:

- `/es/`
- `/en/`
- `/robots.txt`
- `/sitemap.xml`
- `/manifest.webmanifest`
- root locale chooser
- 404

No Node.js runtime should be required.

Document Hostinger assumptions:

- serving `index.html` inside trailing-slash directories
- custom 404 behavior
- HTTPS
- domain root
- upload of the contents of `/out`

Do not perform deployment unless explicitly instructed.

---

## 25. Preliminary release acceptance

The preliminary public version may still lack:

- full blog pages
- Giscus
- full case studies
- contact form
- analytics
- social preview image
- CV downloads if PDFs are unavailable

But it must contain:

- no broken links
- no fabricated content
- no confidential data
- no placeholder routes pretending to exist

If something does not exist, omit it or clearly mark it as forthcoming.

---

## 26. Validation

Run:

```bash
npm run lint
npm run build
npx tsc --noEmit
git diff --check
```

If the Windows SWC cache issue documented in Task 01 reappears, use the same workaround rather than changing unrelated project configuration.

The task is incomplete if production build fails.

---

## 27. Manual validation

Check `/es/` and `/en/` for:

- correct language
- correct `<html lang>`
- internal anchors
- language switching
- theme switching
- theme persistence
- responsive behavior
- canonical
- hreflang
- JSON-LD
- no hydration errors
- no console errors

Check:

```text
/robots.txt
/sitemap.xml
/manifest.webmanifest
```

Inspect `/out`.

---

## 28. Definition of Done

Task 02 is complete only when:

- complete Home exists in Spanish and English
- Hero CTA navigates to Experience
- Expertise exists
- Experience exists
- verified achievements exist
- awards exist
- Featured Work exists
- Education exists
- Insights teaser exists without fake articles
- Contact CTA exists
- Header internal navigation works
- mobile layout is polished
- dark mode is polished
- accessibility baseline is preserved
- semantic SEO structure is sound
- no invented professional information exists
- no confidential data is exposed
- no broken links exist
- static export succeeds
- lint passes
- TypeScript check passes
- `/out` is deployment-ready

---

## 29. Execution protocol

### Step 1 — Inspect
Read all instructions, Task 01 report and current code. Do not edit immediately.

### Step 2 — Plan
Provide a concise implementation plan covering:
- files to create
- files to modify
- data architecture
- section component architecture
- responsive strategy
- i18n strategy
- Hostinger-readiness strategy

### Step 3 — Implement
Implement Task 02 only.

### Step 4 — Validate
Run lint, typecheck, production build and static-export checks.

### Step 5 — Visual review
Review all major breakpoints in both themes and both locales using the installed design skills.

### Step 6 — Deployment readiness review
Confirm whether `/out` is ready for a preliminary Hostinger upload. Do not deploy.

### Step 7 — Report
Create a completion report with:

#### Implemented
Sections/features completed.

#### Files changed
Important files created/modified/deleted.

#### Data architecture
How professional content is structured.

#### Dependencies
Packages added and why.

#### Validation
Lint/typecheck/build results.

#### Visual QA
Breakpoints/themes/locales reviewed.

#### SEO
Semantic and metadata checks.

#### Hostinger readiness
State explicitly:
- whether `/out` is ready to upload
- required Hostinger configuration
- remaining blockers before public preview

#### Pending for Task 03
Only future items such as:
- MDX blog
- blog SEO
- Giscus
- real CV PDFs
- social image
- analytics
- final production deployment

---

## 30. Final constraint

Do not continue into Task 03 without explicit instruction.

The goal of Task 02 is a polished complete Home and a safe preliminary static release candidate for Hostinger.
