export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground md:px-8">
        <p>© {new Date().getFullYear()} Renzo Gallegos.</p>
        <p>Mining · Data Science · IT/OT Integration</p>
      </div>
    </footer>
  );
}
