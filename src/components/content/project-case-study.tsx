import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/ui/page-header";
import type { PublishedCaseStudy } from "@/lib/project-publication";

interface ProjectCaseStudyProps {
  project: PublishedCaseStudy;
}

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const detail = project.caseStudy;

  return (
    <>
      <PageHeader title={project.title} description={project.description} />
      <Container className="py-12 sm:py-16">
        <Link
          href="/projects"
          className="inline-flex min-h-11 items-center rounded-md text-sm font-semibold text-azure-200 transition-colors hover:text-cyan-300"
        >
          ← Back to all projects
        </Link>

        <article className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-14">
          <div className="space-y-10">
            <section aria-labelledby="project-challenge">
              <h2 id="project-challenge" className="text-2xl font-bold text-ink">
                The challenge
              </h2>
              <p className="mt-4 leading-8 text-ink-muted">{detail.challenge}</p>
            </section>

            <section aria-labelledby="project-decisions">
              <h2 id="project-decisions" className="text-2xl font-bold text-ink">
                Technical approach
              </h2>
              <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-ink-muted marker:text-azure-400">
                {detail.decisions.map((decision, index) => (
                  <li key={index}>{decision}</li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="project-outcomes">
              <h2 id="project-outcomes" className="text-2xl font-bold text-ink">
                Outcomes
              </h2>
              <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-ink-muted marker:text-azure-400">
                {detail.outcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </section>

            {detail.constraints?.length ? (
              <section aria-labelledby="project-constraints">
                <h2
                  id="project-constraints"
                  className="text-2xl font-bold text-ink"
                >
                  Constraints and trade-offs
                </h2>
                <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-ink-muted marker:text-azure-400">
                  {detail.constraints.map((constraint, index) => (
                    <li key={index}>{constraint}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {detail.visual ? (
              <figure className="glass overflow-hidden rounded-2xl">
                <Image
                  src={detail.visual.src}
                  alt={detail.visual.alt}
                  width={1200}
                  height={675}
                  className="h-auto w-full object-contain"
                />
              </figure>
            ) : null}

            {project.classification === "professional-case-study" ? (
              <p className="glass rounded-xl p-4 text-sm leading-6 text-ink-muted">
                This case study describes professional work without sharing
                confidential code, client records, or proprietary assets.
              </p>
            ) : null}
          </div>

          <aside aria-label="Project details">
            <div className="glass rounded-2xl p-6">
              <h2 className="text-lg font-bold text-ink">My contribution</h2>
              <p className="mt-3 leading-7 text-ink-muted">{detail.role}</p>

              <h2 className="mt-7 text-lg font-bold text-ink">Technologies</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-md border border-azure-300/15 bg-night-800/50 px-3 py-1 font-mono text-[0.72rem] text-ink-muted"
                  >
                    {technology}
                  </li>
                ))}
              </ul>

              {project.githubUrl ? (
                <a
                  className="mt-6 block font-semibold text-azure-200 transition-colors hover:text-cyan-300"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source repository (opens in new tab)
                </a>
              ) : null}
              {project.liveDemoUrl ? (
                <a
                  className="mt-3 block font-semibold text-azure-200 transition-colors hover:text-cyan-300"
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live demo (opens in new tab)
                </a>
              ) : null}
            </div>
          </aside>
        </article>
      </Container>
    </>
  );
}
