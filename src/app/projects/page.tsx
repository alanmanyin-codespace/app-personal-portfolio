import type { Metadata } from "next";

import { ProjectCard } from "@/components/content/project-card";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/ui/page-header";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected software development projects and case studies by Alan Man.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Projects and demos"
        description="A mix of live projects and demos I have designed, built, and deployed, each one open for you to try."
      />
      <Container className="pt-8 pb-16 lg:pt-10 lg:pb-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className="rise-fast"
              // One after another, quickly, as the header settles.
              style={{ animationDelay: `${300 + index * 120}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
