import type { Experience } from "@/types/content";

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <article className="relative border-l-2 border-blue-200 pl-7">
      <span
        aria-hidden="true"
        className="absolute top-1 -left-[7px] h-3 w-3 rounded-full bg-blue-700 ring-4 ring-white"
      />

      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-950">
            {experience.engagement}
          </h2>
          <p className="mt-1 font-semibold text-blue-700">{experience.role}</p>
        </div>
        <div className="text-sm leading-6 text-slate-500 sm:text-right">
          <p>{experience.period}</p>
        </div>
      </div>

      <p className="mt-5 leading-7 text-slate-600">{experience.summary}</p>

      <h3 className="mt-6 font-bold text-slate-950">Selected contributions</h3>
      <ul className="mt-3 space-y-2 text-slate-600">
        {experience.achievements.map((achievement) => (
          <li key={achievement} className="flex gap-3">
            <span aria-hidden="true" className="text-blue-600">
              •
            </span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>

      <ul aria-label="Technologies used" className="mt-5 flex flex-wrap gap-2">
        {experience.technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700"
          >
            {technology}
          </li>
        ))}
      </ul>
    </article>
  );
}
