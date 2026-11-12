import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "platewise",
    title: "PlateWise",
    description:
      "A meal-planning app built around Canadian grocery flyer deals, so a weekly plan can follow what is actually on sale. Spans three services: an Expo client, a Cloudflare Workers API backed by D1, and a TypeScript collector for exploring flyer offers by postal code. The published app currently runs on sample offers.",
    technologies: [
      "Expo",
      "React Native",
      "TypeScript",
      "Supabase",
      "Cloudflare Workers",
      "Cloudflare D1",
    ],
    githubUrl: "https://github.com/alanmanyin-codespace/app-platewise",
    liveDemoUrl: "https://app-platewise.vercel.app/",
    thumbnail: {
      src: "https://image.thum.io/get/width/1200/crop/675/https://app-platewise.vercel.app/",
      alt: "The PlateWise home page, showing the weekly meal planner and recipe browser",
    },
    featured: true,
    isPlaceholder: false,
  },
  {
    slug: "poetry-of-ear",
    title: "The Poetry of Ear",
    description:
      "A bilingual site for a professional ear-care studio in Kwun Tong, Hong Kong. Localised English and Chinese routes with next-intl, live Google review summaries pulled in on the page, and booking handed straight to WhatsApp and Klook rather than a form the studio would have to monitor.",
    technologies: [
      "Next.js",
      "TypeScript",
      "next-intl",
      "Tailwind CSS",
      "Google Reviews",
    ],
    liveDemoUrl: "https://poetry-of-ear.vercel.app/",
    thumbnail: {
      src: "https://image.thum.io/get/width/1200/crop/675/https://poetry-of-ear.vercel.app/",
      alt: "The Poetry of Ear home page, showing the studio name over a treatment photograph",
    },
    featured: true,
    isPlaceholder: false,
  },
  {
    slug: "solomon-ai-studio",
    title: "Solomon AI Studio",
    description:
      "A Traditional Chinese showcase for AI-assisted Hong Kong comic art, built around one continuing story. Presents three kinds of work in one gallery: single illustrations, a chapter-by-chapter serialised comic, and theme-song music videos.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Embla Carousel",
      "Tailwind CSS",
    ],
    liveDemoUrl: "https://solomon-ai-studio.vercel.app/",
    thumbnail: {
      src: "https://image.thum.io/get/width/1200/crop/675/https://solomon-ai-studio.vercel.app/",
      alt: "The Solomon AI Studio home page, showing AI-illustrated comic artwork",
    },
    featured: true,
    isPlaceholder: false,
  },
];
