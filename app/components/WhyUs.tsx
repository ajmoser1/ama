import { Container, SectionHeading } from "./ui";

const points = [
  {
    title: "Grades that reflect their potential",
    body: "Hand-selected tutors who know the class as it is taught now, not from a textbook five years ago.",
  },
  {
    title: "Test scores that open doors",
    body: "Tutors who recently scored well on the same ACT or SAT your student is taking, not generic test prep.",
  },
  {
    title: "A tutor they will actually listen to",
    body: "Top-performing students, close in age, personally interviewed before they work with your family.",
  },
  {
    title: "Matched to your student's exact need",
    body: "Personally paired for their class or test, not auto-assigned from a list.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-24 pb-20 md:pb-28">
      <SectionHeading
        title={
          <>
            The <span className="italic">Achieve More</span> Difference
          </>
        }
      >
        You want real progress for your kids, not an hour of homework help. We
        match your student with someone who can actually move the needle on
        grades and test scores, with a tutor who recently aced the same class or
        test.
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
