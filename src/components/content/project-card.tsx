import Link from "next/link";

import { PlaceholderNotice } from "@/components/ui/placeholder-notice";
import { ArrowRight } from "@/components/visual/icons";
import { isPublishedCaseStudy } from "@/lib/project-publication";
import type { Project } from "@/types/content";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="glass glass-hover flex h-full flex-col rounded-2xl p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold tracking-tight text-ink">
          {project.title}
        </h3>
        {project.featured ? (
          <span className="shrink-0 rounded-full border border-azure-300/30 bg-azure-500/15 px-3 py-1 font-mono text-[0.68rem] tracking-wide text-azure-200">
            Featured
          </span>
        ) : null}
      </div>

      <p className="mt-4 flex-1 leading-7 text-ink-muted">
        {project.description}
      </p>

      <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-md border border-azure-300/15 bg-night-800/50 px-2.5 py-1 font-mono text-[0.7rem] text-ink-muted"
          >
            {technology}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
        {isPublishedCaseStudy(project) ? (
          <Link
            href={`/projects/${encodeURIComponent(project.slug)}`}
            className="inline-flex items-center gap-1 rounded-sm text-azure-200 transition-colors hover:text-cyan-300"
          >
            Read case study
            <ArrowRight className="h-4 w-4" />
          </Link>
        ) : null}
        {project.githubUrl ? (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm text-azure-200 transition-colors hover:text-cyan-300"
          >
            View on GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </Link>
        ) : project.isPlaceholder ? (
          <span className="text-ink-faint">GitHub link to be added</span>
        ) : null}
        {project.liveDemoUrl ? (
          <Link
            href={project.liveDemoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm text-azure-200 transition-colors hover:text-cyan-300"
          >
            View live demo
            <span className="sr-only"> (opens in a new tab)</span>
          </Link>
        ) : project.isPlaceholder ? (
          <span className="text-ink-faint">Live demo to be added</span>
        ) : null}
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
