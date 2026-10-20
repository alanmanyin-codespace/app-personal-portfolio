import { describe, expect, it } from "vitest";

import { siteConfig } from "@/config/site";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";

describe("portfolio content", () => {
  it("provides at least three uniquely addressable placeholder projects", () => {
    expect(projects.length).toBeGreaterThanOrEqual(3);
    expect(new Set(projects.map((project) => project.slug)).size).toBe(
      projects.length,
    );
    expect(projects.every((project) => project.isPlaceholder)).toBe(true);
  });

  it("provides two complete anonymous professional engagements", () => {
    expect(experience).toHaveLength(2);

    for (const item of experience) {
      expect(item.role).not.toBe("");
      expect(item.period).not.toBe("");
      expect(item.summary).not.toBe("");
      expect(item.achievements.length).toBeGreaterThan(0);
      expect(item.technologies.length).toBeGreaterThan(0);
      expect(item.isPlaceholder).toBe(false);
      expect(item.engagement).not.toMatch(
        /Arch-Partnership|Eastech System Limited/i,
      );
    }
  });

  it("provides verified education credentials", () => {
    expect(education).toEqual([
      {
        qualification: "BEng in Computer Engineering",
        institution: "Hong Kong University of Science and Technology (HKUST)",
        period: "2015–2021",
      },
      {
        qualification: "Associate of Engineering",
        institution: "Hong Kong Community College (HKCC)",
        period: "2013–2015",
      },
    ]);
  });

  it("uses the configured production URL for metadata and discovery files", () => {
    expect(siteConfig.url).toBe("https://alan-man-personal-space.vercel.app");
    expect(siteConfig.title).toBe(
      "Full-Stack Developer building enterprise web applications",
    );
  });

  it("uses the owner-approved external CV", () => {
    expect(siteConfig.cvPath).toBe(
      "https://drive.google.com/file/d/1n2YpgSzOHSykcdsZBV8Aj_wWznlcOlDX/view?usp=drive_link",
    );
    expect(siteConfig.cvAvailable).toBe(true);
  });
});
