import { Container, SectionHeading } from "./ui";

const commitments = [
  {
    title: "Tutor quality",
    body: "Every tutor is personally interviewed before working with your student. No one gets on our roster from a form alone.",
  },
  {
    title: "Honest expectations",
    body: "We will not over-promise results we cannot stand behind. We do stand behind our matches, and rematch at no cost if the fit's not right.",
  },
  {
    title: "Progress that counts",
    body: "We are focused on getting grades and test scores to move, not just logging homework help hours.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 pb-20 md:pb-28">
      <SectionHeading eyebrow="From the founder" title="Why I built Achieve More">
        My name is Alex Moser. I tutored at Mathnasium for a year, spent another year as a private tutor,
        and then started Achieve More Academics because I kept seeing the same
        problem.
      </SectionHeading>

      <Container className="pt-8">
        <div className="max-w-3xl space-y-2 text-base leading-relaxed text-navy/80 sm:text-lg">
          <p>
            Tutoring centers are too rigid. Every student got the same
            system, even when it wasn't how they learn best. When I taught
            someone in a way unique to them, the way
            they actually think, the results were better.
          </p>
          <p>
            That's what I built Achieve More around: personally matched tutors
            who took your student's class or test recently, and teach
            in a way that actually clicks.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {commitments.map((item) => (
            <article
              key={item.title}
              className="border-t-2 border-gold bg-parchment/60 px-7 py-8"
            >
              <h3 className="font-serif text-xl font-semibold text-navy">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-navy/75">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
