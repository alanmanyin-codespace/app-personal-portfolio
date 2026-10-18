import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ProjectCaseStudy } from "@/components/content/project-case-study";
import type { PublishedCaseStudy } from "@/lib/project-publication";

const example: PublishedCaseStudy = {
  slug: "sample",
  title: "<script>alert('bad')</script>",
  description: "A synthetic example for component tests.",
  technologies: ["React", "TypeScript"],
  classification: "independent-demo",
  featured: true,
  isPlaceholder: false,
  caseStudy: {
    role: "Implemented the interface",
    challenge: "Illustrate an original feature.",
    decisions: ["Use a simple workflow model."],
    outcomes: ["Works with test-only data."],
    constraints: ["No real user data."],
  },
};

describe("ProjectCaseStudy", () => {
  it("renders meaningful, accessible sections without injecting title markup", () => {
    const { container } = render(<ProjectCaseStudy project={example} />);

    expect(
      screen.getByRole("heading", { level: 1, name: example.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "The challenge" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Technical approach" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Outcomes" })).toBeInTheDocument();
    expect(
      screen.getByRole("complementary", { name: "Project details" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "← Back to all projects" }),
    ).toHaveAttribute("href", "/projects");
    expect(container.querySelector("script")).toBeNull();
  });
});
