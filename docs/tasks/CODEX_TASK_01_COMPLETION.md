# Task 01 completion

Implemented only the foundation and first Home viewport. Task 02 has not been started. No commits were made. Branch: `codex/task-01-foundation-seo`.

## Implemented

- Spanish and English statically generated homepages with correct document languages.
- Geist typography, shared content width, restrained responsive Hero, semantic header/main/footer, skip link, visible keyboard focus, and reduced-motion handling.
- Route-preserving locale links and a labeled native light/dark/system selector with persisted preference and hydration-safe rendering.
- Localized metadata, absolute trailing-slash canonicals, Spanish/English/x-default alternates, Open Graph/Twitter metadata, reusable safely serialized Person JSON-LD.
- Static robots, sitemap, and manifest routes. Localized homes are indexable; the root chooser and generated 404 are not.
- LinkedIn and email links using only the supplied public-safe content.

## Files

Created:

- `src/app/(entry)/layout.tsx`
- `src/app/(entry)/page.tsx`
- `src/components/layout/container.tsx`
- `src/components/language-switcher.tsx`
- `src/components/theme-toggle.tsx`
- `src/components/json-ld.tsx`
- `src/lib/fonts.ts`
- This completion report.

Modified:

- `src/app/[locale]/layout.tsx`, `src/app/[locale]/page.tsx`
- `src/app/globals.css`
- `src/app/manifest.ts`, `src/app/robots.ts`, `src/app/sitemap.ts`
- `src/components/layout/header.tsx`, `src/components/layout/footer.tsx`
- `src/components/sections/hero.tsx`
- `src/lib/seo.ts`
- `messages/es.json`, `messages/en.json`
- `eslint.config.mjs` (exclude installed skill examples from application linting).

Deleted/replaced:

- `src/app/layout.tsx` and `src/app/page.tsx`, replaced by the separate locale and entry root layouts/pages.

No dependencies added. Existing `next-intl`, `next-themes`, Base UI, Lucide, and shadcn configuration are retained. Existing untracked skills and task instructions were preserved.

## Decisions

- Keep existing `output: "export"`, `trailingSlash: true`, and static-compatible image configuration. No middleware, cookies, server redirect, or runtime backend.
- Use `generateStaticParams`, locale validation, `dynamicParams: false`, and `setRequestLocale` for localized rendering. Homepage metadata/schema live on the page so future pages can supply their own.
- Separate root layouts let `/es/` and `/en/` emit the correct `lang` without client-side mutation. `/` is a static chooser with Spanish first, rather than a redirect; it is excluded from indexing and the sitemap. Cross-layout navigation uses normal document navigation. Chooser prefetch is disabled for simple static hosting compatibility.
- The sitemap derives entries from locales and an explicit public-path list that can later be extended with actual content. It does not invent post URLs or modification dates.
- Social metadata uses a summary card without referencing a nonexistent image. A consistent social-image asset remains a pre-launch content item.
- Person schema uses the visible supplied professional description and domains, without unsupported image or employer data.
- Theme preference is handled by `next-themes`; only interactive controls/providers are client components. The HTML hydration warning suppression is scoped to the element modified by the theme provider.
- Both experience and CV CTAs are disabled with a visible localized explanation. No empty experience section, fake PDF, or broken download link was added.

## Validation and commands

- Inspection: `rg --files`, complete instruction/configuration/source reads, `git status --short`, `git branch --show-current`.
- Branch: `git switch -c codex/task-01-foundation-seo`.
- `npm run lint`: passed without errors or warnings after removing temporary validation scripts.
- `npm run build`: passed; `/out` contains `/es/`, `/en/`, `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`, root chooser, and generated 404.
- `npx tsc --noEmit`: passed.
- `git diff --check`: checked for whitespace errors.
- Temporary static HTTP server and headless Edge/Playwright checks: both locales at 375, 768, 1024, and 1440px in light/dark mode; no horizontal overflow, one H1, correct `lang`, canonical, hreflang, indexing directives, and parsable Person JSON-LD.
- Interaction checks: theme persistence on reload, system-theme changes, locale switching in both directions, keyboard skip link, non-indexable root and 404, and no application console/hydration errors. An intentional missing-page request returned the expected HTTP 404.
- Screenshot review covered both themes/locales at the required widths. Temporary scripts and screenshots were removed from the repository/export after validation.
- UI reviewed against installed `frontend-design` and the fetched Web Interface Guidelines. Issues found during review were corrected.

### Local Windows build environment

The installed SWC native dependency rejected the default cache's inherited permissions before application compilation. Existing directory permissions were not changed. A dedicated user-only cache was created at `C:\Users\leonardo_gallegos\Documents\renzo-task01-swc-cache` and used for the successful build:

```powershell
$env:SWC_NATIVE_BINDING_CACHE = 'C:/Users/leonardo_gallegos/Documents/renzo-task01-swc-cache'
npm run build
```

The build needed execution outside the sandbox to access that user-only cache. This is a local environment constraint, not a dependency or source configuration change. Stale `.next/dev` route types from the previous root layout were also cleared before validation.

## Pending for Task 02 / later launch preparation

- Implement verified professional experience content and activate its CTA when a real destination exists.
- Supply real `/public/cv/renzo-gallegos-es.pdf` and `/public/cv/renzo-gallegos-en.pdf`, then activate localized downloads.
- Create an approved social-image asset before launch.
- Subsequent portfolio sections and blog remain outside Task 01.

On deployment, configure Hostinger to serve trailing-slash directory indexes and the exported 404 with an HTTP 404 status. No deployment was performed in this task.
