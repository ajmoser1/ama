"use client";

import { useEffect, useState } from "react";
import { BOOKING_URL, getCalLink } from "@/lib/site";

type Variant = "primary" | "onNavy" | "header";

const variantClass: Record<Variant, string> = {
  primary:
    "bg-navy text-cream hover:bg-navy-soft px-9 py-4 text-base",
  onNavy:
    "bg-cream text-navy hover:bg-parchment px-10 py-6 text-lg",
  header:
    "bg-navy text-cream hover:bg-navy-soft px-5 py-2.5 text-xs",
};

export function BookCallButton({
  variant = "primary",
  className = "",
  children = "Book an Intro Call",
}: {
  variant?: Variant;
  className?: string;
  children?: React.ReactNode;
}) {
  const [missing, setMissing] = useState(false);
  const calLink = getCalLink(BOOKING_URL);

  useEffect(() => {
    if (!calLink) return;

    const existing = document.getElementById("cal-embed-js");
    if (existing) return;

    const bootstrap = document.createElement("script");
    bootstrap.id = "cal-embed-js";
    bootstrap.innerHTML = `
      (function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", { origin: "https://cal.com" });
    `;
    document.head.appendChild(bootstrap);
  }, [calLink]);

  function handleClick() {
    if (!BOOKING_URL) {
      setMissing(true);
    }
  }

  return (
    <span
      className={`inline-flex flex-col items-start gap-2 ${
        className.includes("w-full") ? "w-full" : ""
      }`}
    >
      <a
        href={BOOKING_URL || "#"}
        data-cal-link={calLink || undefined}
        data-cal-config='{"layout":"month_view"}'
        onClick={handleClick}
        className={`inline-flex items-center justify-center rounded-sm font-sans font-semibold tracking-wide no-underline transition ${variantClass[variant]} ${className}`}
      >
        {children}
      </a>
      {missing ? (
        <span
          className={`max-w-xs text-xs leading-relaxed ${
            variant === "onNavy" ? "text-cream/70" : "text-gold-deep"
          }`}
        >
          Booking link coming soon — the intro call will open here.
        </span>
      ) : null}
    </span>
  );
}
