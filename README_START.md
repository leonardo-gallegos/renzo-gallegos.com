# Starter overlay

Copy these files into the existing `renzo-gallegos` project, preserving the paths.

Install missing dependencies:

```powershell
npm install next-intl next-themes motion
```

The Hero imports the existing shadcn button component at `src/components/ui/button.tsx`.

Create or copy your PDF CVs into:

- `public/cv/renzo-gallegos-es.pdf`
- `public/cv/renzo-gallegos-en.pdf`

Then run:

```powershell
npm run dev
```

And validate production static export:

```powershell
npm run build
```

The finished static site should be emitted to `out/`.

Important: review the generated `AGENTS.md` and merge any useful instructions from the current project `AGENTS.md` before replacing it.
