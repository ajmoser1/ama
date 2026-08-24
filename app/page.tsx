import { About } from "./components/About";
import { FAQ } from "./components/FAQ";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { InterestForm } from "./components/InterestForm";
import { Subjects } from "./components/Subjects";
import { Testimonials } from "./components/Testimonials";
import { TrustBar } from "./components/TrustBar";
import { WhyUs } from "./components/WhyUs";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-navy focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <TrustBar />
        <WhyUs />
        <Subjects />
        <About />
        <Testimonials />
        <InterestForm />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
