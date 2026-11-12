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
    siteConfig.whatsapp,
    ...siteConfig.socials,
  ];

  return (
    <>
      <PageHeader
        title="Let's talk!"
        description="Got a role, a project idea, or just want to say hi? Drop me a message on any of these and I'll get back to you soon."
      />
      <Container className="pt-8 pb-16 lg:pt-10 lg:pb-20">
        <div className="max-w-2xl">
          <ul
            aria-label="Contact channels"
            className="glass divide-y divide-azure-300/10 overflow-hidden rounded-2xl"
          >
            {channels.map((channel) => (
              <li
                key={channel.label}
                className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="font-semibold text-ink">{channel.label}</span>
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
      </Container>
    </>
  );
}
