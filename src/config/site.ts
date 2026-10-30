import type { SiteConfig } from "@/types/content";

export const siteConfig: SiteConfig = {
  name: "Alan Man",
  title: "Full-Stack Developer building enterprise web applications",
  description:
    "Full-stack developer with 5+ years of experience delivering enterprise web applications, APIs, cloud integrations, and data-driven systems.",
  url: "https://alan-man-personal-space.vercel.app",
  email: {
    label: "Email",
    href: "mailto:alanmanyin919@outlook.com",
    displayValue: "alanmanyin919@outlook.com",
    isPlaceholder: false,
  },
  phone: {
    label: "Phone",
    href: "tel:+18259645554",
    displayValue: "+1 825 964 5554",
    isPlaceholder: false,
  },
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/alanmanyin-codespace",
      displayValue: "alanmanyin-codespace",
      isPlaceholder: false,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/alanmanyin919",
      displayValue: "alanmanyin919",
      isPlaceholder: false,
    },
  ],
  cvPath:
    "https://drive.google.com/file/d/1qFZlWwy0xJ_SpRkwgbYlXWk92uu6ifen/view?usp=sharing",
  cvAvailable: true,
};
