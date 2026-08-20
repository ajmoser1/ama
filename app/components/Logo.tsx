import Image from "next/image";
import { SITE_NAME } from "@/lib/site";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="group flex items-center gap-3 no-underline">
      <Image
        src="/logo.png"
        alt=""
        width={64}
        height={64}
        className={
          compact
            ? "h-11 w-11 object-contain"
            : "h-12 w-12 object-contain sm:h-14 sm:w-14"
        }
        priority
      />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-lg font-semibold tracking-tight text-navy sm:text-xl">
          Achieve More
        </span>
        <span className="mt-1 font-sans text-[0.65rem] font-semibold tracking-[0.22em] text-navy/70 uppercase">
          Academics
        </span>
      </span>
      <span className="sr-only">{SITE_NAME}</span>
    </a>
  );
}
