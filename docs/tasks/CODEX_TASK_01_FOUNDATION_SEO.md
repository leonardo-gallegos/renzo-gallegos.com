# Codex Task 01 — Foundation, Architecture, Hero & SEO Baseline

## Context

You are working on the personal portfolio and technical blog of **Renzo Gallegos**, to be deployed at:

`https://renzogallegos.com`

The project already exists and was initialized with:

- Next.js using App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Base UI
- Nova preset
- Geist typography
- Lucide icons
- ESLint
- `src/` directory
- import alias `@/*`

The repository also contains:

- `AGENTS.md`
- `CLAUDE.md`
- installed `frontend-design` skill
- installed `web-design-guidelines` skill

Before changing any file, you MUST read:

1. `AGENTS.md`
2. `CLAUDE.md`
3. the existing `package.json`
4. the existing `next.config.ts`
5. the existing `components.json`
6. the current contents of `src/app`
7. the current contents of `src/components`
8. the installed skills relevant to frontend design and web design guidelines

Do not assume configuration details that can be inspected directly.

---

# 1. Objective of this task

Implement only the **foundation of the website and the first production-quality Home viewport**.

This task covers:

- project architecture cleanup
- internationalization foundation
- dark/light theme
- global layout
- responsive header
- language selector
- theme selector
- Hero section
- initial footer
- SEO technical baseline
- accessibility baseline
- static-export compatibility
- production build validation

Do **not** implement the full portfolio yet.

Do not implement:

- professional experience section
- education section
- awards section
- project/case-study cards
- blog listing
- blog article rendering
- Giscus
- contact form backend
- analytics platform
- CMS
- database
- authentication

Those belong to later phases.

---

# 2. Product positioning

This website is not a generic software-developer portfolio.

The professional positioning is the intersection of:

**Mining Engineering + Data Science + Industrial Data + IT/OT Integration + Digital Transformation**

Renzo is:

- Mining Engineer
- Computer Science graduate
- Data Science master's student
- Integrated Operations Center Supervisor
- experienced in mining digital transformation
- experienced in industrial analytics
- experienced in AVEVA PI System
- experienced in Python and SQL
- experienced in IT/OT integration
- experienced in Mine-to-Mill initiatives
- experienced in technology project and portfolio management

The website must communicate technical credibility, engineering rigor and operational experience.

Avoid presenting him primarily as a frontend developer.

---

# 3. Visual direction

Use a restrained, premium and technical visual language inspired by:

- Vercel
- Next.js
- modern developer documentation
- high-end B2B technology products

The design must feel:

- minimal
- precise
- professional
- high-tech
- engineering-oriented
- spacious
- typography-driven

Prefer:

- strong typography
- subtle borders
- neutral surfaces
- careful spacing
- thin separators
- restrained motion
- excellent responsive behavior
- clean hierarchy
- monochrome or near-monochrome palette

A single restrained accent color may be used.

Do NOT use:

- purple/blue AI gradients
- excessive glassmorphism
- animated particles
- giant glowing blobs
- 3D decorations
- fake dashboards
- generic AI illustrations
- excessive cards
- skill progress bars
- percentage skill ratings
- excessive badges
- arbitrary metrics
- meaningless animations
- "AI-generated portfolio" visual clichés

Do not add a profile photo in this phase.

The Hero must work entirely through typography, layout and hierarchy.

---

# 4. Content integrity rules

Never invent professional information.

Never invent:

- metrics
- awards
- certifications
- projects
- clients
- job titles
- technologies
- dates
- financial impact
- operational results

Do not expose potentially confidential mining information.

For this first task, use only the following verified public-safe positioning:

## Spanish

Name:

`Renzo Gallegos`

Primary positioning:

`Ingeniería minera impulsada por datos.`

Supporting line:

`Ingeniero de Minas y profesional de Ciencia de Datos especializado en operaciones integradas, analítica industrial e integración IT/OT.`

Professional domains:

`Minería · Datos · Tecnología`

CTA 1:

`Ver experiencia`

CTA 2:

`Descargar CV`

## English

Name:

`Renzo Gallegos`

Primary positioning:

`Building data-driven mining operations.`

Supporting line:

`Mining Engineer and Data Science professional specialized in integrated operations, industrial analytics and IT/OT integration.`

Professional domains:

`Mining · Data · Technology`

CTA 1:

`View experience`

CTA 2:

`Download résumé`

LinkedIn:

`https://linkedin.com/in/renzo-gallegos`

Email:

`renzo.leonardo@hotmail.com`

Do not publish the phone number in this phase.

---

# 5. Architecture

Use an architecture that can later support:

- `/es`
- `/en`
- `/es/blog`
- `/en/blog`
- `/es/blog/[slug]`
- `/en/blog/[slug]`
- MDX content
- structured data per article
- static generation

Preferred structure:

```text
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── manifest.ts
│   ├── robots.ts
│   └── sitemap.ts
│
├── components/
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── container.tsx
│   ├── sections/
│   │   └── hero.tsx
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   ├── language-switcher.tsx
│   └── ui/
│
├── i18n/
│   ├── routing.ts
│   └── request.ts
│
├── lib/
│   ├── seo.ts
│   └── utils.ts
│
└── types/

messages/
├── es.json
└── en.json
```

This is guidance, not an instruction to blindly overwrite working shadcn conventions.

Preserve existing working configuration where appropriate.

---

# 6. Internationalization

Use `next-intl`.

Supported locales:

```ts
["es", "en"]
```

Spanish should be the default language.

Desired public URLs:

```text
/es/
/en/
```

Do not implement translations by duplicating entire pages.

Store interface text in:

```text
messages/es.json
messages/en.json
```

The language switcher must preserve the equivalent route when possible.

Example:

```text
/es/  -> /en/
/en/  -> /es/
```

Design the implementation so future routes such as:

```text
/es/blog/example
/en/blog/example
```

can also switch locale cleanly.

Do not rely exclusively on localStorage for language selection because URLs must remain indexable and shareable.

---

# 7. Theme

Use `next-themes`.

Support:

- Light
- Dark
- System

Persist preference.

Avoid hydration errors.

Use semantic design tokens rather than hard-coding colors repeatedly in components.

Respect the existing shadcn theme foundation.

Dark mode should not simply invert colors; verify contrast and border visibility.

---

# 8. Header

Create a responsive header.

Desktop concept:

```text
Renzo Gallegos                     About / Experience / Blog     ES     Theme
```

However, because later sections are not implemented yet, do not create broken navigation.

For this phase it is acceptable to use:

- brand/name
- language selector
- theme selector
- LinkedIn link

The brand should link to the current locale home page.

Use a subtle bottom border.

Header should be:

- responsive
- accessible
- keyboard navigable
- visually restrained

Avoid a large floating pill navbar.

---

# 9. Hero

The Hero is the key deliverable of this phase.

It should occupy approximately the first viewport without forcing rigid `100vh` behavior on mobile.

Suggested structure:

```text
Mining · Data · Technology

Engineering/mining headline

Supporting description

Primary CTA
Secondary CTA

LinkedIn / Email / Location or professional context
```

The hierarchy must clearly prioritize:

1. positioning
2. headline
3. supporting description
4. CTAs
5. secondary links

Suggested desktop scale:

- headline roughly 64–88px depending on breakpoint
- supporting text around 18–20px
- generous vertical spacing
- max-width to preserve readable line lengths

Do not center everything mechanically.

A left-aligned editorial composition is preferred.

A subtle technical grid or line treatment may be used as background if implemented with CSS and kept extremely understated.

No hero image.

No stock imagery.

No decorative illustrations.

---

# 10. CTA behavior

Primary CTA:

Spanish:

`Ver experiencia`

English:

`View experience`

For now it can point to:

```text
#experience
```

but if the target section does not exist yet, either:

- create a harmless placeholder anchor at the end of the current page, OR
- temporarily make the CTA non-destructive and document that it will be activated in Task 02.

Do not create a broken navigation experience.

Secondary CTA:

Spanish:

`Descargar CV`

English:

`Download résumé`

Expected future files:

```text
/public/cv/renzo-gallegos-es.pdf
/public/cv/renzo-gallegos-en.pdf
```

If those PDFs do not currently exist:

- do not create fake PDFs
- do not create broken download buttons
- gracefully disable or label the CTA for future activation
- document the missing asset clearly

Never invent a download file.

---

# 11. SEO — high priority

SEO is a first-class requirement, not a later cleanup.

Implement a robust baseline using the Next.js Metadata API.

The site should be prepared for:

```text
https://renzogallegos.com
```

## 11.1 Metadata

Each locale must have appropriate localized:

- title
- description
- canonical URL
- Open Graph metadata
- Twitter metadata

Suggested Spanish homepage title:

`Renzo Gallegos | Minería, Ciencia de Datos e Integración IT/OT`

Suggested English homepage title:

`Renzo Gallegos | Mining, Data Science & IT/OT Integration`

Suggested Spanish description:

`Ingeniero de Minas especializado en ciencia de datos, analítica industrial, AVEVA PI System, integración IT/OT y transformación digital para operaciones mineras.`

Suggested English description:

`Mining Engineer specialized in data science, industrial analytics, AVEVA PI System, IT/OT integration and digital transformation for mining operations.`

Keep title lengths reasonable.

Do not keyword-stuff.

---

# 12. Canonical and hreflang

Configure locale alternatives correctly.

Spanish:

```text
https://renzogallegos.com/es/
```

English:

```text
https://renzogallegos.com/en/
```

Metadata should communicate:

```text
es
en
x-default
```

Use absolute canonical URLs.

Do not allow both `/es` and `/es/` to compete as separate canonical pages.

Be consistent with the chosen trailing-slash strategy.

---

# 13. Structured data

Add JSON-LD for the home page.

Use schema.org `Person`.

Only include verifiable information.

Recommended fields:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Renzo Gallegos",
  "url": "https://renzogallegos.com",
  "sameAs": [
    "https://linkedin.com/in/renzo-gallegos"
  ],
  "jobTitle": "Integrated Operations Center Supervisor",
  "knowsAbout": [
    "Mining Engineering",
    "Data Science",
    "Industrial Analytics",
    "IT/OT Integration",
    "AVEVA PI System",
    "Mine-to-Mill",
    "Machine Learning"
  ]
}
```

Do not invent:

- image URL
- employer URLs
- social networks
- academic identifiers

unless those values actually exist in the repository or verified source content.

Make the JSON-LD implementation reusable for future schemas.

---

# 14. robots.txt

Generate it with Next.js metadata conventions.

Expected behavior:

```text
User-agent: *
Allow: /

Sitemap: https://renzogallegos.com/sitemap.xml
```

Do not accidentally block `/es`, `/en`, assets, or future blog content.

---

# 15. Sitemap

Generate a sitemap using Next.js.

For this phase it should include at least:

```text
https://renzogallegos.com/es/
https://renzogallegos.com/en/
```

Structure it so blog URLs can later be generated programmatically.

Do not hardcode a future list of posts.

---

# 16. Semantic HTML

Use proper HTML structure.

Expected concepts:

```html
<header>
<nav>
<main>
<section>
<footer>
```

Only one primary `<h1>` per page.

Do not use generic `<div>` elements where semantic elements clearly apply.

Links must be actual links.

Buttons must be actual buttons.

---

# 17. Accessibility

Minimum requirements:

- keyboard-accessible navigation
- visible focus states
- correct color contrast
- `aria-label` where icon-only controls require it
- accessible theme switcher
- accessible language switcher
- reduced-motion consideration
- logical heading hierarchy
- no interaction dependent exclusively on hover

Do not remove browser focus outlines without replacing them properly.

---

# 18. Performance

Treat performance as part of the design.

Prefer Server Components.

Use `"use client"` only when required.

Client components are justified for:

- theme interactions
- language selector interactions if necessary
- interactive mobile navigation

Do not convert the whole page into a Client Component.

Avoid unnecessary libraries.

Do not use Motion for simple effects that CSS can handle.

Use CSS for:

- hover states
- simple fades
- underlines
- basic transitions

Use motion libraries only if the interaction genuinely benefits.

No autoplay media.

No video backgrounds.

---

# 19. Static export

The target deployment for Phase 1 is static hosting on Hostinger.

Configure the project for static export unless current project constraints make that invalid.

Preferred configuration:

```ts
output: "export"
```

Production build must generate:

```text
/out
```

If `next/image` is used, account for static-export constraints.

Prefer not to use images at all in this phase.

Do not introduce server-only functionality incompatible with static export.

Avoid:

- Server Actions
- runtime API routes
- cookies-based server behavior
- request-dependent Route Handlers
- dynamic server rendering

If `next-intl` requires a different implementation pattern to remain static-export compatible, use the compatible pattern and document the decision.

---

# 20. Root route

Decide carefully how `/` behaves under static export.

Do not implement a server redirect that breaks `output: "export"`.

Preferred approaches include:

- a minimal static locale chooser
- a safe client-side locale redirect
- another static-export-compatible pattern

Spanish is the default locale.

Explain the selected approach in the completion report.

The SEO canonical home pages remain `/es/` and `/en/`.

---

# 21. Manifest

Create a basic web manifest using Next.js conventions.

Use:

- site name: `Renzo Gallegos`
- short name: `Renzo Gallegos`
- appropriate theme/background colors
- standalone/display values where sensible

Do not reference icons that do not exist.

---

# 22. Footer

Create a minimal footer containing:

- Renzo Gallegos
- current year
- LinkedIn
- email
- optional localized short descriptor

Keep it visually quiet.

No giant sitemap footer yet.

---

# 23. CSS and design system

Preserve shadcn's token system.

Do not scatter hardcoded values throughout components unnecessarily.

Create reusable layout primitives where useful.

Example:

```tsx
<Container>
```

The maximum content width should be consistent across:

- Header
- Hero
- future sections
- Footer

Use Tailwind carefully.

Avoid unreadable 20-class strings when a reusable component would improve clarity.

Do not prematurely abstract trivial one-use patterns.

---

# 24. Responsive behavior

Explicitly verify at:

- ~375px
- ~768px
- ~1024px
- ~1440px

Hero text must not overflow.

Navigation must remain usable.

CTA buttons must wrap cleanly.

No horizontal scroll.

Spacing should adapt rather than simply shrink.

---

# 25. Code quality

Use strict TypeScript.

Do not use:

```ts
any
```

unless unavoidable and justified.

Avoid:

- dead code
- duplicate content
- commented-out implementations
- TODO spam
- huge monolithic components
- arbitrary constants repeated everywhere

Naming must be clear and professional.

---

# 26. Dependencies

Before installing any new package:

1. inspect `package.json`
2. verify it is actually needed
3. prefer existing dependencies where possible

Expected packages for this phase may include:

```text
next-intl
next-themes
```

Lucide may already be installed through the shadcn preset.

Do not reinstall or duplicate equivalent packages.

Do not add large UI libraries.

Do not add another component system.

Do not add Bootstrap, Material UI, Chakra, Ant Design or similar.

---

# 27. Git discipline

Do not commit automatically unless explicitly instructed.

Do not delete unrelated existing user work.

Do not rewrite Git history.

Before editing, inspect:

```bash
git status
```

At completion, report:

- modified files
- created files
- deleted files
- new dependencies
- commands executed
- build result
- lint result
- remaining issues

---

# 28. Validation required before completion

Run the available equivalent commands for:

```bash
npm run lint
npm run build
```

If a TypeScript-specific command exists, run it.

The task is not complete if production build fails.

Fix:

- ESLint errors
- TypeScript errors
- static-export errors
- broken imports
- hydration errors visible during normal execution

Warnings should be reviewed, not blindly ignored.

---

# 29. Manual checks

After implementation, verify:

## `/es/`

- Spanish text
- correct Spanish metadata
- correct canonical
- `lang="es"`
- theme switch works
- locale switch goes to English
- mobile layout works

## `/en/`

- English text
- correct English metadata
- correct canonical
- `lang="en"`
- theme switch works
- locale switch goes to Spanish

## SEO

Verify generated:

```text
/robots.txt
/sitemap.xml
```

Verify JSON-LD exists in rendered HTML.

Verify no `noindex` is accidentally present.

Verify canonical URLs are absolute.

---

# 30. Definition of Done

Task 01 is complete only when:

- the application builds successfully
- static export succeeds
- `/es/` works
- `/en/` works
- dark/light mode works
- Hero is responsive and production-quality
- header is accessible
- footer is present
- metadata is localized
- canonical links are correct
- hreflang alternatives are correct
- Person JSON-LD is included
- robots.txt exists
- sitemap.xml exists
- no invented professional information was added
- no broken CV link exists
- no unnecessary dependency was introduced
- no major accessibility issue is obvious
- there is no horizontal overflow at common widths

---

# 31. Execution protocol

Follow this sequence.

## Step 1 — Inspect

Read all project instructions and inspect the current architecture.

Do not modify files yet.

## Step 2 — Plan

Provide a concise implementation plan with:

- files to create
- files to modify
- dependencies required
- static-export/i18n approach
- SEO approach

Keep this plan practical.

## Step 3 — Implement

Implement Task 01 only.

Do not proceed to later portfolio sections.

## Step 4 — Validate

Run lint and production build.

Fix failures.

## Step 5 — Review

Review the UI against the installed:

- `frontend-design`
- `web-design-guidelines`

skills.

Correct obvious visual, responsive or accessibility issues.

## Step 6 — Report

Return a concise completion report containing:

### Implemented
What was built.

### Files changed
Important created/modified files.

### Dependencies
Any packages added.

### Validation
Results of lint/build.

### Decisions
Important technical decisions, especially:

- locale routing
- root `/` behavior
- static export
- metadata
- theme behavior

### Pending for Task 02
Only legitimate next-stage items.

---

# 32. Important final constraint

Do not continue into Task 02 without explicit instruction.

Task 01 must leave the project in a clean, stable, production-buildable state.
