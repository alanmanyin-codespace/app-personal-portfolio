import { siteConfig } from "@/config/site";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { getPublishedCaseStudies } from "@/lib/project-publication";

const absolute = (path: string) => new URL(path, siteConfig.url).toString();

export function buildLlmsTxt(): string {
  const caseStudySlugs = new Set(
    getPublishedCaseStudies().map((project) => project.slug),
  );
  const publishedProjects = projects.filter(
    (project) => !project.isPlaceholder,
  );
  const contacts = [siteConfig.email, ...siteConfig.socials].filter(
    (channel) => !channel.isPlaceholder && channel.href,
  );

  const lines: string[] = [
    `# ${siteConfig.name}`,
    "",
    `> ${profile.title}. ${profile.summary}`,
    "",
    ...profile.background.flatMap((paragraph) => [paragraph, ""]),
    profile.careerFocus,
    "",
    "## Pages",
    "",
    `- [Home](${absolute("/")}): Introduction, career journey, skills, and AI tools`,
    `- [Projects](${absolute("/projects")}): Live projects and demos`,
    `- [Experience](${absolute("/experience")}): Professional engagements, described by product rather than employer name`,
    `- [CV](${absolute("/cv")}): Full résumé with work history, education, and skills`,
    `- [Contact](${absolute("/contact")}): Ways to get in touch`,
    "",
    "## Projects",
    "",
    ...publishedProjects.map((project) => {
      const url = caseStudySlugs.has(project.slug)
        ? absolute(`/projects/${project.slug}`)
        : project.liveDemoUrl;
      const source = project.githubUrl ? ` Source: ${project.githubUrl}` : "";
      return `- [${project.title}](${url}): ${project.description} Built with ${project.technologies.join(", ")}.${source}`;
    }),
    "",
    "## Experience",
    "",
    ...experience
      .filter((item) => !item.isPlaceholder)
      .map(
        (item) =>
          `- ${item.role}, ${item.engagement} (${item.period}): ${item.summary} Technologies: ${item.technologies.join(", ")}.`,
      ),
    "",
    "## Skills",
    "",
    ...skills.map((group) => `- ${group.name}: ${group.skills.join(", ")}`),
    "",
    "## Education",
    "",
    ...education.map(
      (item) => `- ${item.qualification}, ${item.institution} (${item.period})`,
    ),
    "",
    "## Contact",
    "",
    ...contacts.map(
      (channel) =>
        `- [${channel.label}](${channel.href}): ${channel.displayValue}`,
    ),
    "",
    "## Optional",
    "",
  ];

  if (siteConfig.cvAvailable) {
    lines.push(
      `- [Resume](${absolute(siteConfig.cvPath)}): Full resume as a shared Google Doc`,
    );
  }
  lines.push(`- [Sitemap](${absolute("/sitemap.xml")})`);

  return `${lines.join("\n")}\n`;
}
