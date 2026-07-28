import type { Metadata } from "next";

import { ExperienceItem } from "@/components/content/experience-item";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/ui/page-header";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional software development experience and technical contributions by Alan Man.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Systems I have helped deliver"
        description="Selected professional engagements are presented by the products, responsibilities, and technologies involved rather than by employer name."
      />
      <Container className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl space-y-12">
          {experience.map((item) => (
            <ExperienceItem
              key={`${item.engagement}-${item.role}`}
              experience={item}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
