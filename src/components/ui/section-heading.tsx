interface SectionHeadingProps {
  /** Deprecated: kept for call-site compatibility; no longer rendered. */
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold tracking-tight text-ink text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-8 text-ink-muted">{description}</p>
      ) : null}
    </div>
  );
}
