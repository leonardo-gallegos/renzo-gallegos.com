"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import type { GiscusConfig } from "@/lib/giscus";
import type { Locale } from "@/lib/seo";

export function Giscus({ config, locale, term, title }: { config: GiscusConfig; locale: Locale; term: string; title: string }) {
  const container = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const theme = useRef(resolvedTheme);
  useEffect(() => {
    theme.current = resolvedTheme;
    container.current?.querySelector<HTMLIFrameElement>("iframe.giscus-frame")?.contentWindow?.postMessage({ giscus: { setConfig: { theme: resolvedTheme === "dark" ? "dark" : "light" } } }, "https://giscus.app");
  }, [resolvedTheme]);

  useEffect(() => {
    const target = container.current;
    if (!target) return;
    let loaded = false;
    const load = () => {
      if (loaded) return;
      loaded = true;
      const script = document.createElement("script");
      script.src = "https://giscus.app/client.js";
      script.async = true;
      script.crossOrigin = "anonymous";
      const attributes = {
        repo: config.repo, "repo-id": config.repoId, category: config.category, "category-id": config.categoryId,
        mapping: "specific", term, strict: "1", "reactions-enabled": "1", "emit-metadata": "0",
        "input-position": "top", theme: theme.current === "dark" ? "dark" : "light", lang: locale, loading: "lazy",
      };
      for (const [key, value] of Object.entries(attributes)) script.setAttribute(`data-${key}`, value);
      target.appendChild(script);
    };
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) { load(); observer.disconnect(); }
    }, { rootMargin: "200px" });
    const labelFrames = new MutationObserver(() => {
      const iframe = target.querySelector("iframe");
      if (iframe) iframe.title = title;
    });
    labelFrames.observe(target, { childList: true, subtree: true });
    observer.observe(target);
    return () => { observer.disconnect(); labelFrames.disconnect(); target.replaceChildren(); };
  }, [config, locale, term, title]);
  return <div ref={container} className="giscus" />;
}
