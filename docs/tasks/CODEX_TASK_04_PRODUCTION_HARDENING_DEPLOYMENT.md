# Codex Task 04 — Production Hardening, Analytics, Search Console & Deployment Automation

## Context

Continue the existing portfolio project for **Renzo Gallegos** at `https://renzogallegos.com`.

Task 01 established the application foundation and technical SEO.  
Task 02 completed the bilingual Home and preliminary static release.  
Task 03 completed the bilingual MDX blog, article SEO, social preview image, RSS feeds, and static blog generation.

Before changing any file, read completely:

1. `AGENTS.md`
2. `CLAUDE.md`
3. Task 01 specification and completion report
4. Task 02 specification and completion report
5. Task 03 specification and completion report
6. `package.json`
7. `package-lock.json`
8. `next.config.ts`
9. all deployment/SEO/blog-related source files
10. installed `frontend-design` and `web-design-guidelines` skills

Inspect:

```bash
git status
git branch --show-current
git remote -v
```

Do not undo working Task 01–03 architecture.

---

## 1. Objective

Prepare the project for a stable production launch and maintainable deployment workflow.

This task includes:

- production deployment hardening
- Git/GitHub deployment workflow preparation
- Hostinger static deployment documentation
- production analytics integration
- Google Search Console readiness
- robots/sitemap/feed verification
- security/header recommendations compatible with static hosting
- dependency advisory review
- 404 behavior validation guidance
- canonical hostname enforcement guidance
- optional Giscus activation if real IDs are available
- optional CV activation if real PDFs are present
- Lighthouse-oriented performance checks
- final production QA checklist
- deployment automation strategy

Do **not** introduce a Node.js runtime requirement.

---

## 2. Static hosting constraint

The project must remain deployable through:

```ts
output: "export"
```

Production output remains:

```text
/out
```

No server actions, runtime API routes, SSR dependency, database or backend runtime may be introduced.

---

## 3. GitHub Actions

Create a CI workflow that:

1. checks out the repository
2. uses Node 22 LTS
3. runs `npm ci`
4. runs lint
5. runs typecheck
6. runs blog tests
7. runs production build
8. validates `/out`
9. uploads `/out` as a GitHub Actions artifact

Do not automatically deploy unless secure Hostinger credentials are intentionally configured.

Never hardcode credentials.

---

## 4. Hostinger deployment documentation

Create:

```text
docs/DEPLOY_HOSTINGER.md
```

Document:

### Manual deployment
- build locally
- verify `/out`
- upload the **contents** of `/out` to `public_html`
- preserve `_next`, locale directories, feeds, SEO files and images
- configure HTTPS
- configure canonical hostname
- configure exported `404.html` with real HTTP 404 status

### Future automated deployment
Document a secure SFTP/GitHub Actions path using GitHub Secrets only.

Also document a simple rollback strategy using a dated backup of the previous `public_html`.

---

## 5. Analytics

Prepare lightweight analytics integration.

Preferred:
- GA4 only if a real Measurement ID exists
- configuration through `NEXT_PUBLIC_GA_ID`

Requirements:
- do not invent IDs
- no analytics request if variable is absent
- production only
- minimal impact on Core Web Vitals

If no real ID is present, prepare the integration/configuration but leave it inactive.

---

## 6. Search Console

Create:

```text
docs/SEARCH_CONSOLE.md
```

Document:

1. create/verify Domain property
2. DNS verification
3. confirm HTTPS
4. submit `https://renzogallegos.com/sitemap.xml`
5. inspect `/es/`, `/en/`
6. inspect blog indexes and launch articles
7. monitor indexing
8. monitor Core Web Vitals
9. monitor search queries
10. do not request indexing for drafts/nonexistent pages

Do not fabricate verification tokens.

---

## 7. Canonical hostname

Production canonical:

```text
https://renzogallegos.com
```

Document Hostinger redirects from:

```text
http://renzogallegos.com
http://www.renzogallegos.com
https://www.renzogallegos.com
```

to:

```text
https://renzogallegos.com
```

Do not implement runtime Next.js redirects that break static export.

---

## 8. Security headers

Document safe hosting-layer recommendations for:

- `X-Content-Type-Options: nosniff`
- `Referrer-Policy`
- `Permissions-Policy`
- clickjacking protection
- Content Security Policy

Be careful with Giscus and analytics.

Do not ship a CSP that breaks the current site. If exact CSP cannot be finalized safely, provide a documented draft.

---

## 9. Dependency audit

Task 03 documented existing tooling-chain advisories.

Run:

```bash
npm audit
npm outdated
```

Classify findings into:

- production runtime
- build tooling
- transitive-only
- safe to upgrade
- requires breaking upgrade

Create:

```text
docs/DEPENDENCY_AUDIT.md
```

Do not run `npm audit fix --force`.

Do not downgrade unrelated packages merely to silence advisories.

---

## 10. Giscus

Current integration is disabled pending real configuration.

Expected variables:

```text
NEXT_PUBLIC_GISCUS_REPO
NEXT_PUBLIC_GISCUS_REPO_ID
NEXT_PUBLIC_GISCUS_CATEGORY
NEXT_PUBLIC_GISCUS_CATEGORY_ID
```

If real values exist, validate and activate.

If not, keep disabled and document setup.

Do not invent IDs.

---

## 11. CV PDFs

Expected:

```text
public/cv/renzo-gallegos-es.pdf
public/cv/renzo-gallegos-en.pdf
```

If real files exist:
- verify them
- activate localized downloads
- confirm export paths

If absent:
- preserve graceful disabled state
- document as non-blocking

Do not fabricate PDFs.

---

## 12. Open Graph / social preview

Verify:

```text
public/images/renzo-gallegos-social.png
```

Confirm:
- exists
- 1200×630
- exported into `/out`
- referenced by Home, Blog and article metadata
- absolute production URLs are correct

Document external validation after deployment.

---

## 13. RSS verification

Verify:

```text
/es/feed.xml
/en/feed.xml
```

Ensure:
- valid XML
- real article URLs
- correct locale
- no drafts
- correct publication dates
- Hostinger serves XML correctly

---

## 14. Sitemap and robots

Verify sitemap contains only real public URLs.

Do not include:
- drafts
- root chooser
- 404
- fake translations

Verify robots:
- allows intended public crawling
- declares sitemap
- does not accidentally block localized content

---

## 15. Production checklist

Create:

```text
docs/PRODUCTION_CHECKLIST.md
```

Include:

### Pages
- `/`
- `/es/`
- `/en/`
- `/es/blog/`
- `/en/blog/`
- all launch articles

### SEO
- canonical
- hreflang
- JSON-LD
- sitemap
- robots
- feeds
- social preview

### UX
- mobile/desktop
- light/dark
- language switch
- internal navigation
- Blog
- related posts
- CV state
- comments state

### HTTP
- HTTPS
- redirect behavior
- 404 status
- assets
- XML/image MIME types

---

## 16. Deployment artifact validation

Add a small validation script if useful.

It should verify `/out` includes at minimum:

```text
index.html
404.html
es/index.html
en/index.html
es/blog/index.html
en/blog/index.html
robots.txt
sitemap.xml
manifest.webmanifest
images/renzo-gallegos-social.png
es/feed.xml
en/feed.xml
```

Also verify the expected generated article directories without hardcoding an architecture that becomes brittle as posts grow.

---

## 17. Environment example

Create/update:

```text
.env.example
```

Possible keys:

```text
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_GISCUS_REPO=
NEXT_PUBLIC_GISCUS_REPO_ID=
NEXT_PUBLIC_GISCUS_CATEGORY=
NEXT_PUBLIC_GISCUS_CATEGORY_ID=
```

Never include secrets.

Clarify that `NEXT_PUBLIC_*` values are public and must never contain credentials.

---

## 18. README

Add a concise production section covering:

- development
- validation
- build
- `/out`
- deployment docs
- blog authoring docs
- environment variables

Avoid duplicating full documentation.

---

## 19. Search launch strategy

Document this sequence:

1. deploy production
2. verify canonical redirects
3. verify sitemap/robots
4. verify Search Console
5. submit sitemap
6. inspect important URLs
7. monitor indexing and Core Web Vitals
8. continue publishing high-quality technical articles

Do not recommend mass-generated SEO pages.

---

## 20. Performance / Lighthouse

Review practical Lighthouse concerns:

- JS weight
- hydration
- fonts
- CSS
- layout shift
- social image
- third-party scripts
- Giscus lazy loading
- analytics impact

Prioritize real issues instead of chasing a perfect synthetic score.

---

## 21. Validation commands

Run:

```bash
npm run lint
npx tsc --noEmit
npm run test:blog
npm run build
git diff --check
npm audit
npm outdated
```

Reuse the previously documented Windows SWC cache workaround if needed.

Do not change unrelated Windows permissions.

---

## 22. Manual QA

Review at:

```text
375px
430px
768px
1024px
1440px
```

in light and dark.

Verify:
- no horizontal overflow
- no console errors
- no hydration errors
- Home
- Blog indexes
- articles
- feeds
- social image
- language switching
- theme switching
- 404

---

## 23. Definition of Done

Task 04 is complete only when:

- static build still succeeds
- `/out` remains Hostinger-ready
- deployment guide exists
- production checklist exists
- Search Console guide exists
- dependency audit report exists
- `.env.example` exists
- GitHub CI workflow exists
- analytics is safely configurable without fake IDs
- Giscus remains safe/configurable
- CV remains correctly gated
- sitemap/robots/feed are verified
- social image integration is verified
- no secret is committed
- no Node runtime is required
- lint passes
- typecheck passes
- blog tests pass
- build passes

---

## 24. Execution protocol

### Step 1 — Inspect
Read all previous task specs/reports and current repository.

### Step 2 — Plan
Provide a concise production-hardening plan.

### Step 3 — Implement
Implement Task 04 only.

### Step 4 — Validate
Run all required checks.

### Step 5 — Security/dependency review
Classify advisories without reckless forced upgrades.

### Step 6 — Production readiness review
Confirm exact deployment artifact and Hostinger assumptions.

### Step 7 — Report
Create `CODEX_TASK_04_COMPLETION.md` containing:

- Implemented
- Files changed
- Deployment
- Analytics
- Search Console
- Dependency audit
- Giscus
- CV
- Validation
- Hostinger readiness
- Remaining manual production actions

---

## 25. Final constraint

Do not continue into Task 05 without explicit instruction.

The goal of Task 04 is to turn the current static portfolio/blog into a controlled, documented, production-ready release process without sacrificing static-hosting simplicity.
