export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-sans text-xs font-semibold tracking-[0.22em] text-gold uppercase ${className}`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
  id,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  align?: "left" | "center";
  id?: string;
}) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <>
      <div className="w-full bg-navy">
        <Container className={`py-8 md:py-10 ${alignClass}`}>
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h2
            id={id}
            className={`font-serif text-3xl font-semibold tracking-tight text-cream sm:text-4xl md:text-[2.75rem] md:leading-tight ${
              eyebrow ? "mt-3" : ""
            }`}
          >
            {title}
          </h2>
        </Container>
      </div>
      {children ? (
        <Container className={`pt-8 pb-2 ${alignClass}`}>
          <p
            className={`text-base leading-relaxed text-navy/75 sm:text-lg ${
              align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
            }`}
          >
            {children}
          </p>
        </Container>
      ) : null}
    </>
  );
}

export function GoldRule({ className = "" }: { className?: string }) {
  return <div className={`h-px w-12 bg-gold ${className}`} aria-hidden="true" />;
}
