import Link from "next/link";

import { PlaceholderNotice } from "@/components/ui/placeholder-notice";
import type { Project } from "@/types/content";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold tracking-tight text-slate-950">
          {project.title}
        </h3>
        {project.featured ? (
          <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
            Featured
          </span>
        ) : null}
      </div>

      <p className="mt-4 flex-1 leading-7 text-slate-600">
        {project.description}
      </p>

      <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700"
          >
            {technology}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold">
        {project.githubUrl ? (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm text-blue-700 hover:text-blue-900"
          >
            View on GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </Link>
        ) : (
          <span className="text-slate-500">GitHub link to be added</span>
        )}
        {project.liveDemoUrl ? (
          <Link
            href={project.liveDemoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm text-blue-700 hover:text-blue-900"
          >
            View live demo
            <span className="sr-only"> (opens in a new tab)</span>
          </Link>
        ) : (
          <span className="text-slate-500">Live demo to be added</span>
        )}
      </div>

      {project.isPlaceholder ? (
        <div className="mt-5">
          <PlaceholderNotice>
            Replace this card with a verified project case study.
          </PlaceholderNotice>
        </div>
      ) : null}
    </article>
  );
}
