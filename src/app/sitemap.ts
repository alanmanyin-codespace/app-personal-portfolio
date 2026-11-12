import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { getPublishedCaseStudies } from "@/lib/project-publication";

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];

/**
 * Every public page, listed explicitly so pages outside the header menu (like
 * Experience) are still found. Anchors such as /#stack are not separate pages
 * and are left out; /about only redirects, so it's left out too.
 */
const pages: {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
}[] = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/projects", changeFrequency: "monthly", priority: 0.8 },
  { path: "/experience", changeFrequency: "yearly", priority: 0.7 },
  { path: "/cv", changeFrequency: "yearly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const absolute = (path: string) => new URL(path, siteConfig.url).toString();

  return [
    ...pages.map((page) => ({
      url: absolute(page.path),
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    // Project detail pages, once a case study is published.
    ...getPublishedCaseStudies().map((project) => ({
      url: absolute(`/projects/${project.slug}`),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
