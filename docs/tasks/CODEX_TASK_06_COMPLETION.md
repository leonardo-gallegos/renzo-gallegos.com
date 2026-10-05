# Task 06 completion — launch operations and validation readiness

Prepared 2026-10-05 on `codex/task06-live-launch-readiness`. Read AGENTS.md, CLAUDE.md, Task 01–05 specifications/reports, Task 06 and its required deployment/SEO/CI/integration materials completely. Inspected repository status/branch/remote, staged/tracked files, environment presence and real CV locations before editing; supplied a plan separating repository work from platform/owner actions. Preserved all prior uncommitted work. Task 07 was not started.

## Implemented

Repository-side launch preparation is complete: reviewed release workflow, explicit owner gates, artifact selection, backup/upload/rollback and incidents, exact HTTP/SEO/privacy/social/performance checklists, lightweight smoke tool, measurement templates and future editorial proposals. Static Next export remains unchanged; no backend, product feature, redesign, dependency or production Node runtime was added. No staging, commit, push, tag, deployment or account configuration was performed.

Created:

- `docs/LAUNCH_RUNBOOK.md`
- `docs/SEO_BASELINE.md`
- `docs/CONTENT_ROADMAP.md`
- `scripts/smoke-test-live.mjs`
- This completion report.

Modified in Task 06:

- `package.json`: `smoke:live` operator command only.
- `README.md`: launch/baseline/roadmap links and smoke usage.
- `docs/RELEASE_V1.md`: empty owner evidence fields and merge → CI → deploy → live validation → tag order.
- `docs/PRODUCTION_CHECKLIST.md`: launch gates, privacy/cache/header/social/performance evidence.
- `docs/SEARCH_CONSOLE.md`: all eight inspection URLs, search metrics and review cadence.
- `docs/DEPENDENCY_AUDIT.md`: unchanged findings confirmed by Task 06 recheck.

No files deleted; no Task 06 lockfile/dependency changes. Existing dirty/untracked files from earlier tasks and supplied specifications remain preserved.

### Repository validation

| Command/check | Result |
| --- | --- |
| `npm run lint` | Passed, including final smoke source |
| `npm run typecheck` | Passed |
| `npm run test:blog` | 18/18 passed |
| `npm run build` | Passed, static/SSG only, 17 generated entries |
| `npm run validate:export` | Passed: eight public pages, four articles, two feeds, metadata/error/social files and both unchanged PDFs, no DOCX |
| `git -c core.fsmonitor=false diff --check` | Passed; normal LF/CRLF notices only; new Task 06 files separately reviewed |
| `npm audit --json` | Completed, exit 1 for same nine high tooling-chain findings; zero critical/moderate/low |
| `npm outdated --json` | Completed, exit 1 for same six entries: @types/node, ESLint, React, React DOM, shadcn and TypeScript |

No forced fix, unrelated downgrade or speculative override. Existing dependency classifications/decisions remain in DEPENDENCY_AUDIT. These findings remain a release-review item; this report does not claim a clean audit.

Application commands ran with local Node 24.21.0/npm 10.2.4. The smoke script and its positive/negative HTTP rehearsals additionally passed using cached **Node 22.23.3**, matching CI's required major. Build reused the previously configured `SWC_NATIVE_BINDING_CACHE` at `C:/Users/leonardo_gallegos/Documents/renzo-task01-swc-cache`; no permissions or unrelated project configuration changed.

## CI

Reviewed existing `.github/workflows/ci.yml`: pinned checkout with persisted credentials disabled; Node 22/npm cache; `npm ci`, lint, typecheck, blog tests, build, export validation; `hostinger-static-out` upload with missing-file failure and 14-day retention. Read-only contents permission and optional public Actions variables; no deploy step/secrets. No workflow edit needed.

**Hosted CI for this candidate is unconfirmed.** Nothing was pushed or queried as evidence of a successful run. Local checks are not hosted CI. Owner must review/commit intended files, merge and confirm a successful run for the exact deployed SHA before downloading its artifact.

Task 05 integration is present locally; both final PDFs are currently untracked, as are earlier-task workflow/content/source/docs additions. They are not yet included in a committed release. The Git index is empty: no QA, secrets or other files staged. No real environment file is present or tracked; only the empty public `.env.example` exists. Required tracking and staged inventory review remain owner Git gates, with suggested logical commit groups in LAUNCH_RUNBOOK. DOCX is excluded from the artifact; its separate Git-publication implications remain documented.

## Hostinger

Validated local out remains a complete static artifact requiring no Node process. Runbook identifies the successful hosted run/revision artifact, backup of full public_html/config outside all served roots, contents-only upload, preservation of hashed assets/locales/CV/images/SEO/feeds, backed-up obsolete-file removal, HTTPS/canonical/404/MIME/cache/header checks and coherent rollback.

No Hostinger/DNS action was performed. Owner must record actual backup paths, configure certificates/redirects/error handling/MIME/cache/headers, deploy the matching artifact and run live checks. No SPA fallback. Critical incidents require rollback; major incidents use impact-based fix-forward/rollback; minor defects use reviewed fix-forward. Tag commands are prepared only, after successful live validation and verifying main HEAD equals deployed SHA.

## Search Console

Owner sequence documented: add renzogallegos.com Domain property, use actual authoritative DNS TXT verification, retain the record, submit production sitemap, inspect both Homes/indexes and four actual articles, request indexing only for real public pages when appropriate. Monitor indexing, impressions/clicks/CTR/average position, queries/pages and CWV. Chooser/404/drafts/nonexistent translations excluded.

Verification, submission, inspections and live reports remain unconfirmed; no token or completion invented.

## GA4

No actual ID or environment value supplied. Existing production-only configurable integration remains inactive/non-blocking. Owner activation requires real Measurement ID, fresh build/deploy, one-tracker/pageview checks, production-only behavior, applicable consent/privacy review and browser/performance verification. No ID invented.

## Giscus

No real four-value configuration supplied; comments remain disabled/non-blocking. Existing typed configuration and lazy article integration retained. Owner setup/activation requires actual GitHub Discussions/app/category identifiers, rebuild/deploy, lazy loading/theme/locale/sign-in and article mapping tests. No token or fake ID added.

## Live validation

Runbook contains every exact Task 06 live URL, genuine missing-route 404, permanent canonical redirects preserving path/query, MIME/header/cache checks, browser UX/SEO/schema/feed checks and external social crawler/preview checks.

`npm run smoke:live` defaults to canonical production; no browser dependency. Requests have normal TLS verification, 15-second timeouts and manual redirect inspection. It checks endpoints/status/MIME, PDF/PNG signatures/dimensions, basic production metadata/schemas/indexability/feed references, discovers CSS/JS, probes map/private paths and records headers. Loopback rehearsal explicitly skips external redirects and labels results as local. Header policy approval, complete XML parsing, PDF language/content, browser UX/platforms/performance/full privacy remain manual.

Local actual-export rehearsal: **59/59 probes passed** on Node 24 and 22. Five deliberately injected faults each returned exit 1: soft 404, PDF MIME mismatch, exposed .env path, public noindex response header and invalid PDF signature. Separate mocked production redirect simulations passed correct redirects and rejected lost query strings, temporary redirects, loops and wrong hosts for all three source origins. Those simulations are not live redirects/TLS evidence.

Initial loopback rehearsal inside the network sandbox could not connect; rerunning outside that sandbox succeeded without code or artifact changes for connectivity. The script itself retains normal certificate/network checks.

**No production smoke/browser/SEO/social result is claimed.** No deployment evidence was supplied; all platform/live checks remain pending. Local QA evidence/scripts are outside repository/out at `C:/Users/leonardo_gallegos/.codex/visualizations/2026/10/05/01a109e1-5291-7083-894e-0f18de73bfb3/task06-qa/` (local-smoke.json, failure-rehearsals.json, redirect-simulations.json, privacy.json and review helpers).

## Privacy

Rechecked all **98 export files** as UTF-8-readable byte content for Windows user paths, RFC1918 IPv4, obvious localhost/internal/corp/local URLs, private-key markers, recognizable GitHub/AWS token patterns and URL credentials: no matches for these patterns. No DOCX export. Export validator confirms source/export PDF byte equality; SHA-256 still matches Task 05 originals:

- ES: `0d2d57d81b365ec8fd1537e01b86ab523bc02a317c79eea41be554ec0cec7f2d`
- EN: `9587baace4712b5ff301af4f2db0cec2e3f6265a6048d94fafb5c9ca2fae1663`

Task 05 decoded PDF/content review remains applicable to these unchanged assets; Task 06 did not repeat page rendering or rewrite owner contact details. Local HTTP checks confirm selected former DOCX/source/env/Git/package/QA/map URLs return 404 under the rehearsal server. These results do not establish Hostinger behavior or absolute security. Owner must inspect live/deployed inventory and actual sensitive paths, including unknown leftovers/backups/source maps, as documented.

Final local inventory review found zero DOCX/map files, no sourceMappingURL references in exported JS/CSS, and no source/env/Git/QA directories matching the checked inventory patterns. Task 06 document links/whitespace and required CI markers were reviewed successfully; `review.json` records that scope.

## Performance

No UI/client source, dependency, PDF or social image change in Task 06. Existing Task 05 visual/performance evidence is historical local QA, not a fresh production measurement. No PageSpeed/Lighthouse score, LCP/CLS/INP field value or live integration impact fabricated. The runbook provides six required routes, mobile/desktop/PageSpeed procedures and blank result fields for LCP/CLS/field INP and all four Lighthouse categories, with conditions/evidence. Scores of 100 are not required.

## SEO baseline

Created SEO_BASELINE with empty actual-launch/indexing/impressions/clicks/CTR/position/query/page/CWV/referring-domain fields, measurement context and 30/60/90-day review cadence. Eight sitemap URLs are expected coverage, not an indexed-page metric. No future reminder automation or account action created.

## Editorial roadmap

Created eight proposals: PI Web API/SDK, historian quality, FMS delay analytics, Mine-to-Mill alignment, KPI governance, IOC architecture, PI AF naming/metadata and mining ML deployment. Each specifies audience, intent, question, verified experience basis, confidentiality constraints and ES/EN pairing. No articles, fake dates, future URLs or routes published.

## Final launch status

**READY FOR OWNER DEPLOYMENT**

Repository preparation/required local validation complete. Exact remaining owner sequence: review and commit intended untracked release assets/source → merge and confirm hosted CI for deployed SHA → back up/configure Hostinger and deploy its artifact → run live HTTP/browser/SEO/privacy/social/performance checks → verify Search Console and record evidence → create/push v1.0.0 for the deployed SHA. GA4/Giscus remain optional. Full production launch is not claimed. Task 07 was not started.
