"use client";

import { useEffect } from "react";
import { getTallyEmbedUrl, TALLY_URL } from "@/lib/site";
import { Container, SectionHeading } from "./ui";

function loadTallyEmbeds() {
  if (window.Tally) {
    window.Tally.loadEmbeds();
    return;
  }

  document.querySelectorAll<HTMLIFrameElement>("iframe[data-tally-src]:not([src])").forEach((iframe) => {
    iframe.src = iframe.dataset.tallySrc ?? "";
  });
}

export function InterestForm() {
  const embedUrl = getTallyEmbedUrl(TALLY_URL);

  useEffect(() => {
    if (!embedUrl) return;

    const existing = document.getElementById("tally-embed-js") as HTMLScriptElement | null;
    if (existing) {
      loadTallyEmbeds();
      return;
    }

    const script = document.createElement("script");
    script.id = "tally-embed-js";
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    script.onload = loadTallyEmbeds;
    script.onerror = loadTallyEmbeds;
    document.body.appendChild(script);
  }, [embedUrl]);

  return (
    <section id="interest" className="scroll-mt-24 bg-parchment pb-20 md:pb-28">
      <SectionHeading eyebrow="Start here" title="Tell us about your student">
        Sessions typically run $60-$80 per hour. First session half off.
      </SectionHeading>

      <Container className="pt-8">
        <div className="border border-navy/10 bg-cream p-4 sm:p-8">
          {embedUrl ? (
            <iframe
              data-tally-src={embedUrl}
              loading="lazy"
              width="100%"
              height="1000"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Tell us about your student"
              className="min-h-[1000px] w-full bg-transparent"
            />
          ) : (
            <p className="py-16 text-center text-base leading-relaxed text-navy/70">
              Interest form coming soon. Use{" "}
              <a href="#top" className="underline decoration-gold underline-offset-4">
                Book an Intro Call
              </a>{" "}
              if you would rather start with a conversation.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
