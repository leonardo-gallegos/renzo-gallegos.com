# Technical content roadmap

Future editorial proposals only: no new articles, dates, slugs, URLs or sitemap entries. Renzo should review and contribute public-safe practitioner detail before publication. Experience bases below come from the verified owner CV/Home history, not a claim that these articles or particular implementations have been published. Use [authoring rules](BLOG_AUTHORING.md) when writing is authorized.

## 1. PI Web API vs PI SDK

- Audience: industrial integration engineers and mining data teams.
- Search intent: compare interfaces under deployment/security constraints.
- Primary question: which approach fits the consumer, environment and authentication model?
- Experience basis: verified CIO analytics platform work includes FastAPI, PI SDK and PI Web API integration.
- Confidentiality: synthetic architecture only; no endpoints, credentials, internal security topology or production configuration. Verify current vendor primary documentation for support/platform claims.
- ES/EN pairing: “PI Web API vs PI SDK: criterios para una integración industrial” / “PI Web API vs PI SDK: Industrial Integration Criteria”; actual paired documents and a shared translation key when authored.

## 2. Industrial historian data-quality rules

- Audience: historian administrators, analysts and data stewards.
- Search intent: implement practical checks before operational analysis.
- Primary question: how should quality flags, gaps, units, timestamps and stale values affect analytic inputs?
- Experience basis: verified industrial data governance, PI AF/time-series integration and root-cause analytics responsibilities.
- Confidentiality: illustrative signals only; no real tags, operating limits, sensor/production values or alarm thresholds.
- ES/EN pairing: “Reglas de calidad para datos de historiadores industriales” / “Data-Quality Rules for Industrial Historians”; equivalent reviewed examples with a real shared translation key.

## 3. FMS delay analytics with PostgreSQL and Python

- Audience: dispatch analysts, operations/reliability teams and data engineers.
- Search intent: reproducibly analyze equipment states/delays using relational data.
- Primary question: how should overlapping intervals and inconsistent classifications be handled before aggregation?
- Experience basis: verified FMS/Mine-to-Mill domains and public-safe equipment-delay work using PostgreSQL/Python.
- Confidentiality: synthetic schema/events/code; no fleet IDs, employer tables, dispatch exports, production/utilization values or proprietary delay codes.
- ES/EN pairing: “Analítica de demoras FMS con PostgreSQL y Python” / “FMS Delay Analytics with PostgreSQL and Python”; reviewed calculations, no invented business impact.

## 4. Mine-to-Mill data alignment

- Audience: mine/plant analysts and operations integration engineers.
- Search intent: reconcile time windows and operational context across systems.
- Primary question: how do timestamps, material movement, aggregation windows and traceability shape a joined dataset?
- Experience basis: verified Mine-to-Mill OT projects and operational integration/analytics responsibilities.
- Confidentiality: synthetic windows/flows; no geological models, ore grades, throughput, recoveries, actual transport timings or unpublished outcomes.
- ES/EN pairing: “Alineación de datos para analítica Mine-to-Mill” / “Aligning Data for Mine-to-Mill Analytics”; deepen the existing architecture pair with a distinct question.

## 5. Industrial KPI governance

- Audience: IOC leaders, analysts and data/business owners.
- Search intent: establish accountable, consistent operational indicators.
- Primary question: how should ownership, definitions, units, windows and change approval prevent conflicting KPIs?
- Experience basis: verified CIO KPI governance/RACI, PI Vision dashboards and UNACEM KPIs/SLAs/governance work.
- Confidentiality: generic definitions/RACI only; no employer targets, scorecards, costs, SLA values or unpublished performance.
- ES/EN pairing: “Gobernanza de indicadores industriales” / “Governing Industrial KPIs”; consistent translated roles/definitions without invented results.

## 6. Integrated Operations Center data architecture

- Audience: mining technology leaders and IT/OT/data architects.
- Search intent: structure information flows for cross-domain decisions.
- Primary question: how should historian, relational, API and presentation responsibilities be separated for maintainable IOC analytics?
- Experience basis: current CIO/IOC Supervisor role, verified PI AF/time-series/PostgreSQL integration and FastAPI platform work.
- Confidentiality: conceptual diagrams only; no employer network maps, IPs, internal application URLs/names or sensitive operational relationships.
- ES/EN pairing: “Arquitectura de datos para un Centro Integrado de Operaciones” / “Data Architecture for an Integrated Operations Center”; equivalent depth, actual translated documents only.

## 7. PI AF naming and metadata standards

- Audience: PI AF administrators and industrial data modelers.
- Search intent: establish consistent names/context for reusable models.
- Primary question: what belongs in a stable identifier versus descriptive metadata, and how should templates/changes be governed?
- Experience basis: verified PI Asset Framework architecture and industrial data structure responsibilities.
- Confidentiality: fictional assets/attributes and generic templates; no hierarchy exports, internal tag conventions, proprietary models or real server paths.
- ES/EN pairing: “Estándares de nombres y metadatos en PI AF” / “PI AF Naming and Metadata Standards”; focused companion to the existing structure article.

## 8. ML deployment patterns in mining

- Audience: mining data scientists, IT/OT engineers and operational sponsors.
- Search intent: understand deployment/monitoring/adoption constraints.
- Primary question: when should batch, local-service or cloud inference be considered, and how are quality, drift and human review handled?
- Experience basis: verified ML/advanced analytics with Python, Scikit-learn, Jupyter and Docker, plus cloud/on-premise evaluation.
- Confidentiality: synthetic models/abstract patterns; no employer weights, real training data, sensitive integrations or invented accuracy/ROI/production benefits.
- ES/EN pairing: “Patrones de despliegue de machine learning en minería” / “Machine Learning Deployment Patterns in Mining”; consistent caveats and owner review of claimed first-hand practices.

## Publication gate

Prioritize from real search questions and owner experience availability, not invented traffic forecasts. Each proposal needs original explanation, public-safe examples, verified vendor references where needed, distinct intent, actual ES/EN authoring/review and relevant internal links. Do not create routes for unwritten translations. Keep drafts out of routes/indexes/feeds/sitemap. Use actual publication/update dates, rebuild/validate and deploy through review. No additional content is published by Task 06.
