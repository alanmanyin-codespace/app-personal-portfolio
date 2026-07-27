import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-sm font-bold tracking-widest text-blue-700 uppercase">
        404
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
        Page not found
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-600">
        The page may have moved, or it may be part of a future portfolio update.
      </p>
      <div className="mt-8">
        <ButtonLink href="/">Return home</ButtonLink>
      </div>
    </Container>
  );
}
