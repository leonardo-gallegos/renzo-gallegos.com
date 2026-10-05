# Codex Task 03 — Blog, MDX, Social Preview, CV Assets & Production SEO

## Context

Continue the existing portfolio project for **Renzo Gallegos** at:

`https://renzogallegos.com`

Task 01 established the technical foundation and SEO baseline.

Task 02 completed the bilingual public Home and produced a static Hostinger-ready `/out` release candidate.

Before changing any file, read completely:

1. `AGENTS.md`
2. `CLAUDE.md`
3. Task 01 specification
4. Task 01 completion report
5. Task 02 specification
6. Task 02 completion report
7. `package.json`
8. `next.config.ts`
9. `components.json`
10. all current files under `src/app`
11. all current files under `src/components`
12. all current files under `src/lib`
13. all current files under `src/data`
14. current locale message files
15. installed `frontend-design` and `web-design-guidelines` skills

Inspect first:

```bash
git status
git branch --show-current
```

Do not undo working Task 01 or Task 02 architecture.

---

# 1. Objective

Implement the first production-quality **technical blog system** and complete the main remaining public-launch assets.

This task includes:

- localized blog index
- localized article pages
- local MDX content architecture
- static generation for blog routes
- blog metadata
- article structured data
- article sitemap integration
- article RSS/Atom feed if static-compatible and clean
- reading time
- publication/update dates
- categories/tags
- related article logic
- article table of contents when useful
- syntax highlighting for code blocks
- Giscus comments
- social preview / Open Graph image
- localized CV asset integration if real PDFs are present
- final Home Blog navigation activation
- SEO editorial foundations
- accessibility/performance review
- Hostinger static-export compatibility

Do NOT add:

- CMS
- database
- authentication
- admin panel
- server actions
- Node.js runtime dependency
- contact form backend
- newsletter backend
- dynamic API
- artificial AI-generated articles
- fake publication history

---

# 2. Static architecture requirement

The project must remain compatible with:

```ts
output: "export"
```

No Node.js runtime should be required on Hostinger.

All blog pages must be generated at build time.

Dynamic blog route pattern:

```text
/es/blog/[slug]/
/en/blog/[slug]/
```

Every valid slug must be known during build.

Use:

```ts
generateStaticParams()
```

or the correct equivalent architecture.

Do not introduce runtime-only route behavior.

---

# 3. Blog content architecture

Use local MDX content.

Preferred structure:

```text
content/
└── blog/
    ├── es/
    │   ├── ...
    └── en/
        ├── ...
```

Each article must have explicit frontmatter.

Recommended schema:

```yaml
---
title:
description:
slug:
locale:
publishedAt:
updatedAt:
category:
tags:
featured:
draft:
translationKey:
---
```

Optional fields only when genuinely needed:

```yaml
coverImage:
canonical:
```

Do not include unused frontmatter fields merely for future-proofing.

Create a type-safe parser/validator.

Do not silently accept malformed metadata.

---

# 4. Localization strategy

Spanish and English are separate indexable documents.

Do not machine-translate articles at runtime.

Pair translations using a stable field such as:

```text
translationKey
```

Example:

```yaml
translationKey: pi-af-mining-architecture
```

Spanish article:

```text
/es/blog/arquitectura-pi-af-mineria/
```

English article:

```text
/en/blog/pi-af-mining-architecture/
```

Each translated pair must expose:

- correct canonical
- `hreflang="es"`
- `hreflang="en"`
- `x-default` where appropriate

If an article exists in only one language:

- do not invent the missing translation
- do not emit a fake hreflang alternate

---

# 5. Blog routes

Implement:

```text
/es/blog/
/en/blog/

/es/blog/[slug]/
/en/blog/[slug]/
```

Add Blog to the Header navigation only after the route actually exists.

Spanish:

`Blog`

English:

`Blog`

The Home Insights section should link to real articles only.

Remove any “coming soon” state when real articles are available.

---

# 6. Blog index UX

The blog index should be editorial and minimal.

Do not create a card-heavy content marketplace.

Recommended layout:

- title
- short introduction
- optional featured article
- chronological list
- category/tag metadata
- date
- reading time

Each article preview should include:

- title
- description
- date
- category
- reading time
- meaningful link text

Avoid:

- fake thumbnails
- stock images
- excessive badges
- arbitrary popularity counts
- fake view counts

---

# 7. Article layout

Create a high-quality reading experience.

Preferred article structure:

```text
Header
Breadcrumb / Back to Blog
Article title
Description / lead
Metadata
Article body
Optional Table of Contents
Related articles
Comments
Footer
```

Content width should be narrower than the Home layout.

Prioritize readability.

Suggested body measure:

```text
~65–75 characters per line
```

Use semantic HTML generated from MDX.

---

# 8. Typography

Article typography must support:

- H2
- H3
- paragraphs
- ordered lists
- unordered lists
- blockquotes
- inline code
- code blocks
- tables
- links
- strong/emphasis
- horizontal rules
- images if later added

Do not style technical writing like a marketing page.

Avoid oversized H2/H3.

Preserve strong hierarchy and reading rhythm.

---

# 9. Code blocks

Implement syntax highlighting using a static/build-time compatible approach.

Preferred direction:

- `rehype-pretty-code`
- Shiki-compatible approach
- or another small, static rendering solution

Requirements:

- no large runtime syntax-highlighting JS bundle
- readable light/dark themes
- horizontal scrolling instead of overflow
- language label if available
- accessible contrast

Do not add copy-to-clipboard behavior unless it can be implemented cleanly without turning every code block into a heavy client component.

---

# 10. Reading time

Calculate reading time from article content.

Do not store fake reading time manually.

Use either:

- a lightweight package already approved
- or a simple deterministic local helper

Expose localized output:

Spanish example:

`8 min de lectura`

English:

`8 min read`

---

# 11. Dates

Use machine-readable:

```html
<time datetime="...">
```

Display dates localized using:

- `es-PE`
- `en-US`

Do not generate publication dates dynamically.

Only use dates defined in the article frontmatter.

Do not modify article dates automatically during build.

---

# 12. Categories and tags

Keep taxonomy simple.

Initial recommended categories:

Spanish/English equivalents:

- Industrial Data
- Mining Analytics
- Data Science
- IT/OT
- Digital Transformation

Do not create dozens of categories.

Tags may include:

- AVEVA PI System
- PI AF
- PI Vision
- PostgreSQL
- Python
- FMS
- Mine-to-Mill
- Machine Learning

Taxonomy should support later filtering, but do not overbuild a complex filter UI during Task 03.

---

# 13. Initial articles

Do not fabricate long expert articles without verified user content.

Create the **blog system** and include only content that can be responsibly written from verified professional knowledge already supplied.

Create up to **three initial articles**, clearly technical and conservative.

Suggested launch articles:

## Article 1

Spanish:

`Cómo estructurar PI Asset Framework para una operación minera`

English:

`How to Structure PI Asset Framework for a Mining Operation`

Focus on:

- asset hierarchy principles
- mine / crushing / concentrator / tailings / water / energy
- reusable templates
- naming
- metadata
- scalability
- separation between assets, operations and analytics
- common modeling mistakes

Do not disclose actual internal server names, paths, tag names, confidential diagrams or proprietary data.

---

## Article 2

Spanish:

`Arquitectura de datos para analítica Mine-to-Mill`

English:

`Data Architecture for Mine-to-Mill Analytics`

Focus on:

- mine + plant integration
- FMS
- historian
- relational data
- local vs cloud compute
- data quality
- time alignment
- operational context
- traceability

Do not make unsupported business-impact claims.

---

## Article 3

Spanish:

`PI Web API vs PI SDK: cómo elegir para una integración industrial`

English:

`PI Web API vs PI SDK: Choosing an Industrial Integration Approach`

Focus on:

- architecture
- deployment constraints
- Windows dependency considerations
- portability
- authentication
- server-side integration
- use-case tradeoffs

Do not state vendor claims unless supported.

---

# 14. Article writing quality

Articles should sound like an experienced practitioner.

Avoid:

- “In today’s rapidly evolving digital world…”
- generic AI intros
- filler
- invented anecdotes
- fake quotes
- unsupported numbers
- keyword stuffing
- repeated conclusions

Use:

- direct technical explanations
- tradeoffs
- implementation reasoning
- pitfalls
- architecture patterns
- practical recommendations

Every article should answer a real technical question.

---

# 15. Editorial SEO

Each article must have:

- unique title
- unique meta description
- canonical URL
- Open Graph metadata
- Twitter metadata
- article language
- publish date
- update date when applicable
- author
- category/tags where useful

Do not duplicate the H1 text mechanically into all metadata if a better SEO title is justified.

Avoid clickbait.

---

# 16. Article structured data

Use schema.org:

```text
BlogPosting
```

or:

```text
Article
```

Choose the semantically strongest option.

Include only supported data:

- headline
- description
- author
- datePublished
- dateModified if defined
- mainEntityOfPage
- inLanguage
- keywords/tags
- image only if a real social image exists

Author should connect to Renzo Gallegos.

Do not invent publisher logos or organization identity.

---

# 17. Breadcrumb structured data

Implement visible breadcrumbs on article pages.

Example:

```text
Home / Blog / Article
```

Use localized labels.

If correct and maintainable, also add:

```text
BreadcrumbList
```

structured data.

Do not add structured data solely for volume.

---

# 18. Sitemap integration

Extend the existing sitemap.

Include:

```text
/es/
/en/
/es/blog/
/en/blog/
```

and every real non-draft article URL.

Do not include:

- drafts
- fake future articles
- nonexistent translations
- placeholder routes

Use real `publishedAt` / `updatedAt` values where appropriate.

---

# 19. Draft behavior

Articles with:

```yaml
draft: true
```

must:

- not render as public routes
- not appear in index
- not appear in sitemap
- not appear in related articles

Do not rely on robots alone.

---

# 20. Related articles

Add a simple deterministic related-article section.

Use:

- same category
- overlapping tags
- locale

Do not introduce recommendation AI.

Show 2–3 relevant articles when available.

If there are not enough articles, gracefully show fewer or omit the section.

---

# 21. Table of contents

For sufficiently long articles, create an accessible table of contents derived from H2/H3 headings.

Requirements:

- stable slug IDs
- keyboard-accessible links
- no duplicate IDs
- no runtime observer required unless necessary
- no sticky behavior that harms mobile reading

For short articles, TOC may be omitted.

---

# 22. Giscus comments

Integrate Giscus for article comments.

Requirements:

- use GitHub Discussions
- no database
- no custom backend
- comments only on article pages
- theme should follow site theme when practical
- lazy-load if possible
- keep it below article content

Configuration values such as:

```text
repo
repoId
category
categoryId
```

must not be invented.

If they are unavailable:

- implement a typed/configurable Giscus component
- document required environment/public configuration
- keep comments disabled until real values are supplied

Do not create fake IDs.

Static export must still work.

---

# 23. Social preview image

Create a real, restrained Open Graph/social preview strategy.

Preferred output:

- name: Renzo Gallegos
- role/domain line
- `renzogallegos.com`
- neutral technical visual treatment
- compatible with both LinkedIn and common messaging platforms

Do not use AI-generated stock-like artwork.

Prefer a clean typographic social card.

If generating static image assets in-repository is simpler and safer for static export, use that approach.

Use a common social aspect ratio such as:

```text
1200 × 630
```

The image must actually exist before metadata references it.

---

# 24. CV PDFs

Expected:

```text
/public/cv/renzo-gallegos-es.pdf
/public/cv/renzo-gallegos-en.pdf
```

If both real files exist:

- activate localized CV download
- verify correct locale maps to correct PDF
- use meaningful filenames
- ensure links are crawl-safe and not broken

If one or both are absent:

- keep current graceful behavior
- document the missing asset
- do not generate fake CV PDFs in this task unless explicitly instructed

---

# 25. Home integration

Update Home after blog implementation:

- Header Blog link becomes active
- Insights section uses real latest articles
- no “coming soon” copy when articles exist
- article links use correct locale
- preserve existing Home section order and design quality

Do not turn Home into a blog feed.

---

# 26. RSS / Atom

If cleanly compatible with static export, create a static feed.

Preferred:

```text
/feed.xml
```

or locale-specific feeds if justified.

Include:

- title
- URL
- description
- article URLs
- publication dates

Do not block Task 03 completion if feed implementation introduces disproportionate complexity.

If omitted, explain why.

---

# 27. Accessibility

Verify blog accessibility:

- semantic article element
- logical headings
- accessible breadcrumbs
- focus styles
- link contrast
- code-block contrast
- table scrolling on mobile
- Giscus iframe labeling where possible
- reduced-motion behavior
- no inaccessible heading anchor controls

---

# 28. Performance

Keep article pages mostly server/static rendered.

Avoid:

- hydration of full article body
- client MDX rendering
- large syntax highlighter runtime
- large animation libraries
- unnecessary third-party scripts

Giscus should be the primary third-party interactive script on article pages.

Prefer lazy loading.

---

# 29. Security and privacy

Do not include:

- internal mine hostnames
- private IPs
- credentials
- access tokens
- internal PI tags
- confidential database names
- internal screenshots
- unpublished operational values
- proprietary employer documentation

Review all article content before completion.

---

# 30. Hostinger compatibility

The blog must remain fully deployable by uploading the generated:

```text
/out
```

contents into Hostinger `public_html`.

Verify exported files for:

```text
/es/blog/index.html
/en/blog/index.html
/es/blog/<slug>/index.html
/en/blog/<slug>/index.html
```

No runtime Next.js server may be required.

---

# 31. SEO validation

Verify:

- canonical per article
- hreflang per translated pair
- no fake alternate for missing translations
- correct title/description
- BlogPosting/Article JSON-LD parses
- BreadcrumbList if implemented
- sitemap includes articles
- drafts excluded
- one H1
- logical H2/H3
- no duplicate canonical URLs
- no accidental `noindex`

---

# 32. Validation commands

Run:

```bash
npm run lint
npm run build
npx tsc --noEmit
git diff --check
```

If Task 01/02 Windows SWC cache issue reappears, reuse the documented workaround.

Do not alter unrelated permissions.

---

# 33. Manual QA

Review:

```text
/es/blog/
/en/blog/
```

and every generated article.

Test:

- 375px
- 430px
- 768px
- 1024px
- 1440px

In:

- light
- dark

Verify:

- no horizontal overflow
- code blocks
- tables
- anchors
- TOC
- language switching
- article translation linking
- Home → Blog
- Blog → Home
- related articles
- missing routes return real 404
- no hydration errors
- no console errors

---

# 34. Definition of Done

Task 03 is complete only when:

- localized blog index exists
- localized article routes exist
- MDX architecture is typed and maintainable
- static generation succeeds
- at least one real article pair exists
- no fabricated professional claims exist
- article metadata is localized
- canonical/hreflang logic is correct
- BlogPosting/Article JSON-LD exists
- sitemap includes only real public articles
- drafts are excluded
- Home links to Blog
- Insights uses real articles
- Giscus integration is ready or correctly disabled pending real IDs
- social preview image exists and metadata references a real file
- CV buttons activate only for real PDF files
- accessibility checks pass
- lint passes
- TypeScript passes
- build passes
- `/out` remains Hostinger-ready

---

# 35. Execution protocol

## Step 1 — Inspect

Read all project instructions and previous completion reports.

Do not modify immediately.

## Step 2 — Plan

Provide a concise implementation plan covering:

- MDX pipeline
- content schema
- routing/static generation
- locale pairing
- metadata
- article layout
- syntax highlighting
- sitemap
- Giscus
- social image
- Home integration

## Step 3 — Implement

Implement Task 03 only.

## Step 4 — Validate

Run lint, typecheck, build and static export validation.

## Step 5 — Editorial review

Review all initial article content for:

- correctness
- no invented claims
- no confidential material
- clarity
- technical usefulness
- non-generic writing

## Step 6 — SEO review

Validate article metadata, schema, sitemap and locale relationships.

## Step 7 — Visual QA

Review blog index and articles across required breakpoints/themes/locales.

## Step 8 — Report

Create `CODEX_TASK_03_COMPLETION.md` containing:

### Implemented
What was built.

### Files changed
Created/modified/deleted files.

### Content architecture
MDX/frontmatter/parser/routing design.

### Initial articles
Titles, slugs and locale pairs.

### SEO
Metadata, canonical, hreflang, schema, sitemap.

### Giscus
Whether active or pending real configuration.

### Social preview
Asset path and metadata integration.

### CV
Which localized PDFs are active/missing.

### Dependencies
Packages added and why.

### Validation
Lint/typecheck/build/static export.

### Hostinger readiness
Whether the updated `/out` remains ready for upload.

### Pending for Task 04
Potentially:
- detailed case studies
- analytics
- Search Console
- final production hardening
- deployment automation

---

# 36. Final constraint

Do not continue into Task 04 without explicit instruction.

The goal of Task 03 is a static, bilingual, SEO-ready technical blog integrated into the existing portfolio without introducing a runtime backend.
