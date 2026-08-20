import { SITE_NAME } from "@/lib/site";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-gold/25 bg-navy text-cream">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-serif text-xl font-semibold">{SITE_NAME}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-cream/70">
            Student-led tutoring for higher grades and test scores.
            Contact me at <a href="mailto:alexjamoser@gmail.com" className="text-cream underline">alexjamoser@gmail.com</a> or <a href="tel:8472576322" className="text-cream underline">847-257-6322</a>
          </p>
        </div>
        <p className="text-xs tracking-wide text-cream/55">
          © {new Date().getFullYear()} {SITE_NAME}
        </p>
      </Container>
    </footer>
  );
}
