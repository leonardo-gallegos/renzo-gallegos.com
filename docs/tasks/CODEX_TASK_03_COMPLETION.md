# Task 03 completion — Blog, MDX and production SEO

Completed on 2026-10-05 on branch `codex/task03-blog-mdx`. Task 03 only. No automatic commit, deployment or Task 04 implementation.

## Implemented

- Spanish and English editorial Blog indexes and four statically generated article pages.
- Strict local MDX metadata validation, calculated reading time, localized dates/category labels, tags, optional featured preview, stable translation pairing and deterministic related reading.
- Static article body with a `70ch` reading measure, breadcrumbs, H2/H3 table of contents, lists, emphasis, blockquotes, inline/fenced code, horizontal rules, links, scrollable tables and dimension-checked local images.
- Build-time syntax highlighting with GitHub light/dark themes and language labels. Code and tables are keyboard-focusable scroll regions.
- Localized canonical/hreflang, Open Graph/Twitter metadata, BlogPosting and BreadcrumbList structured data, article sitemap entries and localized RSS feeds.
- Header Blog navigation and real latest-article Home Insights, preserving Home section order and existing professional content.
- Configurable Giscus component, correctly disabled pending real GitHub identifiers.
- Real typographic social preview PNG with editable SVG source and reproducible generation script.
- Authoring/configuration guidance and 18 frontmatter validation tests.

## Files changed

Created:

- `content/blog/es/estructurar-pi-af-operacion-minera.mdx`
- `content/blog/en/structure-pi-af-mining-operation.mdx`
- `content/blog/es/arquitectura-datos-mine-to-mill.mdx`
- `content/blog/en/mine-to-mill-data-architecture.mdx`
- `src/lib/blog/schema.ts`, `content.ts`, `render.ts`, `seo.ts`
- `src/lib/giscus.ts`
- `src/components/blog/article-list.tsx`, `mdx-components.tsx`, `giscus.tsx`
- `src/app/[locale]/blog/page.tsx`
- `src/app/[locale]/blog/[slug]/page.tsx`
- `src/app/[locale]/feed.xml/route.ts`
- `public/images/renzo-gallegos-social.svg` and `renzo-gallegos-social.png`
- `scripts/generate-social-image.mjs`
- `tests/blog-schema.test.mjs`
- `docs/BLOG_AUTHORING.md`
- This completion report.

Modified:

- `messages/es.json`, `messages/en.json`
- `package.json`, `package-lock.json`
- `src/app/[locale]/page.tsx`, `src/app/globals.css`, `src/app/sitemap.ts`
- `src/components/layout/header.tsx`, `src/components/language-switcher.tsx`, `src/components/sections/insights.tsx`
- `src/lib/seo.ts`

No permanent files deleted. Temporary QA documents were removed before the final build. The supplied, initially untracked Task 03 specification was read and left unchanged. Existing Next.js configuration, locale/root layout architecture, theme system, professional data and CV gate were preserved.

## Content architecture

`content/blog/{locale}/{slug}.mdx` is the source of truth. `gray-matter` reads frontmatter; a typed validator rejects missing/unknown fields, wrong directory locale, unsafe slugs, invalid dates, duplicate tags, unsupported categories and invalid flags. Filenames must match slugs. Duplicate locale/slug or locale/translationKey combinations fail the build. All metadata is validated before draft filtering.

Public article discovery excludes drafts. Indexes, route params, Home Insights, related articles, alternate links, sitemap and RSS all consume that same public catalog. Articles sort by publication date, then slug for deterministic ties. Related reading ranks matching categories and overlapping tags within the same locale, excludes the current article and returns up to three relevant documents; with two articles per language it correctly shows one.

MDX is evaluated only from trusted local Git content during static generation. `remark-gfm` supplies tables; `rehype-slug` creates prefixed heading IDs; a tree pass validates H2/H3 hierarchy and derives the same IDs for the TOC. Four or more headings enable the TOC. `rehype-pretty-code`/Shiki generate syntax spans at build time. Article bodies are Server Components, with no client MDX evaluation or browser syntax-highlighting library.

The dynamic article route has `dynamicParams = false` and `generateStaticParams()` for every public slug beneath each pre-generated locale. No request-dependent rendering or Hostinger Node.js process was introduced.

## Initial articles

Two technical topics, each with a separately authored Spanish/English document:

| Pair | Spanish title and slug | English title and slug |
| --- | --- | --- |
| `pi-af-mining-structure` | Cómo estructurar PI Asset Framework para una operación minera — `estructurar-pi-af-operacion-minera` | How to Structure PI Asset Framework for a Mining Operation — `structure-pi-af-mining-operation` |
| `mine-to-mill-data-architecture` | Arquitectura de datos para analítica Mine-to-Mill — `arquitectura-datos-mine-to-mill` | Data Architecture for Mine-to-Mill Analytics — `mine-to-mill-data-architecture` |

Their fixed frontmatter publication date is `2026-10-05`, identifying creation of this release candidate, without inventing prior publication history. No update dates were added. Reading time comes from each document's body, not a manually supplied estimate.

### Editorial review

Reviewed all four documents for clarity, technical scope and privacy. They are concise design notes grounded in the domains supplied in Tasks 01/02: PI AF, industrial data governance, IT/OT, FMS, historian/relational integration and Mine-to-Mill. Recommendations are presented as design criteria rather than employer-specific implementation claims. Examples are explicitly illustrative or synthetic.

No invented anecdotes, quotes, financial/production outcomes, internal hostnames, IPs, tags, credentials, confidential diagrams or screenshots appear. The narrow vendor statement about related-asset templates links to [AVEVA's Asset Framework explanation](https://www.aveva.com/en/perspectives/blog/easy-as-pi-asset-framework/). No unsupported PI Web API/SDK comparison article was added.

## SEO

- Every Blog/article page has localized title/description, one H1, absolute trailing-slash canonical, index/follow robots, OG and Twitter metadata pointing to the real PNG.
- Article metadata includes author, publication date and tags. An update date is emitted only when explicitly supplied.
- Translated pairs resolve by `translationKey` and emit the actual Spanish/English slugs plus Spanish `x-default`. A temporary single-language fixture verified that no English or `x-default` alternate was invented. Its language control correctly fell back to the English Blog index.
- BlogPosting JSON-LD includes visible headline/description, Renzo Gallegos as Person author, publication date, canonical mainEntityOfPage, language, keywords and real social image. The author shares the Home Person identifier. BreadcrumbList matches visible Home / Blog / article navigation. All schemas parse.
- Sitemap has eight public URLs: two Home pages, two Blog indexes and four articles. Article lastmod uses the defined publication/update date. Drafts and removed fixtures are absent.
- `/es/feed.xml` and `/en/feed.xml` each contain two real articles with descriptions, canonical links and fixed publication dates. Separate feeds preserve editorial language. Each Blog index links its RSS feed and declares feed discovery metadata.

## Giscus

Pending real configuration; comments are omitted from public pages and no Giscus script/iframe is requested in the current export.

The typed component is ready for `NEXT_PUBLIC_GISCUS_REPO`, `NEXT_PUBLIC_GISCUS_REPO_ID`, `NEXT_PUBLIC_GISCUS_CATEGORY`, and `NEXT_PUBLIC_GISCUS_CATEGORY_ID`. Obtain actual values through [Giscus](https://giscus.app/) after enabling GitHub Discussions and installing its GitHub app. Partial configuration fails the build; rebuild after supplying values. Details are in `docs/BLOG_AUTHORING.md`.

Configured comments load near the article's comments region via IntersectionObserver, follow resolved light/dark theme and label the iframe. Discussion mapping uses a stable locale/translationKey term, with separate language discussions. Live GitHub comments, authentication and third-party theme behavior remain unverified until real configuration exists. No fake IDs or repository was created.

## Social preview

`public/images/renzo-gallegos-social.png` exists at 1200 × 630, 25,410 bytes (about 25 KB). It contains Renzo Gallegos, the Mining / Data Science / IT/OT domain line and `renzogallegos.com`, with a white neutral typographic treatment. The adjacent SVG is editable source; `npm run social-image` regenerates the PNG using Sharp. Home, Blog and article OG/Twitter metadata reference the PNG. Visual inspection confirmed legibility and unclipped text. No stock or generated artwork was added.

## CV

Both real files remain absent:

- `public/cv/renzo-gallegos-es.pdf`
- `public/cv/renzo-gallegos-en.pdf`

Both Home CV controls remain disabled with their existing localized notice. There are no broken download URLs or fabricated PDFs. Existing build-time detection activates each language independently when its actual PDF is supplied and passes the signature check; document content and locale must also be checked when supplied.

## Dependencies

Added direct declarations:

- `@mdx-js/mdx` 3.1.1 — explicit dependency on the MDX compiler/evaluator already present transitively.
- `remark-gfm` 4.0.1 — tables and standard GitHub-flavored Markdown.
- `rehype-slug` 6.0.0 — stable unique heading IDs.
- `hast-util-to-string` 3.0.1 and `unist-util-visit` 5.1.0 — typed heading extraction from the compiled tree.
- `rehype-pretty-code` 0.14.5 and `shiki` 4.5.0 — build-time light/dark code highlighting.
- Dev dependencies `@types/hast` 3.0.5 and `sharp` 0.35.5 — AST types and reproducible social PNG generation.

Reused `gray-matter`, `reading-time`, `next-intl`, `next-themes`, React and the existing design system. No Giscus wrapper or UI/runtime highlighter package was needed.

`npm audit --json` reported nine high-severity entries through the existing shadcn/ESLint tooling chain (`braces`/`micromatch`/`fast-glob` and dependents). The affected baseline versions were already present in the original lockfile; none of the new blog packages appears in the advisory list. These build-tool advisories remain unresolved. No forced upgrade or suggested major downgrade of unrelated tooling was performed.

## Validation

Passed on final source:

- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`
- `git -c core.fsmonitor=false diff --check` (the repository's fsmonitor-safe equivalent; only normal LF/CRLF notices)
- `npm run test:blog` — 18 passing tests, including invalid calendar dates, malformed metadata, locale mismatch, duplicate tags and update ordering.
- Social-image generation and pixel inspection.

Production builds reused the documented secure cache:

```powershell
$env:SWC_NATIVE_BINDING_CACHE = 'C:/Users/leonardo_gallegos/Documents/renzo-task01-swc-cache'
npm run build
```

No unrelated Windows permissions were changed. The final build generated static/SSG routes only, including:

```text
out/es/blog/index.html
out/en/blog/index.html
out/es/blog/estructurar-pi-af-operacion-minera/index.html
out/en/blog/structure-pi-af-mining-operation/index.html
out/es/blog/arquitectura-datos-mine-to-mill/index.html
out/en/blog/mine-to-mill-data-architecture/index.html
out/es/feed.xml
out/en/feed.xml
```

### Browser, accessibility and visual QA

Used a local static server serving the actual `/out` directory and headless installed Edge. Both indexes and all four articles were tested at 375, 430, 768, 1024 and 1440px in light and dark themes: 60 route/width/theme combinations. Reviewed screenshots and montages for both locales, typography, navigation, titles, code and table layouts. Desktop reading measure was refined to `70ch` and the complete matrix rerun successfully.

Verified no page horizontal overflow, correct locale, one H1, no duplicate IDs, valid TOC anchors, visible focus, skip-to-main keyboard behavior, keyboard TOC navigation, theme selection, correct translation destinations, related reading, Home → Blog → article → Home and all local link/anchor destinations. Code token contrast was measured at least 4.5:1 in both themes. Tables retain semantic markup inside localized labeled scroll regions. Reduced motion was enabled in browser QA; blog pages add no animation.

Temporary fixtures additionally verified draft exclusion from every public output, missing-translation handling, unique repeated heading IDs, optional featured article appearing once, and keyboard horizontal scrolling of very long code/table content. Fixtures were removed and the final export rebuilt. An article remained fully readable with JavaScript disabled. No client MDX compiler or syntax-highlighter implementation was found in exported JS chunks.

Unknown articles/locales returned genuine HTTP 404 responses from the test static server using exported `404.html`, with noindex. Final browser checks reported zero console/hydration/page errors. This verifies the local static release; Hostinger status behavior must be configured as described below. Live Giscus and production social crawler fetches were not exercised.

Design review against installed `frontend-design` and freshly fetched Web Interface Guidelines:

```text
src/app/[locale]/blog/page.tsx: pass
src/app/[locale]/blog/[slug]/page.tsx: pass
src/components/blog/article-list.tsx: pass
src/components/blog/mdx-components.tsx: pass
src/components/blog/giscus.tsx: pass (configuration pending; live iframe unverified)
src/components/layout/header.tsx: pass
src/components/language-switcher.tsx: pass
src/components/sections/insights.tsx: pass
src/app/globals.css: pass
```

QA scripts, fixture results, final validation JSON and screenshots remain outside the repository at:

`C:/Users/leonardo_gallegos/.codex/visualizations/2026/10/05/01a109e1-5291-7083-894e-0f18de73bfb3/task03-qa/`

## Hostinger readiness

The updated `/out` is ready for a static upload of its contents into Hostinger `public_html`. No Next.js/Node.js server is required. Preserve `_next`, locale directories, feeds, SEO files and image assets.

Required hosting configuration: HTTPS on the canonical `https://renzogallegos.com` domain root, directory `index.html` serving for trailing-slash URLs, XML/image MIME types, and a custom exported `404.html` served with HTTP 404. Do not use an SPA catch-all returning Home with status 200. Redirect any alternate hostname to the chosen canonical hostname.

No deployment was performed. Missing CVs and disabled comments are gracefully handled and do not block this static release. Toolchain advisories are documented above; live hosting, Giscus and platform social previews require their actual external configuration to validate.

## Pending for Task 04

Potential future work only: verified detailed case studies, analytics, Search Console, final production hardening/dependency-advisory review, deployment automation and production validation. Supply real Giscus configuration and localized CVs when available. Task 04 was not started.
