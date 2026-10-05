# Blog authoring and launch configuration

Articles live in `content/blog/es` and `content/blog/en`. Use one `.mdx` file per document; its filename must equal its `slug`. Interface text belongs in the locale messages. Content is trusted, reviewed Git source, evaluated only while building; never pass user submissions or remote content into the MDX evaluator.

## Frontmatter

Required fields: `title`, `description`, `slug`, `locale`, `publishedAt`, `category`, `tags`, `featured`, `draft`, `translationKey`. The only optional field is `updatedAt`, included when an actual editorial change warrants it. Quote dates in `YYYY-MM-DD` format. The parser rejects unknown fields, malformed dates, wrong directory locales, duplicate slugs/translation keys, empty tags and update dates preceding publication.

Categories use stable keys: `industrial-data`, `mining-analytics`, `data-science`, `it-ot`, `digital-transformation`. Their display names are localized. Keep tags concise and consistent. Reading time is calculated from body text; never store it manually.

Translations share a `translationKey`, not necessarily a slug. Publish only translations that actually exist. Single-language documents have no invented alternate; the language control goes to the other language's Blog index. Drafts are excluded from routes, listings, Home Insights, related articles, alternate links, sitemap and feeds. All metadata, including drafts, is validated before filtering.

Use H2 and H3 in logical order; the page supplies H1. Heading IDs and TOC come from the same compiled tree. Four or more headings enable the TOC. Use fenced code with its language (`json`, `python`, `sql`, or `text`). Syntax highlighting is generated at build time. GFM tables scroll inside a keyboard-focusable region. Local article images require meaningful alt text, width and height. Keep internal links localized and verify them in the export.

`featured` records an explicit editorial choice; when enabled, the most recent featured article appears once above the chronological list. Launch notes have `featured: false`. Their fixed `2026-10-05` publication dates identify creation of this release candidate, not a fabricated earlier publication history; no update dates or employer anecdotes are asserted.

## Giscus

Comments are omitted and no Giscus request is made unless all four real public configuration values exist at build time:

```text
NEXT_PUBLIC_GISCUS_REPO
NEXT_PUBLIC_GISCUS_REPO_ID
NEXT_PUBLIC_GISCUS_CATEGORY
NEXT_PUBLIC_GISCUS_CATEGORY_ID
```

Obtain them from [giscus.app](https://giscus.app/) after selecting an eligible public GitHub repository, enabling Discussions, installing the Giscus GitHub app and selecting the actual discussion category. Put values in a local environment file or the build environment; never invent identifiers. No token is required. Partial configuration fails the build. Rebuild after changing configuration.

The component is used only on article pages and loads near the comments section. It follows the resolved site theme, labels the iframe and uses the locale plus translation key as a stable discussion term. Translations intentionally have separate language discussions. Live GitHub discussion behavior remains to be checked when real values are supplied.

## Assets and release

`npm run social-image` regenerates the real `public/images/renzo-gallegos-social.png` from the adjacent SVG source using build tooling. Metadata uses the PNG at 1200 × 630. It is a shared author/domain card, not an invented article-specific illustration.

Place real localized PDFs at `public/cv/renzo-gallegos-es.pdf` and `public/cv/renzo-gallegos-en.pdf`. Each Home download activates independently only when its file exists and starts with a PDF signature. Inspect actual document content and locale before release.

RSS is exported at `/es/feed.xml` and `/en/feed.xml`, linked from each localized Blog index. Upload the contents of `/out` to the HTTPS domain root. Preserve directories, `_next`, XML files and images. Configure directory `index.html` serving and a genuine HTTP 404 using the exported `404.html`; avoid a catch-all Home response. No deployed Node.js service is required.
