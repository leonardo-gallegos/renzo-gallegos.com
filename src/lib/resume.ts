import "server-only";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import type { Locale } from "./seo";

// Evaluated while statically rendering Home; no runtime endpoint is required.
export function resumePath(locale: Locale): string | null {
  const path = `/cv/renzo-gallegos-cv-${locale}.pdf`;
  const file = join(process.cwd(), "public", path);
  if (!existsSync(file)) return null;
  return readFileSync(file).subarray(0, 5).toString() === "%PDF-" ? path : null;
}
