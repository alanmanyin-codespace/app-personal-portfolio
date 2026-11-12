import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Project thumbnails are rendered on demand by thum.io and cached at its
    // edge, so a redesign of a linked site shows up here without a redeploy.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.thum.io",
        pathname: "/get/**",
      },
    ],
    // The optimizer cache cannot be invalidated, so keep the TTL short enough
    // that a refreshed screenshot reaches the page within a day.
    minimumCacheTTL: 86400,
  },
  // The standard file is /llms.txt; catch the common singular misspelling.
  async redirects() {
    return [{ source: "/llm.txt", destination: "/llms.txt", permanent: true }];
  },
};

export default nextConfig;
