# Renzo Gallegos

Bilingual mining engineering and industrial data portfolio with a local MDX blog. Next.js static export for https://renzogallegos.com.

## Development and production

Use Node 22 LTS. Install with `npm ci`; develop with `npm run dev`. Before release:

```sh
npm run lint
npm run typecheck
npm run test:blog
npm run build
npm run validate:export
```

Upload the **contents** of `out/` to Hostinger `public_html`; no production Node runtime is required. GitHub Actions validates and uploads an artifact; deployment remains manual.

- [Deployment, HTTPS, headers, rollback and future SFTP](docs/DEPLOY_HOSTINGER.md)
- [Production checklist](docs/PRODUCTION_CHECKLIST.md)
- [Search Console launch](docs/SEARCH_CONSOLE.md)
- [Dependency audit](docs/DEPENDENCY_AUDIT.md)
- [Blog authoring](docs/BLOG_AUTHORING.md)
- [V1 release candidate and post-deployment URLs](docs/RELEASE_V1.md)
- [Launch runbook, owner gates and rollback](docs/LAUNCH_RUNBOOK.md)
- [Empty SEO baseline and review cadence](docs/SEO_BASELINE.md)
- [Future editorial roadmap](docs/CONTENT_ROADMAP.md)

After owner deployment, run `npm run smoke:live` from an operator machine with Node 22. It checks live HTTP endpoints, basic metadata, assets, redirects and selected privacy paths; browser/platform/performance checks remain in the runbook. Local rehearsal against a running static server: `npm run smoke:live -- --base-url http://127.0.0.1:4176`. Rehearsal is not live launch evidence.

Copy `.env.example` to ignored `.env.local` only for actual GA4/Giscus public identifiers. Empty values disable integrations. `NEXT_PUBLIC_*` values are public, never credentials; changes require rebuild/redeployment. Both verified localized CV PDFs are required by release validation and linked from their Home Hero. Editable DOCX originals are preserved outside public in `assets/cv-source/`. The existing Windows SWC cache workaround is in the deployment guide.
