import Image from "next/image";
import { Container, SectionHeading } from "./ui";

const commitments = [
  {
    title: "Tutor quality",
    body: "Every tutor is personally interviewed before working with your student. No one gets on our roster from a form alone.",
  },
  {
    title: "Honest expectations",
    body: "We will not over-promise results we cannot stand behind. We do stand behind our matches, and rematch at no cost if the fit is not right.",
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
       
      </SectionHeading>

      <Container className="pt-8">
        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_220px] md:gap-12 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="max-w-xl space-y-5 text-navy text-lg leading-relaxed text-navy/80 sm:text-lg">
            <p className="font-medium text-navy text-lg">
              
          <br />
          <br />
              After two years of tutoring across Mathnasium and for a private tutoring company, I saw the same problems.
              Tutoring centers are too rigid. Every student got the same
              system, even when it wasn't how they learned best. When I taught
              someone in a way unique to them, the results were better.
            
            <br />
            <br />
            <br />
              That is what I built Achieve More around: personally matched
              tutors who took your student's class or test recently, and
              teach in a way that actually clicks. Every plan and session is personalized to your student and their goals.
            </p>
          </div>

          <figure className="mx-auto -translate-x-40 w-full max-w-[260px] md:mx-0 md:max-w-none">
            <div className="overflow-hidden border border-gold/60 bg-parchment">
              <Image
                src="/founder.png"
                alt="Alex Moser, founder of Achieve More Academics"
                width={260}
                height={320}
                className="aspect-[10/14] w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center font-serif text-lg font-semibold text-navy md:text-left">
              Alex Moser
            </figcaption>
            <p className="mt-1 text-center text-sm text-navy/65 md:text-left">
              Founder, Achieve More Academics
              Carnegie Mellon University, Electrical & Computer Engineering
            </p>
          </figure>
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
