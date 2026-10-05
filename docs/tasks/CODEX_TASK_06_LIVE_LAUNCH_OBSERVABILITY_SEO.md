# Codex Task 06 — Live Deployment, Search Console, Observability & Post-Launch Validation

## Context

Continue the portfolio project for **Renzo Gallegos** at `https://renzogallegos.com`.

Tasks 01–05 already delivered:
- bilingual Home
- static Next.js export
- bilingual MDX blog
- article SEO, RSS and social preview
- CI and deployment docs
- Search Console guidance
- real ES/EN CV PDF integration
- validated `/out`
- Task 05 status: **GO for Hostinger**

Before editing, read:
1. `AGENTS.md`
2. `CLAUDE.md`
3. Task 01–05 specs and completion reports
4. `docs/DEPLOY_HOSTINGER.md`
5. `docs/PRODUCTION_CHECKLIST.md`
6. `docs/SEARCH_CONSOLE.md`
7. `docs/RELEASE_V1.md`
8. `docs/DEPENDENCY_AUDIT.md`
9. `.github/workflows/ci.yml`
10. current analytics, Giscus, sitemap, robots, feed and CV integration

Inspect:

```bash
git status
git branch --show-current
git remote -v
```

Do not undo Task 01–05 architecture.

---

## 1. Objective

Task 06 is the **live launch and post-launch validation phase**.

It must prepare and document:

- final release workflow
- Hostinger live deployment runbook
- GitHub CI launch gate
- v1.0.0 tag preparation
- live URL validation
- canonical redirect verification
- MIME/header validation
- Search Console launch sequence
- social preview validation
- optional GA4 activation
- optional Giscus activation
- production Lighthouse/PageSpeed checks
- rollback procedure
- production smoke tests
- privacy re-check
- SEO baseline
- editorial roadmap

Do not add another major product feature.

No backend, CMS, database, auth, server runtime or redesign.

---

## 2. Separate repository vs platform actions

Clearly separate:

### Repository actions
Things Codex can safely implement locally.

### Owner/platform actions
Things requiring:
- Hostinger
- GitHub
- DNS
- Google Search Console
- Google Analytics
- GitHub Discussions / Giscus

Never claim an external action was completed without evidence.

---

## 3. Release state

Confirm:
- Task 05 changes are present
- intended files are tracked
- both PDFs are included
- DOCX sources are excluded from deploy artifact
- no local QA files are staged
- no secrets are staged
- `.env` production values are not committed

Recommend commit grouping if needed.

Do not commit/push automatically.

---

## 4. CI launch gate

Review `.github/workflows/ci.yml`.

Verify it still includes:

```text
checkout
Node 22
npm ci
lint
typecheck
blog tests
production build
export validation
artifact upload
```

If hosted CI has not run for the release candidate, document that as a launch gate.

Do not claim CI is green unless actual hosted CI confirms it.

---

## 5. Release tag

Prepare but do not automatically create:

```text
v1.0.0
```

Recommended commands:

```bash
git checkout main
git pull origin main
git tag -a v1.0.0 -m "Initial public release"
git push origin v1.0.0
```

Preferred order:
1. merge reviewed release
2. hosted CI green
3. deploy
4. live smoke test
5. create/push tag

Document if a different order is intentionally chosen.

---

## 6. Launch runbook

Create:

```text
docs/LAUNCH_RUNBOOK.md
```

Include:

1. back up production `public_html`
2. identify final `/out` artifact
3. upload **contents** of `/out`
4. preserve `_next`, locale directories, `cv`, `images`, feeds and SEO files
5. remove obsolete files only after backup
6. verify HTTPS
7. verify canonical host
8. verify real 404
9. verify MIME types
10. verify cache behavior
11. verify headers
12. run smoke test
13. rollback on critical failure

Do not use an SPA catch-all.

---

## 7. Live URLs

The runbook must test:

```text
https://renzogallegos.com/
https://renzogallegos.com/es/
https://renzogallegos.com/en/
https://renzogallegos.com/es/blog/
https://renzogallegos.com/en/blog/

https://renzogallegos.com/es/blog/estructurar-pi-af-operacion-minera/
https://renzogallegos.com/en/blog/structure-pi-af-mining-operation/
https://renzogallegos.com/es/blog/arquitectura-datos-mine-to-mill/
https://renzogallegos.com/en/blog/mine-to-mill-data-architecture/

https://renzogallegos.com/cv/renzo-gallegos-cv-es.pdf
https://renzogallegos.com/cv/renzo-gallegos-cv-en.pdf

https://renzogallegos.com/sitemap.xml
https://renzogallegos.com/robots.txt
https://renzogallegos.com/es/feed.xml
https://renzogallegos.com/en/feed.xml
https://renzogallegos.com/images/renzo-gallegos-social.png
```

Also verify:

```text
https://renzogallegos.com/this-route-should-not-exist/
```

returns true HTTP 404.

---

## 8. Canonical redirects

Canonical host:

```text
https://renzogallegos.com
```

Verify/document redirects from:

```text
http://renzogallegos.com
http://www.renzogallegos.com
https://www.renzogallegos.com
```

to the canonical host, preserving path and query.

Do not introduce static-export-breaking Next.js redirects.

---

## 9. MIME types

Validate live content types:

```text
HTML -> text/html
CSS -> text/css
JS -> valid JavaScript MIME
XML -> application/xml or text/xml
PNG -> image/png
PDF -> application/pdf
webmanifest -> application/manifest+json or suitable equivalent
```

Record Hostinger misconfiguration if any.

---

## 10. Live SEO validation

Verify production HTML for:

### Home
- title
- description
- canonical
- hreflang
- Person JSON-LD
- robots
- Open Graph

### Blog indexes
- localized title/description
- canonical
- hreflang
- RSS discovery

### Articles
- one H1
- canonical
- translated alternate
- BlogPosting JSON-LD
- BreadcrumbList
- author/date
- social image
- no accidental `noindex`

Only claim what is actually verified.

---

## 11. Search Console launch

Create or update documentation for this owner sequence:

1. add Domain property for `renzogallegos.com`
2. verify with DNS
3. submit `https://renzogallegos.com/sitemap.xml`
4. inspect `/es/`, `/en/`
5. inspect both Blog indexes
6. inspect all four launch articles
7. request indexing only for real public pages if appropriate
8. monitor indexing, impressions, clicks, CTR, average position and CWV

Never request indexing for:
- 404
- root chooser
- drafts
- nonexistent translations

---

## 12. Social preview

After deploy, validate:
- LinkedIn preview
- messaging app preview
- generic Open Graph debugger if available

Verify crawler access to:

```text
https://renzogallegos.com/images/renzo-gallegos-social.png
```

Do not replace the image unless a real issue exists.

---

## 13. GA4

If real `NEXT_PUBLIC_GA_ID` exists:
- rebuild
- deploy
- verify one tracker
- verify page views
- verify production-only loading
- verify no console errors

If absent:
- keep inactive
- document as non-blocking

Do not invent IDs.

---

## 14. Giscus

If real values exist:

```text
NEXT_PUBLIC_GISCUS_REPO
NEXT_PUBLIC_GISCUS_REPO_ID
NEXT_PUBLIC_GISCUS_CATEGORY
NEXT_PUBLIC_GISCUS_CATEGORY_ID
```

then verify:
- lazy load
- light/dark theme
- article-specific discussion mapping
- locale behavior

If absent:
- leave disabled
- do not block launch

---

## 15. Live performance checks

After deploy, run/document:
- PageSpeed Insights
- Lighthouse mobile
- Lighthouse desktop

Test at least:
- `/es/`
- `/en/`
- `/es/blog/`
- `/en/blog/`
- one ES article
- one EN article

Record:
- LCP
- CLS
- INP if field data exists
- Performance
- Accessibility
- Best Practices
- SEO

Do not require synthetic score 100.

---

## 16. Production headers

Verify live headers when possible:
- HTTPS
- content type
- cache-control
- referrer policy
- nosniff
- frame policy
- permissions policy
- CSP/report-only state

Do not enforce CSP if it breaks Giscus, GA4 or static assets.

---

## 17. Cache strategy

Document/review:

### Long cache
For hashed assets:

```text
/_next/static/*
```

Recommended:

```text
Cache-Control: public, max-age=31536000, immutable
```

### Shorter cache
Keep HTML/XML/feeds/robots refreshable.

Avoid over-caching mutable documents.

---

## 18. Rollback

Refine rollback guidance.

A rollback must restore a complete previous artifact, including matching HTML and `_next` assets.

Document:
- backup location
- restore order
- post-rollback checks
- how to avoid mixing two builds

---

## 19. Incident categories

Add to `docs/LAUNCH_RUNBOOK.md`:

### Critical
- site unavailable
- broken CSS/JS
- HTTPS failure
- locale failure
- wrong CV files
- private/unintended files exposed

Action: rollback.

### Major
- sitemap/robots broken
- one article broken
- wrong redirect
- social card broken
- GA/Giscus malfunction

Action: fix-forward or rollback based on impact.

### Minor
- typo
- small visual defect
- non-critical metadata inconsistency

Action: fix-forward.

---

## 20. SEO baseline

Create:

```text
docs/SEO_BASELINE.md
```

Include empty fields for future real measurements:

```text
Launch date:
Indexed pages:
Organic impressions:
Organic clicks:
CTR:
Average position:
Top queries:
Top pages:
Core Web Vitals:
Referring domains:
```

Add a 30/60/90-day review cadence.

Do not invent metrics.

---

## 21. Editorial roadmap

Create/update:

```text
docs/CONTENT_ROADMAP.md
```

Suggested future topics:

1. PI Web API vs PI SDK
2. Industrial historian data-quality rules
3. FMS delay analytics with PostgreSQL and Python
4. Mine-to-Mill data alignment
5. Industrial KPI governance
6. Integrated Operations Center data architecture
7. PI AF naming and metadata standards
8. ML deployment patterns in mining

For each, include:
- audience
- search intent
- primary question
- why Renzo has credible experience
- confidentiality constraints
- ES/EN pairing

Do not create fake routes.

---

## 22. Release documentation

Update `docs/RELEASE_V1.md` only where useful.

Use placeholders for:
- release date
- deploy date
- commit/tag
- hosted CI status
- Search Console status
- GA4 status
- Giscus status

Do not invent completion.

---

## 23. Production smoke test

Create a lightweight live smoke-test method or script.

It should be able to verify:
- HTTP statuses
- Home URLs
- Blog URLs
- sitemap
- robots
- feeds
- PDFs
- social image

Prefer simple HTTP checks over a heavy browser dependency unless browser testing is truly needed.

---

## 24. Privacy re-check

After deployment verify:
- intended PDF files accessible
- old DOCX URLs return 404
- no `.env`
- no source project files
- no local QA artifacts
- no internal/private files
- no accidental source map exposure if not intended

Report checked scope; do not claim absolute security.

---

## 25. Repository validation

Run:

```bash
npm run lint
npm run typecheck
npm run test:blog
npm run build
npm run validate:export
git diff --check
npm audit
npm outdated
```

Do not use `npm audit fix --force`.

Reuse the documented SWC cache workaround if necessary.

---

## 26. Definition of Done

Repository-side Task 06 is complete when:

- `docs/LAUNCH_RUNBOOK.md` exists
- `docs/SEO_BASELINE.md` exists
- `docs/CONTENT_ROADMAP.md` exists
- release docs are updated where needed
- production smoke-test method exists
- CI is reviewed
- static export validates
- live validation checklist is complete
- privacy checklist is complete
- GA4/Giscus remain safely optional
- no Node runtime is introduced
- lint passes
- typecheck passes
- blog tests pass
- build passes
- export validation passes

Full production launch is complete only after platform/owner checks are actually performed.

---

## 27. Execution protocol

### Step 1 — Inspect
Read Task 01–05 materials and current deployment state.

### Step 2 — Plan
Separate:
- repository work
- Hostinger work
- GitHub work
- Search Console work
- optional GA4/Giscus work

### Step 3 — Implement repository work
Only safe repository-side changes.

### Step 4 — Validate
Run all repository checks.

### Step 5 — Live-launch readiness review
Report exact owner actions still required.

### Step 6 — Report

Create:

```text
docs/tasks/CODEX_TASK_06_COMPLETION.md
```

Include:

- Implemented
- CI
- Hostinger
- Search Console
- GA4
- Giscus
- Live validation
- Privacy
- Performance
- SEO baseline
- Editorial roadmap
- Final launch status

Use exactly one final status:

```text
READY FOR OWNER DEPLOYMENT
DEPLOYED — REQUIRES LIVE VALIDATION
LIVE AND VALIDATED
BLOCKED
```

Choose only the status supported by evidence.

---

## 28. Final constraint

Do not continue into Task 07 without explicit instruction.

Task 06 is a launch/operations task, not another feature-development phase.
