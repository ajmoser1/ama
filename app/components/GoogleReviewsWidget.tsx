"use client";

import { useEffect } from "react";
import { ELFSIGHT_REVIEWS_WIDGET_ID, getElfsightWidgetClass } from "@/lib/reviews";

export function GoogleReviewsWidget() {
  const widgetClass = getElfsightWidgetClass(ELFSIGHT_REVIEWS_WIDGET_ID);

  useEffect(() => {
    if (!widgetClass) return;

    const existing = document.getElementById("elfsight-platform-js");
    if (existing) return;

    const script = document.createElement("script");
    script.id = "elfsight-platform-js";
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, [widgetClass]);

  if (!widgetClass) {
    return (
      <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-navy/70">
        Google reviews widget not configured yet. Add your Elfsight widget ID to{" "}
        <code className="text-sm">NEXT_PUBLIC_ELFSIGHT_REVIEWS_WIDGET_ID</code>.
      </p>
    );
  }

  return (
    <div
      className={widgetClass}
      data-elfsight-app-lazy
      aria-label="Google reviews"
    />
  );
}
