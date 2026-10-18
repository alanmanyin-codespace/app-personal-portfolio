import { projects } from "@/data/projects";
import type { Project, ProjectCaseStudy } from "@/types/content";

export type PublishedCaseStudy = Project & {
  classification: NonNullable<Project["classification"]>;
  caseStudy: ProjectCaseStudy;
};

/**
 * An explicit publication gate: neither a generic placeholder card nor
 * a partially completed detail draft gets a public route or CTA.
 * The owner must approve text before setting isPlaceholder to false.
 */
export function isPublishedCaseStudy(
  project: Project,
): project is PublishedCaseStudy {
  const detail = project.caseStudy;

  return (
    !project.isPlaceholder &&
    Boolean(project.classification) &&
    Boolean(project.slug.trim()) &&
    Boolean(project.title.trim()) &&
    Boolean(detail?.role.trim()) &&
    Boolean(detail?.challenge.trim()) &&
    Boolean(detail?.decisions.length) &&
    (detail?.decisions.every((decision) => decision.trim().length > 0) ??
      false) &&
    Boolean(detail?.outcomes.length) &&
    (detail?.outcomes.every((outcome) => outcome.trim().length > 0) ?? false)
  );
}

export function getPublishedCaseStudies(
  source: readonly Project[] = projects,
): PublishedCaseStudy[] {
  return source.filter(isPublishedCaseStudy);
}

export function getPublishedCaseStudyBySlug(
  slug: string,
  source: readonly Project[] = projects,
): PublishedCaseStudy | undefined {
  return getPublishedCaseStudies(source).find((project) => project.slug === slug);
}
