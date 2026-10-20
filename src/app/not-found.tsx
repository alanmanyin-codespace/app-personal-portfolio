import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="font-mono text-sm tracking-widest text-azure-300">404</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink">
        Page not found
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-ink-muted">
        The page may have moved, or it may be part of a future portfolio update.
      </p>
      <div className="mt-8">
        <ButtonLink href="/">Return home</ButtonLink>
      </div>
    </Container>
  );
}
