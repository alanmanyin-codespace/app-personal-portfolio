import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { CvWindowButton } from "@/components/ui/cv-window-button";
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
        title="My résumé"
        description="My full work history, education, and technical skills in one up-to-date document."
      />
      <Container className="pt-8 pb-16 lg:pt-10 lg:pb-20">
        <div className="glass mx-auto max-w-3xl rounded-2xl p-7 sm:p-10">
          <h2 className="text-2xl font-bold text-ink">
            Alan Man — Full-Stack Developer
          </h2>
          <p className="mt-4 text-lg leading-8 text-ink-muted">
            My résumé contains my complete employment record and the fuller
            version of the professional experience summarized on this website.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <CvWindowButton href={siteConfig.cvPath}>View CV</CvWindowButton>
          </div>
        </div>
      </Container>
    </>
  );
}
