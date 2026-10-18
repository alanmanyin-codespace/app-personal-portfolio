import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectCaseStudy } from "@/components/content/project-case-study";
import {
  getPublishedCaseStudies,
  getPublishedCaseStudyBySlug,
} from "@/lib/project-publication";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

// No draft or placeholder slug can be generated or opened.
export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedCaseStudies().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPublishedCaseStudyBySlug(slug);

  if (!project) {
    notFound();
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getPublishedCaseStudyBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectCaseStudy project={project} />;
}
