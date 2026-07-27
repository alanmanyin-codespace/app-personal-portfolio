import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ExperienceItem } from "@/components/content/experience-item";
import type { Experience } from "@/types/content";

const placeholderExperience: Experience = {
  company: "Company to be added",
  role: "Role to be added",
  period: "Period to be added",
  location: "Location to be added",
  summary: "Summary to be added.",
  achievements: ["Verified achievement to be added."],
  technologies: ["Technology to be confirmed"],
  isPlaceholder: true,
};

describe("ExperienceItem", () => {
  it("visibly identifies provisional employment information", () => {
    render(<ExperienceItem experience={placeholderExperience} />);

    expect(
      screen.getByRole("complementary", {
        name: "Placeholder content notice",
      }),
    ).toHaveTextContent("Replace this entry with verified employment details");
  });
});
