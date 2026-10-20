import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { navigation } from "@/data/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  return navigation.map((item) => ({
    url: new URL(item.href, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: item.href === "/" ? "monthly" : "yearly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
