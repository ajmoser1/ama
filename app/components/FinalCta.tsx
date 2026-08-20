import { BookCallButton } from "./BookCallButton";
import { Container } from "./ui";

export function FinalCta() {
  return (
    <section className="bg-navy py-20 text-cream md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-cream sm:text-4xl md:text-5xl md:leading-tight">
            Ready to help your student achieve more?
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-cream/85">
            First session 50% off. No commitment required.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <BookCallButton variant="onNavy" />
            <a
              href="#interest"
              className="font-sans text-lg font-medium tracking-wide text-cream/80 underline decoration-gold decoration-1 underline-offset-4 transition hover:text-cream"
            >
              Prefer to start with a form?
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
