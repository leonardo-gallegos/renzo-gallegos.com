# Task 05 completion — CV integration and V1 release candidate

Completed 2026-10-05 on `codex/task05-cv-release-candidate`. Read AGENTS.md, CLAUDE.md, all Task 01–04 specifications/reports, Task 05 and its required source/deployment files completely. Inspected status/branch/remote and real owner CVs, then supplied the implementation plan before editing. Previous uncommitted work was preserved. No Task 06, commit, tag, push or deployment was performed.

## Implemented

Verified and activated both owner PDF downloads from the existing bilingual Home Hero. Stable lowercase paths, actual anchors with explicit download filenames/PDF type/document language, existing focus styles and no client download code. The unavailable notice disappears for these verified assets. No duplicated CV action or new HTML CV page was added. Home remains the canonical profile; PDFs are excluded from sitemap.

Preserved editable DOCX originals outside public, made both PDFs mandatory in export validation, reconciled narrowly defined profile differences, and prepared release notes/post-deployment checks. Static architecture, themes, MDX blog, SEO and existing CI remain intact. No dependencies or lockfile changes were made in Task 05.

## CV verification

Both original owner files passed `%PDF-` signature/non-empty checks, parsed without encryption, and contained two readable pages. Extracted all pages with pypdf and visually reviewed all four rendered pages using Poppler. Spanish/English content and Renzo Gallegos ownership were confirmed. No OCR, regeneration, content edit or metadata rewrite occurred.

| Locale | Original filename | Final public/export filename | Bytes | SHA-256, unchanged |
| --- | --- | --- | --- | --- |
| ES | Renzo_Gallegos_CV_ES.pdf | cv/renzo-gallegos-cv-es.pdf | 190308 | `0d2d57d81b365ec8fd1537e01b86ab523bc02a317c79eea41be554ec0cec7f2d` |
| EN | Renzo_Gallegos_CV_EN.pdf | cv/renzo-gallegos-cv-en.pdf | 207920 | `9587baace4712b5ff301af4f2db0cec2e3f6265a6048d94fafb5c9ca2fae1663` |

PDFs were initially untracked (`git ls-files public/cv` empty), so native filesystem renames were used without staging owner assets. Hashes were taken before and after renaming, and export/download bytes were compared to the originals. Exact URLs:

- `https://renzogallegos.com/cv/renzo-gallegos-cv-es.pdf`
- `https://renzogallegos.com/cv/renzo-gallegos-cv-en.pdf`

## DOCX handling

Neither original was deleted or linked. Both were moved within the repository to `assets/cv-source/` with their original names/content preserved:

- `Renzo_Gallegos_CV_ES.docx` — 19138 bytes.
- `Renzo_Gallegos_CV_EN.docx` — 18598 bytes.

**No DOCX remains in public or out.** Export validation rejects any DOCX in the artifact; local HTTP requests to former DOCX URLs return 404. Source-folder documentation explains that source repository publication may still expose these originals even though website deployment excludes them. Remove any stale previously uploaded DOCX copies through the documented backed-up deployment process.

## CV consistency review

Compared current role, employer names, all job/education dates, achievements/recognition, professional summary and ES/EN terminology against both complete owner PDFs.

Corrections:

1. Southern location now uses the PDF's more precise `Toquepala, Tacna, Perú/Peru` instead of `Ilabaya`.
2. Removed `/ Project Manager` from the Las Bambas supervisor/analyst role titles because neither authoritative PDF lists that title suffix. English titles now follow the owner PDF's `Digital Mining Transformation Supervisor/Analyst`; project-management responsibilities remain supported in the existing highlights.

Current CIO/IOC role and May 2026 start, other employer/role dates, ongoing education flags, degree descriptions, 151 opportunities, single-project 60%/USD70K→26K reduction, 45K records, 1120 workers and award dates agree. Existing concise summaries and English terminology are supported by the history and are not literal copies of the CV. No new certifications, affiliations, metrics or other product content was introduced.

No unresolved factual conflict requiring an owner decision was identified in the reviewed categories. The PDFs contain additional detail deliberately omitted from the concise Home; omission is not a conflict. Their supplied contact details, including phone, remain in the unchanged PDFs; no phone was added to HTML. The 60% figure is retained exactly as stated by the owner PDFs, without independently redefining that metric.

## Files changed

Modified in Task 05:

- `src/lib/resume.ts` — canonical filename detection.
- `src/components/sections/hero.tsx` — explicit localized download filename/type/language.
- `src/data/experience.ts` — targeted CV consistency corrections.
- `scripts/validate-export.mjs` — both mandatory PDFs, signatures, non-empty/source-export byte equality, localized download markup, no DOCX export and no PDF sitemap entries.
- `docs/DEPLOY_HOSTINGER.md` — active CV paths, PDF MIME, source exclusion.
- `docs/PRODUCTION_CHECKLIST.md` — active localized downloads, paths, PDF MIME/HTTPS, keyboard/focus, no ordinary PDF requests and DOCX decision; prior checks preserved.
- `README.md` — release notes link/current CV state.

Created: `docs/RELEASE_V1.md`, `assets/cv-source/README.md`, this report. Renamed two PDFs and relocated two DOCX originals as above. No owner file deleted. Other dirty/untracked files belong to earlier tasks or user-supplied specifications.

## Validation

Passed:

- `npm run lint`
- `npm run typecheck`
- `npm run test:blog` — 18/18 tests.
- `npm run build` — static/SSG routes only, 17 generated entries; reused the existing Windows SWC cache with no permission changes.
- `npm run validate:export` — all required Home/index/article/SEO/feed/error/social assets plus both unchanged PDFs; no DOCX.
- `git -c core.fsmonitor=false diff --check` — no whitespace errors, normal line-ending notices only.

`npm audit` initially received a registry quick-endpoint HTTP 400. A JSON-mode retry succeeded and reported the existing **nine high tooling-chain findings**, zero critical/moderate/low. `npm outdated` completed with the same @types/node, ESLint, React/React DOM, shadcn and TypeScript entries described in the dependency report. Findings exit 1; no forced fix, downgrade or version changes were applied.

### Browser and visual QA

Reused the existing Edge/static-artifact QA against the final out directory, adapted for active downloads. Both Homes, both Blog indexes, all four articles, chooser and 404 were tested at 375/430/768/1024/1440px in light/dark: **100 route/width/theme combinations**. Required 375/768/1024/1440 coverage is included. Reviewed Home Hero/CV screenshot montages; verified navigation/Blog/article translation/theme persistence, no overflow, no application/console/hydration errors, local link/anchor destinations, article keyboard TOC/skip and static body with JS disabled. Intentional missing-document HTTP 404 messages were distinguished from application errors.

Both Hero links have exact localized labels/paths and visible keyboard focus. Enter triggers successful downloads with expected filenames; saved bytes match the exported/source PDFs. Direct PDF requests return 200 application/pdf and valid signatures. Old filenames and DOCX paths return 404 on the local server. Feed/sitemap XML parsing and existing metadata/schema/social checks continue to pass. Hostinger MIME/status behavior still requires live verification.

### Privacy and performance

Scanned all **98 exported files** as UTF-8-readable byte content for Windows user paths, private IPv4 ranges, obvious localhost/internal/corp/local URLs, private-key markers, recognizable GitHub/AWS token patterns and URL-embedded credentials. Separately inspected decoded PDF text/metadata and annotation URLs with pypdf. No matches were found for those checked patterns, and no DOCX is exported. This is a scoped pattern/content review, not proof of absolute security or detection of every possible internal hostname/secret.

Browser request monitoring confirms no PDF preload/fetch before intentional user action and no GA/Giscus requests. No new client code/dependency was added. Loaded JS sizes match Task 04: Home 500354 raw bytes / 149263 gzip-estimated; indexes 497843 / 148057; articles 514678 / 154358. Observed CLS remained zero on sampled public pages. Gzip estimates/local cached timings are not live Hostinger or mobile Lighthouse/field CWV measurements.

Evidence is outside the repository/artifact at `C:/Users/leonardo_gallegos/.codex/visualizations/2026/10/05/01a109e1-5291-7083-894e-0f18de73bfb3/task05-qa/`: PDF renders, browser screenshots, downloaded verification copies, validation/performance/privacy JSON and QA scripts.

## CI status

Existing workflow syntax/coverage verified: Node 22, install, lint, typecheck, blog tests, build, export validation and artifact upload remain present. Its existing export-validation step automatically enforces the new mandatory PDF/no-DOCX checks. No workflow modification was needed. The hosted GitHub workflow has not executed for these uncommitted/unpushed changes; local required commands passed.

GA4/Giscus environment keys are absent, only the empty example file exists, and default browser QA makes no third-party requests. Both remain inactive; no IDs were fabricated.

## Hostinger readiness: GO

**GO for the validated static release artifact.** Out includes root/404, both localized Homes/indexes/feeds, all published articles, robots/sitemap/manifest, required hashed assets, real social PNG and both mandatory CV PDFs; no DOCX sources. No production Node runtime is required. There is no identified application/asset blocker under Task 05's acceptance criteria.

This GO does not claim an already completed deployment or clean dependency audit. Live HTTPS/redirect/status/MIME/header/crawler behavior and owner-account setup remain manual release gates. Review the known build-tool advisory before publishing through normal Git/CI procedures.

## Remaining manual launch actions

1. Review/commit/push the intended release revision and confirm hosted CI, including both PDFs and preserving source DOCX exclusion.
2. Back up the correct Hostinger document root, upload **contents** of validated out, preserve cv/_next/locales/SEO/images/feeds, and remove obsolete public assets through the documented safe procedure.
3. Execute the exact live URL checks in RELEASE_V1.md, including HTTPS PDFs/application/pdf, canonical redirects and genuine missing-route/DOCX 404s. Verify caches, hosting headers and report-only CSP.
4. Complete actual DNS Search Console verification, sitemap submission, real public URL inspection and external social/schema checks; run deployed mobile Lighthouse and monitor indexing/CWV/queries.
5. Create/push v1.0.0 only after normal release review/validation; commands are documented, not executed. Optionally activate GA4/Giscus later using actual configuration and appropriate live verification.

Task 05 is complete. Task 06 was not started.
