import { Container, Eyebrow, SectionHeading } from "./ui";

const offerings = [
  {
    title: "AP courses",
    body: "Perform well on the exam and in the classroom. Pacing, content, and strategy for this year's course.",
  },
  {
    title: "ACT & SAT prep",
    body: "Move the score. 1-on-1 prep with someone who recently scored well on the same test.",
    featured: true,
    label: "Admissions tests",
  },
  {
    title: "STEM courses",
    body: "Raise grades and feel confident in any STEM subject. Math, science, and more.",
  },
];

export function Subjects() {
  return (
    <section id="subjects" className="scroll-mt-24 bg-parchment pb-20 md:pb-28">
      <SectionHeading eyebrow="What we cover" title="Where we help your student succeed">
        Targeted support for the grades and admissions tests that matter most.
      </SectionHeading>

      <Container className="pt-8">
        <div className="grid gap-6 md:grid-cols-3 md:pt-6 md:pb-2">
          {offerings.map((item) => (
            <article
              key={item.title}
              className={
                item.featured
                  ? "relative flex flex-col border-t-2 border-gold bg-navy px-7 py-8 text-cream shadow-lg md:-translate-y-4"
                  : "flex flex-col border-t-2 border-gold bg-cream px-7 py-8"
              }
            >
              {item.featured && item.label ? (
                <Eyebrow className="text-gold">{item.label}</Eyebrow>
              ) : null}
              <h3
                className={`font-serif text-2xl font-semibold ${
                  item.featured ? "mt-3 text-cream" : "text-navy"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`mt-4 text-base leading-relaxed ${
                  item.featured ? "text-cream/85" : "text-navy/75"
                }`}
              >
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
