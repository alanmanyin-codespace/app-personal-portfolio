export interface SocialLink {
  label: string;
  href?: string;
  displayValue: string;
  isPlaceholder: boolean;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  email: SocialLink;
  phone?: SocialLink;
  socials: SocialLink[];
  cvPath: string;
  cvAvailable: boolean;
}

export interface Profile {
  name: string;
  title: string;
  summary: string;
  background: string[];
  careerFocus: string;
  introduction: string;
  technicalStrengths: string[];
}

export interface NavigationItem {
  label: string;
  href: string;
}

export type ProjectClassification = "professional-case-study" | "independent-demo";

export interface ProjectCaseStudy {
  role: string;
  challenge: string;
  decisions: string[];
  outcomes: string[];
  constraints?: string[];
  visual?: {
    src: string;
    alt: string;
  };
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  featured: boolean;
  isPlaceholder: boolean;
  classification?: ProjectClassification;
  caseStudy?: ProjectCaseStudy;
}

export interface Experience {
  engagement: string;
  role: string;
  period: string;
  summary: string;
  achievements: string[];
  technologies: string[];
  isPlaceholder: boolean;
}

export interface Education {
  qualification: string;
  institution: string;
  period: string;
}

export interface SkillGroup {
  name: string;
  skills: string[];
}
