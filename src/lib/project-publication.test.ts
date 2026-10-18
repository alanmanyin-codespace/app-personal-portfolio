import { describe, expect, it } from "vitest";

import { projects } from "@/data/projects";
import {
  getPublishedCaseStudies,
  getPublishedCaseStudyBySlug,
  isPublishedCaseStudy,
} from "@/lib/project-publication";
import type { Project } from "@/types/content";

const reviewedProject: Project = {
  slug: "synthetic-demo",
  title: "Original Synthetic Demo",
  description: "Illustrative test data, never real employer experience.",
  technologies: ["React", "TypeScript"],
  featured: true,
  isPlaceholder: false,
  classification: "independent-demo",
  caseStudy: {
    role: "Created an original prototype",
    challenge: "Demonstrate a sample workflow.",
    decisions: ["Designed a simple model using fictional sample users."],
    outcomes: ["The demonstration supports the sample workflow."],
  },
};

describe("case-study publication gate", () => {
  it("keeps every current placeholder off public detail routes", () => {
    expect(getPublishedCaseStudies(projects)).toEqual([]);
    expect(
      projects.every((project) => getPublishedCaseStudyBySlug(project.slug) === undefined),
    ).toBe(true);
  });

  it("resolves a valid reviewed slug and rejects an unknown slug", () => {
    const source = [projects[0], reviewedProject];

    expect(getPublishedCaseStudyBySlug("synthetic-demo", source)).toEqual(
      reviewedProject,
    );
    expect(getPublishedCaseStudyBySlug("not-a-project", source)).toBeUndefined();
    expect(getPublishedCaseStudies(source)).toHaveLength(1);
  });

  it("rejects unapproved or incomplete case-study records", () => {
    expect(isPublishedCaseStudy({ ...reviewedProject, isPlaceholder: true })).toBe(
      false,
    );
    expect(isPublishedCaseStudy({ ...reviewedProject, caseStudy: undefined })).toBe(
      false,
    );
    expect(
      isPublishedCaseStudy({
        ...reviewedProject,
        caseStudy: { ...reviewedProject.caseStudy!, outcomes: [] },
      }),
    ).toBe(false);
    expect(
      isPublishedCaseStudy({ ...reviewedProject, classification: undefined }),
    ).toBe(false);
  });
});
