# Dependency audit — 2026-10-05

Task 06 recheck on 2026-10-05: `npm audit --json` and `npm outdated --json` completed, each exiting 1 for findings. The same nine high tooling-chain entries and six outdated package entries below remain. No dependency/lockfile change or forced fix was applied in Task 06.

`npm audit --json` reports nine high findings, no critical/moderate/low. `npm outdated --json` reports six direct package entries (React DOM separate). Both exit 1 for findings, not network failure. Registry queries confirm latest braces is 3.0.3; braces@3.0.4 returns 404.

The root advisory [GHSA-vfj7-8cjw-p6xm / CVE-2026-93687](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) concerns stack exhaustion from deeply nested brace patterns. Affected <=3.0.3; **no patched version** is published.

| Finding | Classification | Decision |
| --- | --- | --- |
| braces 3.0.3 | Transitive-only build glob processing, underlying advisory | No verified compatible patch available |
| micromatch 4.0.8 | Transitive-only build tooling, inherits braces | Watch upstream patch |
| fast-glob 3.3.1, multiple locations | Transitive-only build tooling | Same |
| @next/eslint-plugin-next 16.3.8 | Transitive lint tooling | Keep compatible Next 16 tooling |
| eslint-config-next 16.3.8 | Direct development/lint tooling | Reject suggested downgrade to 14.2.35 |
| @ts-morph/common 0.27.0 | Transitive-only component-generation tooling | npm suggests update; braces root remains unpatched |
| ts-morph 26.0.0 | Transitive-only component-generation tooling | No forced tree update |
| @shadcn/registry | Transitive-only generation tooling | Await compatible fix |
| shadcn 4.21.1 | Direct component-generation CLI declared in dependencies | Reject suggested downgrade to 1.0.0 |

Because shadcn is declared in dependencies, npm labels part of this tree production; its role here is build/development tooling. There is no deployed Node runtime and only `out/` is uploaded. No independent browser-runtime advisory was identified, which is not a guarantee that browser dependencies are vulnerability-free. Avoid untrusted glob input/build code; CI has a read-only token and no deployment secrets.

No Task 04 dependency changes, speculative overrides, `npm audit fix --force` or unrelated downgrades were used. Track the advisory/upstream releases and rerun audit before each release. Review a compatible patch when available and validate all checks after lockfile changes. CI install prints findings; this report does not claim a clean audit.

| Outdated package | Current | Wanted | Latest | Upgrade classification |
| --- | --- | --- | --- | --- |
| @types/node | 20.19.43 | 20.19.43 | 26.6.4 | Major types change; align deliberately with Node 22 |
| eslint | 9.39.5 | 9.39.5 | 10.12.0 | Breaking major tooling migration |
| react / react-dom | 19.2.8 | 19.2.8 | 19.3.0 | Paired minor candidate, pinned; review Next support and regression QA |
| shadcn | 4.21.1 | 4.21.2 | 4.21.2 | Compatible patch candidate, no braces fix; defer unrelated update |
| typescript | 5.9.3 | 5.9.3 | 7.0.2 | Breaking compiler migration |

Other direct packages were absent from outdated output. A safe-range candidate is not proof of a security fix. Keep stack/lockfile stable pending a separately reviewed upgrade.
