import { Container } from "@/components/layout/container";
import { TypingText, typingDuration } from "@/components/ui/typing-text";

interface PageHeaderProps {
  /** Deprecated: kept for call-site compatibility; no longer rendered. */
  eyebrow?: string;
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-azure-300/10 pt-12 pb-8 sm:pt-16 sm:pb-10 lg:pt-20">
      <Container>
        {/* Same title style and spacing as the homepage hero. */}
        <h1 className="max-w-4xl text-5xl font-bold tracking-[-0.04em] text-ink text-balance sm:text-6xl lg:text-7xl">
          <TypingText segments={[title]} />
        </h1>
        <p
          className="rise mt-5 max-w-3xl text-lg leading-8 text-ink-muted"
          // Rises in just before the title above finishes typing.
          style={{
            animationDelay: `${Math.max(300, typingDuration(title) - 250)}ms`,
          }}
        >
          {description}
        </p>
      </Container>
    </section>
  );
}
