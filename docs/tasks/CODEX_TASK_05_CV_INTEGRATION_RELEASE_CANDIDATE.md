# Codex Task 05 — CV Integration, Release Candidate & Live Launch Readiness

## Context

Continue the portfolio project for **Renzo Gallegos** at `https://renzogallegos.com`.

Task 01 established the app foundation and technical SEO.
Task 02 completed the bilingual Home.
Task 03 completed the bilingual MDX blog, RSS, article SEO and social preview.
Task 04 completed production hardening, CI, Hostinger deployment docs, Search Console guidance and export validation.

The user has now added real CV files under:

```text
public/cv/
├── Renzo_Gallegos_CV_EN.docx
├── Renzo_Gallegos_CV_EN.pdf
├── Renzo_Gallegos_CV_ES.docx
└── Renzo_Gallegos_CV_ES.pdf
```

Before editing, read:

1. `AGENTS.md`
2. `CLAUDE.md`
3. Task 01–04 specs and completion reports
4. `package.json`
5. `next.config.ts`
6. `src/lib/resume.ts`
7. current Hero/Header/Footer/SEO files
8. current `/public/cv` contents
9. `docs/DEPLOY_HOSTINGER.md`
10. `docs/PRODUCTION_CHECKLIST.md`
11. `docs/SEARCH_CONSOLE.md`
12. `.github/workflows/ci.yml`

Inspect:

```bash
git status
git branch --show-current
git remote -v
```

Do not undo working Task 01–04 architecture.

---

## 1. Objective

Turn the current project into a **final public release candidate** by integrating the real bilingual CV PDFs and validating the complete static site end-to-end.

Implement:

- verify Spanish and English PDFs
- activate localized CV downloads
- normalize public PDF filenames if appropriate
- explicitly handle DOCX public exposure
- verify exported PDF paths
- improve CV download semantics/UX
- compare visible profile facts against the owner PDFs
- update CI/export validation for CV assets
- prepare release notes
- update production checklist
- confirm Hostinger readiness
- optionally activate Giscus/GA4 only if real configuration already exists

Do not add major new product features.

---

## 2. Treat PDFs as authoritative owner assets

Inspect:

```text
public/cv/Renzo_Gallegos_CV_ES.pdf
public/cv/Renzo_Gallegos_CV_EN.pdf
```

Verify:

- valid PDF signature
- readable/non-empty
- correct language
- document belongs to Renzo Gallegos

Do not regenerate or alter PDF contents.

Use the PDFs only for a targeted consistency review. If the site clearly conflicts with the CV, report and correct only unambiguous discrepancies.

---

## 3. Canonical public filenames

Prefer stable lowercase URL-safe public paths:

```text
public/cv/renzo-gallegos-cv-es.pdf
public/cv/renzo-gallegos-cv-en.pdf
```

If safe, rename the existing PDFs using Git-aware filesystem operations.

Expected public URLs:

```text
https://renzogallegos.com/cv/renzo-gallegos-cv-es.pdf
https://renzogallegos.com/cv/renzo-gallegos-cv-en.pdf
```

Update existing resume detection/helper logic accordingly.

If current architecture strongly favors the existing filenames, keep them and document why. Exact case-sensitive references must remain consistent.

---

## 4. DOCX handling

Do not expose DOCX download links unless explicitly required.

Important: files under `public/` are publicly retrievable after deployment.

Do not delete owner DOCX files automatically.

Report whether the DOCX files remain in `public/`. If so, explicitly note they will be publicly addressable and recommend whether they should be moved outside `public/`.

---

## 5. Localized download behavior

Spanish pages:

```text
/es/ -> Spanish PDF
```

English pages:

```text
/en/ -> English PDF
```

Buttons:

- ES: `Descargar CV`
- EN: `Download résumé`

Use real `<a>` links. Prefer normal browser download behavior. Do not use unnecessary JavaScript.

Remove the prior unavailable state only after verification.

---

## 6. CV placement and accessibility

At minimum, enable the Hero CV action.

Optionally expose it once more in Contact or Footer only if it improves UX without duplication.

Requirements:

- meaningful link text
- keyboard accessible
- visible focus
- no icon-only action
- correct locale mapping
- no broken path

---

## 7. SEO behavior

Do not add PDFs to the sitemap unless there is a strong reason.

Do not create duplicate HTML CV pages in this task.

The HTML Home remains the canonical professional profile.

Do not use PDF URLs as canonicals.

---

## 8. Content consistency review

Compare the real CV PDFs against visible Home data for:

- current role
- employer names
- job dates
- education
- achievements
- professional summary
- ES/EN terminology

Only change facts where the PDF provides an unambiguous correction.

In the completion report include:

```text
CV consistency review
```

with corrections made and unresolved differences.

---

## 9. Giscus and GA4

If real Giscus config exists, validate it. Otherwise leave disabled.

If real `NEXT_PUBLIC_GA_ID` exists, validate it. Otherwise leave analytics inactive.

Do not fabricate IDs.

---

## 10. CI and export validation

Review `.github/workflows/ci.yml`.

Ensure CI still covers:

- install
- lint
- typecheck
- blog tests
- production build
- export validation
- artifact upload

Update export validation to require both localized PDFs.

Verify final output contains the chosen final paths, e.g.:

```text
out/cv/renzo-gallegos-cv-es.pdf
out/cv/renzo-gallegos-cv-en.pdf
```

Validate:

- file exists
- non-empty
- valid PDF signature

No OCR is needed.

---

## 11. Release notes

Create:

```text
docs/RELEASE_V1.md
```

Summarize:

- bilingual Home
- light/dark/system theme
- experience/expertise/achievements/work/education
- bilingual technical blog
- RSS
- technical SEO
- social preview
- bilingual CV downloads
- static Hostinger deployment

Do not exaggerate.

Document but do not automatically create the tag:

```bash
git tag -a v1.0.0 -m "Initial public release"
git push origin v1.0.0
```

---

## 12. Production checklist

Update:

```text
docs/PRODUCTION_CHECKLIST.md
```

Add CV checks:

- ES button serves Spanish CV
- EN button serves English CV
- correct paths
- no broken PDF links
- PDF MIME type
- HTTPS access
- DOCX exposure decision

Preserve all previous Home/Blog/SEO/404/feed checks.

---

## 13. Hostinger artifact

Run final production build.

Verify `/out` contains:

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
cv/<Spanish PDF>
cv/<English PDF>
```

plus all published article directories.

No Node.js runtime may be required.

---

## 14. Post-deployment URLs

Document exact checks for:

```text
https://renzogallegos.com/
https://renzogallegos.com/es/
https://renzogallegos.com/en/
https://renzogallegos.com/es/blog/
https://renzogallegos.com/en/blog/
https://renzogallegos.com/sitemap.xml
https://renzogallegos.com/robots.txt
https://renzogallegos.com/es/feed.xml
https://renzogallegos.com/en/feed.xml
https://renzogallegos.com/cv/<Spanish PDF>
https://renzogallegos.com/cv/<English PDF>
```

Also verify a fake route returns genuine HTTP 404.

---

## 15. Privacy check

Search the public artifact for obvious sensitive strings:

- local Windows paths
- private IPs
- internal hostnames
- tokens
- credentials
- internal URLs
- unintended DOCX exposure

Do not claim absolute security; report exactly what was checked.

---

## 16. Performance regression

Re-run existing static QA/performance sanity checks.

PDF files must not be preloaded or fetched during ordinary page rendering.

No new client dependency should be necessary for CV downloads.

---

## 17. Validation commands

Run repository equivalents of:

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

Do not run `npm audit fix --force`.

Reuse the existing Windows SWC cache workaround if required.

---

## 18. Manual QA

Review at least:

```text
375px
768px
1024px
1440px
```

for ES/EN and light/dark.

Verify:

- Hero CV action
- navigation
- Blog
- article pages
- theme
- language switch
- no overflow
- no console/hydration errors

---

## 19. Definition of Done

Task 05 is complete only when:

- Spanish PDF is verified
- English PDF is verified
- localized CV actions are active
- public PDF paths are stable
- no broken CV links exist
- export validator checks both PDFs
- DOCX exposure is explicitly documented
- visible professional content is checked against the PDFs
- no unsupported claim is added
- CI remains valid
- static export succeeds
- `/out` is Hostinger-ready
- release notes exist
- production checklist includes CV checks
- lint passes
- typecheck passes
- blog tests pass
- build passes
- export validation passes
- no Node runtime is introduced

---

## 20. Execution protocol

### Step 1 — Inspect
Read prior specs/reports and inspect the actual CV files.

### Step 2 — Plan
Provide a concise plan covering PDF verification, filename strategy, localized activation, DOCX exposure, consistency review, export validation and release docs.

### Step 3 — Implement
Implement Task 05 only.

### Step 4 — Validate
Run all required checks.

### Step 5 — Release review
Confirm `/out` is a complete static release candidate.

### Step 6 — Report
Create:

```text
docs/tasks/CODEX_TASK_05_COMPLETION.md
```

Include:

- Implemented
- CV verification
- DOCX handling
- CV consistency review
- Files changed
- Validation
- CI status
- Hostinger readiness: explicit GO / NO-GO
- Remaining manual launch actions

---

## 21. Final constraint

Do not continue into Task 06 without explicit instruction.

Task 05 is the first full release-candidate task: integrate the real bilingual CVs and finish a clean, auditable, Hostinger-ready public release without unnecessary feature expansion.
