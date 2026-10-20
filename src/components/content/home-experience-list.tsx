import type { Experience } from "@/types/content";

interface HomeExperienceListProps {
  items: Experience[];
}

export function HomeExperienceList({ items }: HomeExperienceListProps) {
  return (
    <div className="space-y-5">
      {items.map((item) => (
        <article
          key={`${item.role}-${item.period}`}
          className="rounded-2xl border border-azure-300/20 bg-night-900/70 p-6 sm:p-8"
        >
          <h3 className="text-2xl font-bold tracking-[-0.02em] text-ink">
            {item.role}
          </h3>
          <p className="mt-1.5 font-mono text-xs text-azure-200">
            {item.period}
          </p>

          <p className="mt-5 text-lg font-semibold text-ink">
            {item.engagement}
          </p>
          <p className="mt-2 max-w-4xl leading-7 text-ink-muted">
            {item.summary}
          </p>

          <ul className="mt-6 grid gap-3 text-sm leading-6 text-ink-muted lg:grid-cols-2 lg:gap-x-8">
            {item.achievements.map((achievement) => (
              <li key={achievement} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-azure-400"
                />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>

          <ul
            aria-label={`Technologies used as ${item.role}`}
            className="mt-6 flex flex-wrap gap-2"
          >
            {item.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-full border border-azure-300/20 bg-night-800/70 px-3 py-1.5 text-xs font-semibold text-azure-200"
              >
                {technology}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
