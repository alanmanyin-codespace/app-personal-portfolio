import { describe, expect, it } from "vitest";

import { siteConfig } from "@/config/site";
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

  it("keeps every experience entry complete and explicitly provisional", () => {
    expect(experience.length).toBeGreaterThan(0);

    for (const item of experience) {
      expect(item.company).not.toBe("");
      expect(item.role).not.toBe("");
      expect(item.period).not.toBe("");
      expect(item.location).not.toBe("");
      expect(item.summary).not.toBe("");
      expect(item.achievements.length).toBeGreaterThan(0);
      expect(item.technologies.length).toBeGreaterThan(0);
      expect(item.isPlaceholder).toBe(true);
    }
  });

  it("uses an obvious placeholder URL until deployment is configured", () => {
    expect(siteConfig.url).toBe("https://portfolio.example.com");
  });
});
