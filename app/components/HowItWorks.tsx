import { Container, SectionHeading } from "./ui";

const steps = [
  {
    number: "01",
    title: "Share your goals",
    body: "Subject, grade, test prep or grade improvement.",
  },
  {
    number: "02",
    title: "We pair you with the right tutor",
    body: "A tutor who recently aced that class or test.",
  },
  {
    number: "03",
    title: "Your student starts improving",
    body: "Virtual, 1-on-1, on your schedule.",
  },
];

export function HowItWorks() {
  return (
    <section id="getting-started" className="scroll-mt-24 pb-20 md:pb-28">
      <SectionHeading align="center" title="Getting started">
        Three steps to help your student Achieve More.
      </SectionHeading>

      <Container className="pt-8">
        <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <li key={step.number} className="border-t border-gold/70 pt-6">
              <p className="font-serif text-2xl text-gold-deep">{step.number}</p>
              <h3 className="mt-3 font-serif text-2xl font-semibold text-navy">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-navy/75">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
