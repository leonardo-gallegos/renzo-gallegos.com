"use client";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
const subscribe = () => () => {};
export function ThemeToggle() {
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const {theme, setTheme} = useTheme();
  const t = useTranslations("Theme");
  return <label className="flex items-center gap-2 text-sm">
    <span className="sr-only">{t("label")}</span>
    <select aria-label={t("label")} value={mounted ? theme : "system"}
      disabled={!mounted} onChange={event => setTheme(event.target.value)}
      className="min-h-11 rounded-md border bg-background px-2 text-foreground">
      <option value="light">{t("light")}</option>
      <option value="dark">{t("dark")}</option>
      <option value="system">{t("system")}</option>
    </select>
  </label>;
}
