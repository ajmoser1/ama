import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["500", "600", "700"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
});

const description =
  "Help your student achieve more — stronger grades in hard classes and higher ACT/SAT scores with 1-on-1 tutoring from someone who recently aced the same class or test.";

export const metadata: Metadata = {
  title: {
    default: "Achieve More Academics | 1-on-1 Virtual Tutoring",
    template: "%s | Achieve More Academics",
  },
  description,
  openGraph: {
    title: "Achieve More Academics",
    description,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${lora.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-cream font-sans text-navy">{children}</body>
    </html>
  );
}
