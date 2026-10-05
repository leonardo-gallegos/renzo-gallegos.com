# Development Plan — renzogallegos.com

## Phase 0 — Repository hygiene
- Initialize Git.
- Create the GitHub repository.
- Protect the main branch if desired.
- Confirm `.gitignore` excludes `.next`, `out`, `.env*`, local caches and secrets.
- Commit the clean Next.js + shadcn baseline before adding site features.

## Phase 1 — Foundation
- Install: `next-intl`, `next-themes`, `motion`.
- Configure static export.
- Add `/es/` and `/en/` localized routes.
- Add theme provider and accessible theme control.
- Create typed site configuration.
- Add header/footer.
- Add Hero.
- Verify `npm run build` generates `/out`.

## Phase 2 — SEO foundation
- Metadata templates and per-page metadata.
- Canonical and hreflang URLs.
- Open Graph/Twitter configuration.
- `robots.ts`.
- `sitemap.ts`.
- Person JSON-LD.
- Search Console ownership verification after domain launch.
- Submit sitemap after production deployment.
- Add analytics only after deciding the privacy/analytics platform.

## Phase 3 — Home content
- Technology marquee.
- Expertise.
- Experience timeline.
- Quantified achievements.
- Featured work/case studies with confidentiality review.
- Education and certifications.
- Contact and CV.

## Phase 4 — Blog
- MDX loader and typed frontmatter.
- Localized article listing.
- Dynamic static routes generated at build time.
- Article metadata.
- Article/Breadcrumb JSON-LD.
- RSS feed if useful.
- Giscus comments.
- Related posts / internal linking.

## Phase 5 — Quality gate
- Lighthouse / PageSpeed review.
- Mobile and keyboard testing.
- Broken-link check.
- Structured Data validation.
- Open Graph preview validation.
- Static-export smoke test on Hostinger.
- Search Console sitemap submission.
