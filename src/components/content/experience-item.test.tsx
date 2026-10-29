import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ExperienceItem } from "@/components/content/experience-item";
import type { Experience } from "@/types/content";

const verifiedExperience: Experience = {
  engagement: "Enterprise workflow platform",
  role: "System Developer",
  period: "May 2025–Present",
  summary: "Built and supported a full-stack enterprise platform.",
  achievements: ["Delivered database-backed access controls."],
  technologies: ["React", "FastAPI"],
  isPlaceholder: false,
};

describe("ExperienceItem", () => {
  it("presents the engagement without employer or placeholder copy", () => {
    render(<ExperienceItem experience={verifiedExperience} />);

    expect(
      screen.getByRole("heading", { name: "Enterprise workflow platform" }),
    ).toBeInTheDocument();
    expect(screen.getByText("System Developer")).toBeInTheDocument();
    expect(
      screen.queryByRole("complementary", {
        name: "Placeholder content notice",
      }),
    ).toBeNull();
  });

  it("centers the timeline marker on the engagement heading", () => {
    const { container } = render(
      <ExperienceItem experience={verifiedExperience} />,
    );

    const marker = container.querySelector("article > span");

    expect(marker).toHaveClass("h-8");
    expect(marker?.children).toHaveLength(2);
    expect(marker?.children[0]).toHaveClass("top-1/2");
    expect(marker?.children[1]).toHaveClass("top-1/2");
  });
});
