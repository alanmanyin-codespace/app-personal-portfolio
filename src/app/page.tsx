import type { Metadata } from "next";
import Image from "next/image";

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
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
            <div className="max-w-4xl">
              <p className="text-sm font-bold tracking-widest text-blue-700 uppercase">
                Full-Stack Developer
              </p>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl sm:leading-[1.08]">
                Building enterprise software from interface to infrastructure.
              </h1>
              <p className="mt-6 max-w-3xl text-xl font-semibold text-slate-700">
                {profile.title}
              </p>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                {profile.summary}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href="/projects">View Projects</ButtonLink>
                <ButtonLink href="/experience" variant="secondary">
                  Explore Experience
                </ButtonLink>
                <ButtonLink href="/cv" variant="secondary">
                  Download CV
                </ButtonLink>
              </div>
            </div>
            <div className="mx-auto w-full max-w-72 lg:max-w-none">
              <div className="rounded-[2rem] border border-blue-100 bg-blue-50 p-3 shadow-sm">
                <Image
                  src="/images/alan-man-profile.jpg"
                  alt="Portrait of Alan Man"
                  width={560}
                  height={560}
                  priority
                  className="aspect-square h-auto w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="A practical, full-product perspective"
            description="Experience across frontend applications, backend services, cloud integrations, data layers, and production delivery."
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
              I am open to software development opportunities and professional
              conversations about building dependable web applications.
            </p>
          </div>
          <ButtonLink href="/contact">Contact Alan</ButtonLink>
        </Container>
      </section>
    </>
  );
}
