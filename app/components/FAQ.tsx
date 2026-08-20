import { Container, SectionHeading } from "./ui";

const faqs = [
  {
    question: "How much does it cost?",
    answer:
      "Most 1-on-1 sessions are $60-$90/hr, depending on subject and level. Your first session is 50% off so you and your student can see if the tutor is the right fit before committing to more. Purchasing multiple sessions in advance results in a discount, depending on subject and schedule. We'll walk through options on the intro call.",
  },
  {
    question: "How do you pick your tutors?",
    answer:
      "Every tutor applies, gets interviewed by our founder, and is matched based on subject fit and recent experience with that exact class or test, so your student gets someone who can actually deliver results.",
  },
  {
    question: "What if it's not a good fit?",
    answer:
      "We'll rematch you with a different tutor for free. Your student's progress matters more than sticking with the wrong fit.",
  },
  {
    question: "Is virtual tutoring safe for my student?",
    answer:
      "Parents are welcome in every session, and we start with an intro session so you can meet the tutor first.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-parchment pb-20 md:pb-28">
      <SectionHeading eyebrow="Questions" title="FAQ" />

      <Container className="pt-8">
        <div className="mx-auto max-w-3xl border-t border-navy/15">
          {faqs.map((item) => (
            <details key={item.question} className="group border-b border-navy/15 py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-serif text-xl font-semibold text-navy sm:text-2xl">
                {item.question}
                <span
                  className="shrink-0 font-sans text-lg font-normal text-gold-deep transition group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-navy/75">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
