import Image from "next/image";
import { Apple, TrendingUp, Users, type LucideIcon } from "lucide-react";
import { Eyebrow, Section, SectionTitle } from "./ui";

const outcomes: { icon: LucideIcon; text: string }[] = [
  { icon: Apple, text: "Consumers get healthy food" },
  { icon: TrendingUp, text: "Investors get a reasonable profit" },
  {
    icon: Users,
    text: "People get employed and the local economy is sustained",
  },
];

export function Outcomes() {
  return (
    <Section
      className="bg-surface-secondary"
      innerClassName="flex flex-col items-center gap-10 md:flex-row md:gap-20"
    >
      <div className="relative h-[360px] w-full shrink-0 overflow-hidden rounded-2xl md:h-[480px] md:w-[480px]">
        <Image
          src="/images/farmer-maize.jpg"
          alt="A farmer standing in a field of maize"
          fill
          sizes="(min-width: 768px) 480px, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex w-full flex-col gap-6">
        <Eyebrow>Why it matters</Eyebrow>
        <SectionTitle className="md:text-5xl">
          Good for buyers, investors and the village.
        </SectionTitle>
        <ul className="flex flex-col gap-6">
          {outcomes.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-3.5">
              <Icon size={26} className="shrink-0 text-accent" />
              <span className="text-[19px] leading-[1.35]">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
