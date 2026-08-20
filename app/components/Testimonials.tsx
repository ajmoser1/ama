import { GoogleReviewsWidget } from "./GoogleReviewsWidget";
import { Container, SectionHeading } from "./ui";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 bg-parchment pb-20 md:pb-28"
      aria-labelledby="testimonials-heading"
    >
      <SectionHeading
        id="testimonials-heading"
        eyebrow="From families"
        title="What parents say"
      />

      <Container className="pt-10">
        <GoogleReviewsWidget />
      </Container>
    </section>
  );
}
