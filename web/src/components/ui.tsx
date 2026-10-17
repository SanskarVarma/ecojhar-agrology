import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
}

export function Section({
  id,
  className = "bg-surface-primary",
  innerClassName = "flex flex-col gap-14",
  children,
}: SectionProps) {
  return (
    <section id={id} className={`px-6 py-16 md:px-16 md:py-28 ${className}`}>
      <div className={`mx-auto w-full max-w-[1312px] ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`font-data text-[13px] uppercase tracking-[1.5px] ${
        light ? "text-white/70" : "text-accent"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  light = false,
  className = "",
}: {
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={`font-heading text-[34px] font-medium leading-[1.06] md:text-[52px] ${
        light ? "text-fg-inverse" : "text-fg-primary"
      } ${className}`}
    >
      {children}
    </h2>
  );
}
