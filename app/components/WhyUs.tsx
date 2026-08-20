import { Container, SectionHeading } from "./ui";

const points = [
  {
    title: "Grades that reflect their potential",
    body: "Tutors who know the class as it's taught now, not a textbook from five years ago.",
  },
  {
    title: "Test scores that open doors",
    body: "Recent ACT/SAT scorers who know the test your student is taking inside and out.",
  },
  {
    title: "A tutor they really listen to",
    body: "Top students who areclose in age, easy to connect with.",
  },
  {
    title: "Matched to your student's exact need",
    body: "Personally paired for their class or test, not auto-assigned from a list.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-24 pb-20 md:pb-28">
      <SectionHeading title="Why families choose Achieve More">
        You want real progress for your kids, not an hour of homework help.
         We match your student with someone who can actually move the
        needle on grades and test scores. How? By learning with someone who's aced the same class or test.
      </SectionHeading>

      <Container className="pt-8">
        <div className="grid gap-8 sm:grid-cols-2">
          {points.map((point) => (
            <article
              key={point.title}
              className="border border-navy/10 bg-parchment/60 px-7 py-8"
            >
              <h3 className="font-serif text-2xl font-semibold text-navy">
                {point.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-navy/75">
                {point.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
