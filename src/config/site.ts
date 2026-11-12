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
  whatsapp: {
    label: "WhatsApp",
    href: "https://wa.me/85266940106",
    displayValue: "+852 6694 0106",
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
    "https://docs.google.com/document/d/1fsfFOsj-sbPBdbvaE4XIvoXVdEsfuq-RuR2Y6DocBRE/edit?usp=sharing",
  cvAvailable: true,
};
