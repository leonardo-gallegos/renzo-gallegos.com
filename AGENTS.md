# AGENTS.md — renzogallegos.com

## Mission
Build and maintain the professional portfolio and technical blog of Renzo Gallegos. The site must communicate a clear positioning at the intersection of mining engineering, industrial data, data science, IT/OT integration, and digital transformation.

## Product goals
1. Present Renzo as a technically credible mining professional, not as a generic software developer.
2. Convert recruiters, mining leaders, technology vendors, and technical peers into useful actions: read experience, view selected work, download CV, visit LinkedIn/GitHub, or contact Renzo.
3. Build long-term organic search visibility around mining analytics, AVEVA PI System, Mine-to-Mill, industrial data, FMS analytics, machine learning in mining, IT/OT integration, and digital transformation.
4. Keep the site fast, accessible, static-first, easy to maintain, and deployable to Hostinger.

## Stack and architectural constraints
- Next.js App Router
- TypeScript with strict typing; do not use `any` unless there is a documented reason.
- Tailwind CSS
- shadcn/ui using the selected Base UI + Nova / Lucide / Geist preset.
- Lucide icons.
- Motion only where animation adds meaning; respect `prefers-reduced-motion`.
- `next-intl` for Spanish and English.
- `next-themes` for dark/light/system mode.
- Static-first deployment using `output: "export"` unless a feature explicitly requires a server runtime.
- Blog content should initially be local MDX committed to Git. Do not introduce a CMS or database without a concrete requirement.
- Comments should use Giscus when blog comments are implemented.

## Information architecture
Home sequence:
1. Header
2. Hero
3. Technology marquee
4. Expertise / domains
5. Professional experience
6. Quantified achievements
7. Featured work / case studies
8. Education and certifications
9. Latest blog posts
10. Contact / CV
11. Footer

Blog:
- `/es/blog/`
- `/en/blog/`
- `/es/blog/[slug]/`
- `/en/blog/[slug]/`

## Visual direction
- Minimal, precise, technical, restrained.
- Inspired by Vercel/Next.js, not copied from them.
- Strong typography, subtle borders, generous spacing, almost monochrome palette.
- One restrained accent color is enough.
- Avoid generic AI-portfolio aesthetics: excessive purple/blue gradients, glassmorphism, floating particles, skill percentage bars, unnecessary 3D, fake dashboards, random badges, or marketing phrases without evidence.
- Use semantic HTML and visible focus states.
- Responsive from mobile upward.

## Content rules
Use only facts provided in the source CV/project data. Never invent metrics, employers, projects, certifications, dates, or outcomes.
Do not expose confidential operational data, internal server names, credentials, mine production values, proprietary system details, or employer-sensitive implementation details.
Prefer outcome-oriented copy supported by evidence.

Core positioning:
- Mining Engineering
- Data Science
- Industrial Analytics
- IT/OT Integration
- Integrated Operations Centers
- AVEVA PI System
- Mine-to-Mill
- Digital Transformation

## SEO is a first-class requirement
SEO must be designed into every page instead of being added after visual development.

### Technical SEO
- Each indexable page must have a unique, descriptive `<title>` and meta description.
- Implement canonical URLs.
- Implement `hreflang` alternates for Spanish and English plus `x-default` where appropriate.
- Generate `/sitemap.xml` and `/robots.txt` with Next.js Metadata Routes.
- Use clean, stable, descriptive URLs with trailing slashes because the static export is configured that way.
- Do not create duplicate indexable versions of the same content.
- Ensure 404 pages are not indexable.
- Add Open Graph and Twitter metadata to key pages and every blog article.
- Generate a consistent Open Graph image strategy before launch.
- Add JSON-LD where semantically valid. Home should use `Person`; blog posts should use `BlogPosting` or `Article`.
- Keep structured data consistent with visible page content. Do not add unsupported or misleading schema.
- Add breadcrumbs and `BreadcrumbList` structured data for blog articles when the blog is implemented.
- Include article `datePublished`, `dateModified`, author, headline, description, image, locale, and canonical URL.
- Sitemap must include all public localized pages and posts.

### On-page SEO
- One clear H1 per page.
- Use H2/H3 hierarchy based on document meaning, not typography.
- Natural language first. Do not keyword-stuff.
- Every important page should satisfy a distinct search intent.
- Use internal links between relevant experience, case studies, and blog posts.
- Image filenames and alt text must be descriptive when an image carries information; decorative images should use empty alt text.
- Avoid hiding meaningful SEO content behind client-only interactions.

### Content strategy
Prioritize technically useful original articles where Renzo has genuine expertise. Suggested clusters:
1. AVEVA PI System / PI AF / PI Vision / PI Web API
2. Mining data architecture and IT/OT integration
3. Mine-to-Mill and integrated operations
4. FMS / dispatch analytics
5. Industrial data quality and governance
6. Python, PostgreSQL and analytics for mining
7. Machine learning deployment in industrial/mining environments
8. Digital transformation project evaluation and value realization

Do not create shallow posts just to target keywords. Prefer fewer, high-quality pages with first-hand technical depth, diagrams, examples, trade-offs, and clear authorship.

### Performance and Core Web Vitals
- Prefer Server Components by default.
- Add `"use client"` only when necessary.
- Minimize JavaScript shipped to the browser.
- Avoid heavy animation libraries for simple CSS effects.
- Lazy-load content below the fold where appropriate.
- Prevent layout shifts by defining media dimensions/aspect ratios.
- Optimize fonts and avoid unnecessary font families/weights.
- Treat Lighthouse/PageSpeed regressions as defects, but do not optimize merely to chase a perfect score at the expense of UX.

## Accessibility
- WCAG-minded implementation.
- Keyboard-accessible navigation and controls.
- Correct labels for interactive elements.
- Sufficient contrast in both themes.
- Respect reduced motion.
- Do not use color as the only means of communicating state.

## Engineering standards
- Components should have one clear responsibility.
- Prefer data-driven sections over repeated hardcoded JSX.
- Keep reusable content in typed data files or localized messages.
- No giant components when decomposition improves readability.
- Avoid premature abstractions.
- Run lint and build after meaningful changes.
- Do not suppress TypeScript/ESLint errors just to make CI green.
- Do not install a dependency if a small native implementation is simpler.

## Git workflow
- Never commit `.env*`, API keys, credentials, build output, or local IDE state.
- Use small logical commits.
- Commit messages should be explicit, e.g. `feat: add localized hero metadata`.
- Create feature branches for meaningful changes: `feat/blog-mdx`, `feat/home-experience`, `seo/article-schema`.
- Do not rewrite main history.

## Definition of done for every page
Before considering a page complete, verify:
- Mobile, tablet, desktop layouts.
- Dark and light themes.
- Spanish and English versions.
- Correct metadata, canonical, hreflang and social metadata.
- Heading hierarchy.
- Keyboard accessibility.
- No console errors.
- `npm run lint` passes.
- `npm run build` passes with static export.
- No factual claims were invented.

## First implementation milestone
Implement only the foundation before adding visual complexity:
1. i18n routing and localized messages.
2. Base metadata / SEO utilities.
3. Theme provider.
4. Header and footer.
5. Hero.
6. Static export verification.
7. robots and sitemap.
8. Then proceed to expertise, experience, achievements, featured work, education, blog and contact in that order.
