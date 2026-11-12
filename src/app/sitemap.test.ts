import { describe, expect, it } from "vitest";

import sitemap from "@/app/sitemap";
import { siteConfig } from "@/config/site";

describe("sitemap.xml", () => {
  const urls = sitemap().map((entry) => entry.url);

  it("lists every public page with absolute production URLs", () => {
    for (const path of ["/", "/projects", "/experience", "/cv", "/contact"]) {
      expect(urls).toContain(new URL(path, siteConfig.url).toString());
    }
  });

  it("leaves out in-page anchors and redirect-only pages", () => {
    expect(urls.some((url) => url.includes("#"))).toBe(false);
    expect(urls.some((url) => url.endsWith("/about"))).toBe(false);
  });

  it("has no duplicate entries", () => {
    expect(new Set(urls).size).toBe(urls.length);
  });
});
