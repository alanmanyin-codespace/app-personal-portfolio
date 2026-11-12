import { buildLlmsTxt } from "@/lib/llms-txt";

// Rendered once at build time, like sitemap.xml and robots.txt.
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
