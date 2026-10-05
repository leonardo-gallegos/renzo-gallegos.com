export type GiscusConfig = { repo: string; repoId: string; category: string; categoryId: string };

// Public identifiers, read during static generation. Rebuild after configuration changes.
export function getGiscusConfig(): GiscusConfig | null {
  const repo = process.env.NEXT_PUBLIC_GISCUS_REPO;
  const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID;
  const category = process.env.NEXT_PUBLIC_GISCUS_CATEGORY;
  const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID;
  if (![repo, repoId, category, categoryId].some(Boolean)) return null;
  if (!repo || !repoId || !category || !categoryId || !/^[\w.-]+\/[\w.-]+$/.test(repo)) throw new Error("Giscus requires a valid owner/repository and all four public configuration values");
  return { repo, repoId, category, categoryId };
}
