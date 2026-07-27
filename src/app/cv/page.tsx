import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHeader } from "@/components/ui/page-header";
import { PlaceholderNotice } from "@/components/ui/placeholder-notice";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "CV",
  description:
    "CV overview and future résumé download for software developer Alan Man.",
};

export default function CvPage() {
  return (
    <>
      <PageHeader
        eyebrow="Curriculum vitae"
        title="Experience and qualifications at a glance"
        description="The final CV will complement this website with a concise record of verified employment, education, and technical experience."
      />
      <Container className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold text-slate-950">
            CV document coming soon
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            A reviewed PDF will eventually be available at{" "}
            <code className="rounded bg-slate-100 px-1.5 py-1 text-sm text-slate-800">
              {siteConfig.cvPath}
            </code>
            .
          </p>
          <div className="mt-7">
            <ButtonLink
              href={siteConfig.cvPath}
              unavailable={!siteConfig.cvAvailable}
            >
              Download CV
            </ButtonLink>
          </div>
          <div className="mt-7">
            <PlaceholderNotice>
              No CV PDF has been added. Add the verified document before
              enabling this download.
            </PlaceholderNotice>
          </div>
        </div>
      </Container>
    </>
  );
}
