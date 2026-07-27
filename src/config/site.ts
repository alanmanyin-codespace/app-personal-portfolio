import type { SiteConfig } from "@/types/content";

export const siteConfig: SiteConfig = {
  name: "Alan Man",
  title: "Software Developer specializing in Web Applications",
  description:
    "Software developer experienced in building modern web applications, internal business systems, APIs, and cloud-based solutions.",
  url: "https://personal-space-vert.vercel.app",
  email: {
    label: "Email",
    displayValue: "Email address to be added",
    isPlaceholder: true,
  },
  socials: [
    {
      label: "GitHub",
      displayValue: "GitHub profile to be added",
      isPlaceholder: true,
    },
    {
      label: "LinkedIn",
      displayValue: "LinkedIn profile to be added",
      isPlaceholder: true,
    },
  ],
  cvPath: "/cv/alan-man-cv.pdf",
  cvAvailable: false,
};
