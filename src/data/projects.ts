import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "web-application-placeholder",
    title: "Web Application Case Study",
    description:
      "Placeholder for a production web application, its user problem, and the measurable outcome delivered.",
    technologies: ["Next.js", "TypeScript", "Cloud Platform"],
    featured: true,
    isPlaceholder: true,
  },
  {
    slug: "business-system-placeholder",
    title: "Internal Business System",
    description:
      "Placeholder for an internal tool that improved a workflow, increased visibility, or reduced manual effort.",
    technologies: ["React", "API Integration", "SQL"],
    featured: true,
    isPlaceholder: true,
  },
  {
    slug: "api-platform-placeholder",
    title: "API and Cloud Solution",
    description:
      "Placeholder for an API or cloud project focused on reliability, maintainability, and clear system boundaries.",
    technologies: ["REST API", "Node.js", "Cloud Services"],
    featured: true,
    isPlaceholder: true,
  },
];
