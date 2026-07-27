import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/ui/page-header";
import { PlaceholderNotice } from "@/components/ui/placeholder-notice";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact options for software development opportunities with Alan Man.",
};

export default function ContactPage() {
  const channels = [siteConfig.email, ...siteConfig.socials];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Start a conversation"
        description="For software development opportunities, project discussions, or professional networking, use one of the channels below once verified details are added."
      />
      <Container className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="text-2xl font-bold text-slate-950">
              Contact channels
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              This initial version intentionally contains no contact form or
              message-processing backend.
            </p>
          </div>
          <div>
            <ul
              aria-label="Contact channels"
              className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              {channels.map((channel) => (
                <li
                  key={channel.label}
                  className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="font-bold text-slate-950">
                    {channel.label}
                  </span>
                  {channel.href ? (
                    <Link
                      href={channel.href}
                      className="rounded-sm font-semibold text-blue-700 hover:text-blue-900"
                    >
                      {channel.displayValue}
                    </Link>
                  ) : (
                    <span className="text-sm text-slate-500">
                      {channel.displayValue}
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <PlaceholderNotice>
                Add verified contact details in <code>src/config/site.ts</code>{" "}
                before public launch.
              </PlaceholderNotice>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
