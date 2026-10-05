import type { MDXComponents } from "mdx/types";
import Image from "next/image";

export function getMdxComponents(tableLabel: string): MDXComponents { return {
  pre: props => <pre {...props} tabIndex={0} translate="no" />,
  code: props => <code {...props} translate="no" />,
  table: props => <div className="article-table" role="region" aria-label={tableLabel} tabIndex={0}><table {...props} /></div>,
  img: ({ src, alt, width, height }) => {
    if (typeof src !== "string" || !src.startsWith("/") || !alt || !width || !height) throw new Error("MDX images require a local src, meaningful alt, width and height");
    return <Image src={src} alt={alt} width={Number(width)} height={Number(height)} loading="lazy" />;
  },
}; }
