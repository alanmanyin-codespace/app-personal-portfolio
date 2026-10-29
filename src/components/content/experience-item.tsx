import type { Experience } from "@/types/content";

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <article className="relative pl-7">
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 h-8 w-5"
      >
        <span className="absolute top-1/2 left-0 h-px w-5 -translate-y-1/2 bg-gradient-to-r from-azure-400 to-transparent" />
        <span className="absolute top-1/2 left-0 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-azure-400 shadow-[0_0_14px_2px_rgba(90,155,255,0.8)]" />
      </span>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-ink">
            {experience.engagement}
          </h2>
          <p className="mt-1 font-semibold text-azure-200">{experience.role}</p>
        </div>
        <p className="font-mono text-xs leading-6 text-ink-faint sm:text-right">
          {experience.period}
        </p>
      </div>

      <p className="mt-5 leading-7 text-ink-muted">{experience.summary}</p>

      <h3 className="mt-6 font-semibold text-ink">Selected contributions</h3>
      <ul className="mt-3 space-y-2 text-ink-muted">
        {experience.achievements.map((achievement) => (
          <li key={achievement} className="flex gap-3">
            <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-azure-400" />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>

      <ul aria-label="Technologies used" className="mt-5 flex flex-wrap gap-2">
        {experience.technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-md border border-azure-300/15 bg-night-800/50 px-2.5 py-1 font-mono text-[0.72rem] text-ink-muted"
          >
            {technology}
          </li>
        ))}
      </ul>
    </article>
  );
}
