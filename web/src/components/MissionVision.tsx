import { Check } from "lucide-react";
import { Eyebrow, Section } from "./ui";

const mission = [
  "Become the leading provider of vegetables in the area",
  "Provide quality vegetables, fruit, fish and goat meat at a fair price",
  "Economically empower the society of Tiuj Village",
  "Protect the soil and the ecosystem of the planet",
];

export function MissionVision() {
  return (
    <Section
      className="bg-surface-inverse"
      innerClassName="flex flex-col gap-12 md:flex-row md:gap-24"
    >
      <div className="flex w-full flex-col gap-5">
        <Eyebrow light>Our vision</Eyebrow>
        <p className="font-heading text-[28px] font-medium leading-[1.15] text-fg-inverse md:text-[40px]">
          To be a trustworthy and innovative leader, offering genuine, true
          wellness products and solutions for conscious, healthy living.
        </p>
      </div>
      <div className="flex w-full flex-col gap-5">
        <Eyebrow light>Our mission</Eyebrow>
        <ul className="flex flex-col gap-5">
          {mission.map((m) => (
            <li
              key={m}
              className="flex gap-3.5 border-t border-white/20 pt-4 text-lg leading-[1.4] text-fg-inverse"
            >
              <Check size={22} className="mt-0.5 shrink-0" />
              {m}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
