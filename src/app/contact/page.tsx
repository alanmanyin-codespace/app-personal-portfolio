import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/ui/page-header";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact options for software development opportunities with Alan Man.",
};

export default function ContactPage() {
  const channels = [
    siteConfig.email,
    ...(siteConfig.phone ? [siteConfig.phone] : []),
    ...siteConfig.socials,
  ];

  return (
    <>
      <PageHeader
        title="Start a conversation"
        description="For software development opportunities, project discussions, or professional networking, use one of the channels below."
      />
      <Container className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="text-2xl font-bold text-ink">Contact channels</h2>
            <p className="mt-4 leading-7 text-ink-muted">
              Email or call me about software development opportunities. You can
              also review my work on GitHub or connect with me on LinkedIn.
            </p>
          </div>
          <div>
            <ul
              aria-label="Contact channels"
              className="glass divide-y divide-azure-300/10 overflow-hidden rounded-2xl"
            >
              {channels.map((channel) => (
                <li
                  key={channel.label}
                  className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="font-semibold text-ink">
                    {channel.label}
                  </span>
                  {channel.href ? (
                    <Link
                      href={channel.href}
                      className="rounded-sm font-mono text-sm text-azure-200 transition-colors hover:text-cyan-300"
                    >
                      {channel.displayValue}
                    </Link>
                  ) : (
                    <span className="font-mono text-sm text-ink-faint">
                      {channel.displayValue}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
