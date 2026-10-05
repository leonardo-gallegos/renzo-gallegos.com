import { formatMonth } from "@/lib/format";
import type { Locale } from "@/lib/seo";
import type { Period } from "@/data/types";

export function DateRange({ start, end, locale, present }: Period & {
  locale: Locale;
  present: string;
}) {
  return (
    <span className="date-range">
      <time dateTime={start}>{formatMonth(start, locale)}</time>
      {" – "}
      {end ? <time dateTime={end}>{formatMonth(end, locale)}</time> : present}
    </span>
  );
}
