import { Container } from "@/components/layout/container";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <Container>
        {eyebrow ? (
          <p className="text-sm font-bold tracking-widest text-blue-700 uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          {description}
        </p>
      </Container>
    </section>
  );
}
