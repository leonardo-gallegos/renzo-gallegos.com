import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import test from "node:test";
import ts from "typescript";

// Run the actual TS validator without a second test-only schema or a TS runtime dependency.
const source = readFileSync(new URL("../src/lib/blog/schema.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } });
const { parseArticleMeta } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
const valid = { title: "Asset modeling", description: "A focused technical note.", slug: "asset-modeling", locale: "es", publishedAt: "2026-10-05", category: "industrial-data", tags: ["PI AF"], featured: false, draft: false, translationKey: "asset-modeling" };

test("accepts valid metadata and preserves an explicit editorial update", () => {
  assert.deepEqual(parseArticleMeta(valid, "example.mdx", "es"), valid);
  assert.equal(parseArticleMeta({ ...valid, updatedAt: "2026-10-06" }, "example.mdx", "es").updatedAt, "2026-10-06");
});

for (const [name, change] of [
  ["missing title", { title: undefined }], ["whitespace description", { description: " " }],
  ["directory locale mismatch", { locale: "en" }], ["unsafe slug", { slug: "../private" }],
  ["invalid translation key", { translationKey: "Pair Name" }], ["unknown category", { category: "invented" }],
  ["duplicate tags", { tags: ["PI AF", "PI AF"] }], ["empty tags", { tags: [] }],
  ["nonstring tag", { tags: [42] }], ["unquoted YAML date", { publishedAt: new Date("2026-10-05") }],
  ["impossible calendar date", { publishedAt: "2026-02-30" }], ["invalid leap day", { publishedAt: "2025-02-29" }],
  ["update before publication", { updatedAt: "2026-10-04" }], ["string draft flag", { draft: "false" }],
  ["missing featured flag", { featured: undefined }], ["unknown field", { views: 9000 }],
]) {
  test(`rejects ${name} with its source filename`, () => {
    assert.throws(() => parseArticleMeta({ ...valid, ...change }, "invalid.mdx", "es"), /invalid\.mdx:/);
  });
}

test("accepts an actual leap day", () => {
  assert.equal(parseArticleMeta({ ...valid, publishedAt: "2024-02-29" }, "leap.mdx", "es").publishedAt, "2024-02-29");
});
