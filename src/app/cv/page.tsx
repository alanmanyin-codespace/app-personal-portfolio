import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHeader } from "@/components/ui/page-header";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "CV",
  description: "View Alan Man's full software development résumé.",
};

export default function CvPage() {
  return (
    <>
      <PageHeader
        title="The complete professional record"
        description="View the current résumé for detailed employment history, education, technical skills, and contact information."
      />
      <Container className="py-16 lg:py-20">
        <div className="glass mx-auto max-w-3xl rounded-2xl p-7 sm:p-10">
          <h2 className="text-2xl font-bold text-ink">
            Alan Man — Full-Stack Developer
          </h2>
          <p className="mt-4 text-lg leading-8 text-ink-muted">
            The PDF contains my complete employment record and the fuller
            version of the professional experience summarized on this website.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href={siteConfig.cvPath} target="_blank">
              View CV
            </ButtonLink>
          </div>
        </div>
      </Container>
    </>
  );
}
