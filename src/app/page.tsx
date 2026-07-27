import type { Metadata } from "next";

import { ProjectCard } from "@/components/content/project-card";
import { SkillList } from "@/components/content/skill-list";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Portfolio home for Alan Man, a software developer specializing in web applications.",
};

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <section className="border-b border-slate-200 bg-white py-20 sm:py-28">
        <Container>
          <div className="max-w-4xl">
            <p className="text-sm font-bold tracking-widest text-blue-700 uppercase">
              Software Developer
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl sm:leading-[1.08]">
              Building useful, reliable web applications for modern teams.
            </h1>
            <p className="mt-6 max-w-3xl text-xl font-semibold text-slate-700">
              {profile.title}
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              {profile.summary}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/projects">View Projects</ButtonLink>
              <ButtonLink href="/cv" variant="secondary">
                Download CV
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="A practical, full-product perspective"
            description="A concise overview of the technical areas this portfolio will demonstrate as verified work samples are added."
          />
          <div className="mt-10">
            <SkillList groups={skills} />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="Featured projects"
              description="The cards below define the structure for future case studies. All current examples are placeholders."
            />
            <ButtonLink href="/projects" variant="secondary">
              View all projects
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-blue-200 bg-blue-50 py-16 sm:py-20">
        <Container className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              Interested in working together?
            </h2>
            <p className="mt-3 text-lg leading-8 text-slate-700">
              Visit the contact page to see the channels that will be available
              once the portfolio details are finalized.
            </p>
          </div>
          <ButtonLink href="/contact">Contact Alan</ButtonLink>
        </Container>
      </section>
    </>
  );
}
