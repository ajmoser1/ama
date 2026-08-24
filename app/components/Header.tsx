"use client";

import { useState } from "react";
import { navLinks } from "@/lib/site";
import { BookCallButton } from "./BookCallButton";
import { Logo } from "./Logo";

const interestLinkClass =
  "font-sans text-sm font-medium tracking-wide text-navy underline decoration-gold decoration-1 underline-offset-4 transition hover:text-gold-deep whitespace-nowrap";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gold/40 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-3 lg:gap-4 lg:px-8">
        <Logo compact />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm tracking-wide text-navy/80 transition hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <a href="#interest" className={interestLinkClass}>
            Tell us about your student
          </a>
          <BookCallButton variant="header">Book an intro call</BookCallButton>
        </div>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <BookCallButton variant="header" className="px-3 py-2 text-[0.7rem]">
            Book call
          </BookCallButton>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-navy/15 text-navy"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="flex flex-col gap-1.5" aria-hidden="true">
              <span className={`block h-px w-5 bg-navy transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`block h-px w-5 bg-navy transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-px w-5 bg-navy transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-gold/30 bg-cream px-6 py-5 lg:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-base text-navy"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-4 border-t border-gold/30 pt-5">
              <BookCallButton variant="header" className="w-full">
                Book an intro call
              </BookCallButton>
              <a
                href="#interest"
                className={`${interestLinkClass} text-base`}
                onClick={() => setOpen(false)}
              >
                Tell us about your student
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
