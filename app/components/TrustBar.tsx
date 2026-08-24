import { Container } from "./ui";

const signals = [
  "Higher grades in the classes that matter",
  "Stronger ACT & SAT scores",
  "Hand-selected tutors your student connects with",
];

export function TrustBar() {
  return (
    <section
      className="border-y border-gold/50 bg-parchment"
      aria-label="Outcomes"
    >
      <Container className="grid gap-8 py-10 sm:grid-cols-3 sm:gap-6 sm:py-12">
        {signals.map((signal, index) => (
          <p
            key={signal}
            className={`flex items-center justify-center text-center font-sans text-sm font-medium tracking-wide text-navy sm:text-[0.95rem] ${
              index > 0
                ? "border-t border-gold/40 pt-8 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-6"
                : ""
            }`}
          >
            {signal}
          </p>
        ))}
      </Container>
    </section>
  );
}
