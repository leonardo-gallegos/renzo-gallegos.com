# Search launch

1. Deploy production and verify HTTPS/canonical redirects, real 404s, robots and sitemap using [the production checklist](PRODUCTION_CHECKLIST.md).
2. Add the **Domain property** `renzogallegos.com` in the owner's [Search Console](https://search.google.com/search-console). Copy Google's actual TXT verification value to the authoritative DNS zone, preserve existing records, allow propagation, verify ownership and retain the record. No token is invented here. [Ownership verification](https://support.google.com/webmasters/answer/9008080).
3. Submit `https://renzogallegos.com/sitemap.xml`; confirm successful fetch and discovered URLs. Submission does not guarantee indexing. [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
4. Inspect `/es/`, `/en/`, `/es/blog/`, `/en/blog/` and every published launch article below. Check live fetch/rendered content, indexability, declared/Google-selected canonical and actual locale alternates. Request indexing only for real published pages. Exclude noindex chooser, 404, drafts and nonexistent translations.
5. Monitor Page indexing, sitemap errors, security/manual actions, Core Web Vitals and Performance queries/pages/countries, impressions, clicks, CTR and average position. Field performance needs enough real traffic and may initially lack data. Investigate soft 404s, duplicate canonicals or excluded public pages. Record actual evidence/period/filters in [SEO baseline](SEO_BASELINE.md), initially check indexing weekly and review at 30/60/90 days from actual launch.
6. Continue publishing original technical articles with useful depth, evidence and internal links. Rebuild/redeploy; feeds/sitemap discover published MDX automatically. Do not mass-generate shallow SEO pages.

Launch URLs:

- `https://renzogallegos.com/es/`
- `https://renzogallegos.com/en/`
- `https://renzogallegos.com/es/blog/`
- `https://renzogallegos.com/en/blog/`
- `https://renzogallegos.com/es/blog/arquitectura-datos-mine-to-mill/`
- `https://renzogallegos.com/es/blog/estructurar-pi-af-operacion-minera/`
- `https://renzogallegos.com/en/blog/mine-to-mill-data-architecture/`
- `https://renzogallegos.com/en/blog/structure-pi-af-mining-operation/`

After deployment, inspect Person, BlogPosting and BreadcrumbList with Google's schema/Rich Results tools; valid data does not guarantee a special appearance. Use platforms' sharing debugger/post inspector for social previews. Verify the actual 1200×630 PNG response, absolute production metadata and refreshed caches. Local checks cannot prove external crawler access or live indexing.
