import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ProjectCard } from "@/components/content/project-card";
import type { Project } from "@/types/content";

const placeholderProject: Project = {
  slug: "sample-project",
  title: "Sample Project",
  description: "A clearly provisional project description.",
  technologies: ["TypeScript", "Next.js"],
  featured: true,
  isPlaceholder: true,
};

describe("ProjectCard", () => {
  it("labels missing project destinations instead of creating broken links", () => {
    render(<ProjectCard project={placeholderProject} />);

    expect(screen.getByText("GitHub link to be added")).toBeInTheDocument();
    expect(screen.getByText("Live demo to be added")).toBeInTheDocument();
    expect(screen.queryAllByRole("link")).toHaveLength(0);
  });

  it("stays quiet about a missing repo on a real project", () => {
    render(
      <ProjectCard
        project={{
          ...placeholderProject,
          isPlaceholder: false,
          githubUrl: undefined,
          liveDemoUrl: "https://example.com/",
        }}
      />,
    );

    expect(screen.queryByText("GitHub link to be added")).toBeNull();
    expect(screen.queryByText("Live demo to be added")).toBeNull();
    expect(
      screen.getByRole("link", { name: /View live demo/ }),
    ).toBeInTheDocument();
  });

  it("links only to approved, complete case studies", () => {
    const reviewed: Project = {
      ...placeholderProject,
      isPlaceholder: false,
      classification: "independent-demo",
      caseStudy: {
        role: "Built an original demo",
        challenge: "Demonstrate an API workflow.",
        decisions: ["Used synthetic cases."],
        outcomes: ["Demonstrated a working example."],
      },
    };

    const { rerender } = render(<ProjectCard project={reviewed} />);

    expect(
      screen.getByRole("link", { name: "Read case study" }),
    ).toHaveAttribute("href", "/projects/sample-project");

    rerender(<ProjectCard project={{ ...reviewed, isPlaceholder: true }} />);
    expect(screen.queryByRole("link", { name: "Read case study" })).toBeNull();

    rerender(<ProjectCard project={{ ...reviewed, caseStudy: undefined }} />);
    expect(screen.queryByRole("link", { name: "Read case study" })).toBeNull();
  });

  it("presents the technology list as structured content", () => {
    render(<ProjectCard project={placeholderProject} />);

    expect(
      screen.getByRole("list", { name: "Technologies" }),
    ).toHaveTextContent("TypeScript");
    expect(
      screen.getByRole("list", { name: "Technologies" }),
    ).toHaveTextContent("Next.js");
  });
});
