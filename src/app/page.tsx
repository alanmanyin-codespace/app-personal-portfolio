import type { Metadata } from "next";
import Image from "next/image";

import { HomeExperienceList } from "@/components/content/home-experience-list";
import { HomeSkillGroups } from "@/components/content/home-skill-groups";
import { ProjectCard } from "@/components/content/project-card";
import { SkillDepthPanel } from "@/components/content/skill-depth-panel";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRight, Download, Mail } from "@/components/visual/icons";
import { siteConfig } from "@/config/site";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

export const metadata: Metadata = {
  title: { absolute: "Alan Man's Portfolio" },
  description:
    "Portfolio home for Alan Man, a full-stack developer building enterprise web applications across frontend, backend, cloud, and data.",
};

const homeSkillGroups = [
  ...skills.map((group) =>
    group.name === "Cloud, data, and delivery"
      ? { ...group, name: "Cloud, data, identity, and delivery" }
      : group,
  ),
  {
    name: "AI-assisted development tools",
    skills: ["Claude Code", "ChatGPT", "Gemini", "GitHub Copilot"],
  },
];

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.55fr)_minmax(18rem,0.7fr)] lg:items-start lg:gap-14">
            <div>
              <h1 className="max-w-4xl text-5xl font-bold tracking-[-0.04em] text-ink text-balance sm:text-6xl lg:text-7xl">
                I build <span className="text-azure-400">enterprise systems</span>{" "}
                end to end.
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-ink-muted">
                {profile.title}. Based in Calgary, Alberta.
              </p>

              <div className="mt-9">
                <HomeSkillGroups groups={homeSkillGroups} />
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href="/experience">
                  View experience
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </ButtonLink>
                <ButtonLink
                  href={siteConfig.cvPath}
                  target="_blank"
                  variant="secondary"
                >
                  <Download className="h-4 w-4" />
                  View CV
                </ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  <Mail className="h-4 w-4" />
                  Contact
                </ButtonLink>
              </div>
            </div>

            <div className="mx-auto w-full max-w-md lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-2xl border border-azure-300/35 bg-night-900/75 p-2 shadow-[0_24px_60px_-32px_rgba(0,0,0,0.85)]">
                <Image
                  src="/images/alan-man-profile.jpg"
                  alt={`Portrait of ${siteConfig.name}`}
                  width={720}
                  height={900}
                  priority
                  className="aspect-[4/5] h-auto w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            title="Work experience"
            description="Detailed contributions across enterprise case management, digital insurance, identity, data, cloud, and production delivery."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.65fr)_minmax(19rem,0.75fr)] lg:items-start">
            <HomeExperienceList items={experience} />
            <SkillDepthPanel />
          </div>
        </Container>
      </section>

      {/* Featured projects */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              title="Featured projects"
              description="The cards below define the structure for future case studies. All current examples are placeholders."
            />
            <ButtonLink href="/projects" variant="secondary">
              View all projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-12">
            <span
              aria-hidden="true"
              className="absolute -top-24 -right-16 h-64 w-64 rounded-full opacity-60 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(46,107,255,0.4) 0%, rgba(11,16,38,0) 70%)",
              }}
            />
            <div className="relative flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-ink text-balance">
                  Interested in working together?
                </h2>
                <p className="mt-3 text-lg leading-8 text-ink-muted">
                  I am open to full-stack opportunities and conversations about
                  building dependable enterprise web applications.
                </p>
              </div>
              <ButtonLink href={siteConfig.email.href ?? "/contact"}>
                <Mail className="h-4 w-4" />
                Email {siteConfig.name.split(" ")[0]}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
