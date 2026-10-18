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
  const classification =
    project.classification === "independent-demo"
      ? "Independent demo"
      : "Professional case study";

  return (
    <>
      <PageHeader
        eyebrow={classification}
        title={project.title}
        description={project.description}
      />
      <Container className="py-12 sm:py-16">
        <Link
          href="/projects"
          className="inline-flex min-h-11 items-center rounded-md text-sm font-semibold text-blue-700 hover:text-blue-900"
        >
          ← Back to all projects
        </Link>

        <article className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-14">
          <div className="space-y-10">
            <section aria-labelledby="project-challenge">
              <h2 id="project-challenge" className="text-2xl font-bold text-slate-950">
                The challenge
              </h2>
              <p className="mt-4 leading-8 text-slate-700">{detail.challenge}</p>
            </section>

            <section aria-labelledby="project-decisions">
              <h2 id="project-decisions" className="text-2xl font-bold text-slate-950">
                Technical approach
              </h2>
              <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-slate-700">
                {detail.decisions.map((decision, index) => (
                  <li key={index}>{decision}</li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="project-outcomes">
              <h2 id="project-outcomes" className="text-2xl font-bold text-slate-950">
                Outcomes
              </h2>
              <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-slate-700">
                {detail.outcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </section>

            {detail.constraints?.length ? (
              <section aria-labelledby="project-constraints">
                <h2
                  id="project-constraints"
                  className="text-2xl font-bold text-slate-950"
                >
                  Constraints and trade-offs
                </h2>
                <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-slate-700">
                  {detail.constraints.map((constraint, index) => (
                    <li key={index}>{constraint}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {detail.visual ? (
              <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
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
              <p className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                This case study describes professional work without sharing
                confidential code, client records, or proprietary assets.
              </p>
            ) : null}
          </div>

          <aside aria-label="Project details">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-lg font-bold text-slate-950">
                My contribution
              </h2>
              <p className="mt-3 leading-7 text-slate-700">{detail.role}</p>

              <h2 className="mt-7 text-lg font-bold text-slate-950">
                Technologies
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-md bg-white px-3 py-1 text-sm font-semibold text-slate-700"
                  >
                    {technology}
                  </li>
                ))}
              </ul>

              {project.githubUrl ? (
                <a
                  className="mt-6 block font-semibold text-blue-700 hover:text-blue-900"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source repository (opens in new tab)
                </a>
              ) : null}
              {project.liveDemoUrl ? (
                <a
                  className="mt-3 block font-semibold text-blue-700 hover:text-blue-900"
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
