import { describe, expect, it } from "vitest";

import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";
import { buildLlmsTxt } from "@/lib/llms-txt";

describe("llms.txt", () => {
  const text = buildLlmsTxt();

  it("follows the llms.txt layout: H1 name, then a blockquote summary", () => {
    const [heading, blank, summary] = text.split("\n");
    expect(heading).toBe(`# ${siteConfig.name}`);
    expect(blank).toBe("");
    expect(summary).toMatch(/^> /);
  });

  it("lists every published project with its live link", () => {
    for (const project of projects) {
      expect(text).toContain(`[${project.title}](${project.liveDemoUrl})`);
    }
  });

  it("uses absolute production URLs for site pages", () => {
    expect(text).toContain(`(${siteConfig.url}/projects)`);
    expect(text).toContain(`(${siteConfig.url}${siteConfig.cvPath})`);
    expect(text).not.toMatch(/\]\(\//);
  });
});
