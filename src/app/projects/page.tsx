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
        title="Selected software development work"
        description="Independent projects I have designed, built, and deployed, each with a live demonstration you can open."
      />
      <Container className="py-16 lg:py-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </>
  );
}
