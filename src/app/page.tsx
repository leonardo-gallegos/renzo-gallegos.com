"use client";

import { useEffect } from "react";

export default function RootPage() {
  useEffect(() => {
    const language = navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
    window.location.replace(`/${language}/`);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Renzo Gallegos</h1>
        <p className="mt-3 text-muted-foreground">Select language / Selecciona idioma</p>
        <div className="mt-6 flex justify-center gap-4">
          <a className="underline underline-offset-4" href="/es/">Español</a>
          <a className="underline underline-offset-4" href="/en/">English</a>
        </div>
      </div>
    </main>
  );
}
