import { BookCallButton } from "./BookCallButton";
import { Container, Eyebrow, GoldRule } from "./ui";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>1-on-1 tutoring built for results</Eyebrow>
          <h1 className="mt-5 font-serif text-4xl font-semibold tracking-tight text-navy sm:text-5xl md:text-6xl md:leading-[1.1]">
            Help your student <br />
            <span className="underline decoration-gold decoration-2 underline-offset-[0.18em]">
              Achieve More.
            </span>
          </h1>
          
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-navy/80 sm:text-xl">
            Stronger grades in hard classes and higher ACT/SAT scores with a
            tutor who recently aced the same class or test.
          </p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <BookCallButton />
            <a
              href="#interest"
              className="font-sans text-xl font-medium tracking-wide text-navy underline decoration-gold decoration-1 underline-offset-4 transition hover:text-gold-deep"
            >
              Tell us about your student
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
