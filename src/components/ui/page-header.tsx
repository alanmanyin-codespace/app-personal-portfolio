import { Container } from "@/components/layout/container";

interface PageHeaderProps {
  /** Deprecated: kept for call-site compatibility; no longer rendered. */
  eyebrow?: string;
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-azure-300/10 py-16 sm:py-20">
      <Container>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-ink text-balance sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-ink-muted">
          {description}
        </p>
      </Container>
    </section>
  );
}
