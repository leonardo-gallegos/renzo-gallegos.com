# V1 public release candidate

Prepared 2026-10-05. This documents the candidate; no deployment, tag or push has been performed.

## Owner release evidence — fill only after verification

| Field | Actual value/evidence |
| --- | --- |
| Release date/timezone | |
| Deploy date/timezone | |
| Reviewed merged/deployed commit SHA | |
| v1.0.0 tag and tagged SHA | |
| Successful hosted CI run URL/status and artifact | |
| Hostinger backup location/operator | |
| Live HTTP/browser/SEO/privacy evidence | |
| Search Console verification/sitemap/inspection status | |
| GA4 status and live evidence if activated | |
| Giscus status and live evidence if activated | |
| PageSpeed/Lighthouse reports | |

Blank fields are pending evidence. Locally, GA4/Giscus remain disabled with no real identifiers supplied. Follow [the launch runbook](LAUNCH_RUNBOOK.md), record real measurements in [SEO baseline](SEO_BASELINE.md), and use [the editorial roadmap](CONTENT_ROADMAP.md) for future writing only.

Included:

- Spanish/English Home with localized navigation and light/dark/system theme persistence.
- Verified expertise, experience, achievements, recognition, selected work, education and contact details.
- Bilingual local MDX technical blog: two topics, four article pages, reading time, related posts, breadcrumbs, TOC and static syntax highlighting.
- Localized RSS feeds, canonical/hreflang metadata, Person/BlogPosting/BreadcrumbList structured data, robots and content-derived sitemap.
- Real 1200×630 social preview PNG.
- Verified owner-supplied Spanish/English CV PDF downloads from the Home Hero; stable lowercase filenames, normal browser download semantics, no new client code or PDF preloads.
- Static Hostinger deployment artifact and Node 22 validation/artifact CI; no production Node runtime.

GA4 and Giscus remain inactive without real configuration. Existing tooling-chain dependency advisories are recorded in [the dependency review](DEPENDENCY_AUDIT.md); no forced upgrade was applied. Source changes still require normal review/commit/push and a successful hosted CI run before deployment; tag only after live validation.

## CV assets and privacy

Public PDFs: `/cv/renzo-gallegos-cv-es.pdf` and `/cv/renzo-gallegos-cv-en.pdf`. The owner PDFs were renamed without changing their contents; each is two pages, readable and locale-verified. The HTML Home remains the canonical professional profile; PDFs are not sitemap entries or HTML canonicals.

Editable originals are preserved at `assets/cv-source/Renzo_Gallegos_CV_ES.docx` and `assets/cv-source/Renzo_Gallegos_CV_EN.docx`. They are outside `public/` and are not included in `out/` or linked. Do not upload source directories. If DOCX files were uploaded previously, remove those stale public copies using the documented backup/deployment procedure. Public PDFs retain their owner-supplied email, LinkedIn and phone contact details; this task did not add the phone to HTML or rewrite the documents.

## Build and release gate

Run lint, typecheck, blog tests, build and `validate:export` as documented in [deployment instructions](DEPLOY_HOSTINGER.md). Export validation now requires both CV PDFs, their valid signatures/non-empty content/unchanged bytes, the localized Home download paths, all published articles and existing SEO assets. It rejects DOCX exports. Review [the production checklist](PRODUCTION_CHECKLIST.md) and the Task 05 completion report for local validation and remaining live checks.

## Post-deployment URL checks

Verify these exact public endpoints with browser and `curl -I` (`curl.exe -I` in PowerShell):

| URL | Expected |
| --- | --- |
| `https://renzogallegos.com/` | 200, noindex static language chooser |
| `https://renzogallegos.com/es/` | 200, Spanish Home, Spanish download |
| `https://renzogallegos.com/en/` | 200, English Home, English download |
| `https://renzogallegos.com/es/blog/` | 200, Spanish index |
| `https://renzogallegos.com/en/blog/` | 200, English index |
| `https://renzogallegos.com/sitemap.xml` | 200 XML, eight current public HTML URLs, no PDF/drafts |
| `https://renzogallegos.com/robots.txt` | 200 text, crawling allowed and sitemap declared |
| `https://renzogallegos.com/es/feed.xml` | 200 XML, Spanish published articles |
| `https://renzogallegos.com/en/feed.xml` | 200 XML, English published articles |
| `https://renzogallegos.com/cv/renzo-gallegos-cv-es.pdf` | 200 application/pdf, readable Spanish owner CV |
| `https://renzogallegos.com/cv/renzo-gallegos-cv-en.pdf` | 200 application/pdf, readable English owner CV |
| `https://renzogallegos.com/images/renzo-gallegos-social.png` | 200 image/png, 1200×630 |
| `https://renzogallegos.com/es/blog/release-check-missing/` | Genuine 404 status, exported noindex error body |
| `https://renzogallegos.com/cv/Renzo_Gallegos_CV_ES.docx` | Genuine 404, source document not public |
| `https://renzogallegos.com/cv/Renzo_Gallegos_CV_EN.docx` | Genuine 404, source document not public |

Check all four article URLs listed in [Search Console launch guidance](SEARCH_CONSOLE.md). Verify HTTP apex, HTTP www and HTTPS www permanently redirect to HTTPS apex with article paths/query strings preserved. Check certificate coverage, security headers, caches and real Hostinger 404/MIME behavior; local QA cannot establish these. Complete DNS verification, sitemap submission, external schema/social previews and mobile Lighthouse/field monitoring after deployment.

## Tagging — manual after approval and validation

Order: merge reviewed release → hosted CI green for that SHA → deploy matching artifact → successful live smoke/browser validation → tag. Use a clean checkout and confirm main HEAD equals the exact deployed SHA and v1.0.0 does not already exist; stop if main moved to a newer unvalidated commit. These owner commands are documented only and were not executed:

```sh
git checkout main
git pull origin main
git tag -a v1.0.0 -m "Initial public release"
git push origin v1.0.0
```

Upload the contents of the validated `out/` using [the Hostinger backup/rollback procedure](DEPLOY_HOSTINGER.md). No automatic deployment is configured.
