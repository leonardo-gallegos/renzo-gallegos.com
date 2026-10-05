import "server-only";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import { visit } from "unist-util-visit";
import { toString } from "hast-util-to-string";
import type { Root } from "hast";

export type TocHeading = { id: string; title: string; depth: 2 | 3 };

// Local, reviewed Git content only. Evaluation and highlighting occur at build time.
export async function renderArticle(body: string) {
  const headings: TocHeading[] = [];
  function collectHeadings() {
    return (tree: Root) => {
      let previous = 1;
      visit(tree, "element", node => {
        if (!/^h[1-6]$/.test(node.tagName)) return;
        const depth = Number(node.tagName.slice(1));
        if (depth < 2 || depth > 3 || depth > previous + 1) throw new Error("Article headings must use a logical H2/H3 hierarchy; the page supplies H1");
        previous = depth;
        headings.push({ id: String(node.properties.id), title: toString(node), depth: depth as 2 | 3 });
      });
    };
  }
  const result = await evaluate(body, {
    ...runtime,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [rehypeSlug, { prefix: "section-" }], collectHeadings,
      [rehypePrettyCode, { theme: { light: "github-light", dark: "github-dark" }, keepBackground: false }],
    ],
  });
  return { Content: result.default, headings };
}
