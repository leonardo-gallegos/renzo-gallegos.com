# Production checklist

Task 06 execution order and owner responsibilities: [launch runbook](LAUNCH_RUNBOOK.md). Leave owner/live checks unchecked until evidence exists. Run `npm run smoke:live` after deployment and save its JSON outside the artifact; local rehearsal is not production evidence.

## Release preparation

- [ ] Node 22 CI green: clean install, lint, typecheck, blog tests, build, export validation, uploaded artifact. Review [dependency findings](DEPENDENCY_AUDIT.md).
- [ ] Public build identifiers intentionally set or empty; no credentials, source or private files in artifact.
- [ ] Dated backup/configuration outside web root and recoverable rollback prepared; follow [Hostinger guide](DEPLOY_HOSTINGER.md).
- [ ] Reviewed intended files, both PDFs and workflow tracked in release; no staged QA/real environment/secrets. Exact merge SHA matches hosted artifact/deployment; create v1.0.0 only after live validation.

## Pages and UX

- [ ] `/` chooser noindex and usable; `/es/`, `/en/`, both blog indexes and all published launch articles load directly and through links. Use content catalog/sitemap for the growing article list.
- [ ] Review 375, 430, 768, 1024, 1440px in light/dark: no overflow, readable code/tables, usable navigation/focus, no console/hydration errors.
- [ ] Theme persists; language switch reaches actual translation or other blog index. Home section links, Blog, breadcrumbs, related posts/contact work.
- [ ] Static article body readable with JS disabled; keyboard skip/TOC and reduced motion work.
- [ ] ES Hero `Descargar CV` downloads the Spanish PDF; EN `Download résumé` downloads the English PDF. Both links are keyboard-accessible with visible focus and no unavailable notice.
- [ ] Exact paths are `/cv/renzo-gallegos-cv-es.pdf` and `/cv/renzo-gallegos-cv-en.pdf`; both exported files are non-empty, valid PDF signatures and byte-identical to the owner assets. No broken/old-case PDF links, PDF preloads or automatic PDF requests during rendering.
- [ ] DOCX exposure decision: originals remain preserved in `assets/cv-source/` outside public; no DOCX file exists in `out/`, no DOCX links, and no source assets are uploaded. Remove any previously uploaded DOCX copies after confirming backups/document root.
- [ ] Comments disabled without four Giscus values; if enabled test lazy loading, sign-in, locale/theme and discussion mapping.
- [ ] GA absent makes no requests; if activated verify production-only behavior, one pageview per load, consent/privacy and no duplicate tags.

## SEO

- [ ] Unique title/description, one H1, canonical HTTPS apex, real hreflang/x-default; chooser and 404 noindex.
- [ ] Person/BlogPosting/BreadcrumbList match visible author/content, publication dates and actual editorial updates only.
- [ ] Sitemap only real public localized pages/posts; no chooser/404/drafts/fake translations. Robots allows crawling and declares sitemap.
- [ ] Both RSS feeds parse as XML, correct locales/public article URLs/stable dates/no drafts.
- [ ] Home/blog/articles reference absolute `https://renzogallegos.com/images/renzo-gallegos-social.png`; actual response is 1200×630 PNG. Validate platform previews after deployment.
- [ ] Follow [Search Console guide](SEARCH_CONSOLE.md): actual DNS Domain verification, sitemap submission, public URL inspection, indexing/CWV/query monitoring.

## Live HTTP — verify after upload

Use `curl -I` (`curl.exe -I` in PowerShell) and browser Network. Local QA cannot establish provider configuration.

- [ ] Valid certificate for apex/www; HTTP apex, HTTP www, HTTPS www redirect permanently to HTTPS apex with paths/queries preserved, no loops.
- [ ] Made-up `/es/blog/release-check-missing/` returns **404**, exported error body and noindex; public pages return 200, no SPA/soft-404 fallback.
- [ ] `_next` scripts/CSS/fonts, images, feeds, robots, sitemap and manifest return 200 with correct MIME under nosniff.
- [ ] Both exact PDF URLs in [release notes](RELEASE_V1.md) return 200 over HTTPS with `application/pdf`; direct viewing and normal browser downloads both work. Obsolete filenames and `/cv/Renzo_Gallegos_CV_ES.docx` / `/cv/Renzo_Gallegos_CV_EN.docx` return genuine 404 after stale assets are removed.
- [ ] Hosting headers present; CSP report-only reviewed on all themes/routes and enabled GA/Giscus before enforcement.
- [ ] Removed files no longer public, caches consistent, backup inaccessible by URL, rollback recoverable.
- [ ] `/this-route-should-not-exist/` returns genuine 404/noindex. Selected `.env`, source/Git/package/QA/source-DOCX and discovered JS/CSS map URLs inaccessible; deployed inventory contains no unintended private/source/backup files. Record scope, not an absolute security claim.
- [ ] Record actual cache-control: immutable year-long hashed `_next/static` assets, refreshable mutable HTML/XML/feeds/robots/PDF/social files. Record referrer/nosniff/frame/permissions/CSP or report-only state, not assumed settings.
- [ ] LinkedIn, messaging and available OG debugger previews checked after deployment, image crawler accessible; no speculative image replacement.

## Performance

- [ ] PageSpeed plus mobile/desktop Lighthouse on both Homes, both indexes and one article per locale; record LCP/CLS, field INP when available and Performance/Accessibility/Best Practices/SEO scores with conditions/evidence in the runbook. No synthetic score-100 gate.
- [ ] Fill actual launch/Search Console evidence and measurements in [SEO baseline](SEO_BASELINE.md); review at 30/60/90 days. Future topics remain proposals in [content roadmap](CONTENT_ROADMAP.md).

Use Network/Performance and mobile Lighthouse/PageSpeed after deployment. Record conditions; lab timings differ from real field Core Web Vitals. Review JS download/execution/hydration, first-party Geist fonts, CSS, LCP, layout shift and third parties. Articles/highlighting are generated at build time; navigation/theme supply small client interactions. The marquee uses CSS and respects reduced motion. The sharing PNG should not download during ordinary rendering. GA is lazyOnload/absent by default; Giscus is intersection-lazy/absent by default. Retest when enabled; prioritize observed regressions over a perfect score.
