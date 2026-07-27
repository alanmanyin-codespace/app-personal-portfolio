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
