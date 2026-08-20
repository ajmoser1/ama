export const SITE_NAME = "Achieve More Academics";

export const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL ??
  process.env.NEXT_PUBLIC_CALENDLY_URL ??
  "https://cal.com/alexmoser/15min";
export const TALLY_URL =
  process.env.NEXT_PUBLIC_TALLY_URL ?? "https://tally.so/r/A7RNOW";

export function getCalLink(url: string): string {
  const match = url.match(/cal\.com\/([^?#]+)/i);
  return match?.[1] ?? "";
}

export function getTallyEmbedUrl(url: string): string {
  if (!url) return "";

  const idMatch = url.match(/tally\.so\/(?:r|embed|forms)\/([A-Za-z0-9]+)/i);
  const id = idMatch?.[1];

  if (id) {
    return `https://tally.so/embed/${id}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;
  }

  if (url.includes("/embed/")) return url;
  return url;
}

export const navLinks = [
  { href: "#getting-started", label: "Getting started" },
  { href: "#why-us", label: "Why us" },
  { href: "#subjects", label: "What we cover" },
  { href: "#faq", label: "FAQ" },
] as const;
