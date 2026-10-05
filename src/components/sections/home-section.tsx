import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

export function HomeSection({ id, title, intro, children, className }: {
  id: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("home-section", className)}>
      <Container>
        <div className="section-intro">
          <h2 id={`${id}-title`} className="section-title">{title}</h2>
          {intro && <p className="section-description">{intro}</p>}
        </div>
        {children}
      </Container>
    </section>
  );
}
