import Image from "next/image";
import {
  BedDouble,
  Droplets,
  Fence,
  Fish,
  House,
  Leaf,
  Sun,
  Warehouse,
  type LucideIcon,
} from "lucide-react";
import { Eyebrow, Section, SectionTitle } from "./ui";

const facilities: { icon: LucideIcon; text: string }[] = [
  { icon: Droplets, text: "Own water source with deep boring" },
  { icon: Sun, text: "Solar power electricity" },
  { icon: House, text: "Goat shed for 50 goats" },
  { icon: Warehouse, text: "Office-cum-store room" },
  { icon: Fence, text: "Fencing with cemented poles and wire or synthetic net" },
  { icon: BedDouble, text: "Shed for staff residence" },
  { icon: Fish, text: "100×100 pond for fish farming" },
  { icon: Leaf, text: "3 acres for vegetables and fruit" },
];

export function Farm() {
  return (
    <Section
      id="farm"
      innerClassName="flex flex-col gap-12 md:flex-row md:items-center md:gap-20"
    >
      <div className="flex w-full flex-col gap-9">
        <div className="flex flex-col gap-3">
          <Eyebrow>Our farm</Eyebrow>
          <SectionTitle className="md:text-5xl">
            Everything the farm needs, on the farm.
          </SectionTitle>
        </div>
        <ul className="grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2">
          {facilities.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-3.5">
              <Icon size={24} className="shrink-0 text-accent" />
              <span className="text-base leading-[1.4]">{text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative h-[340px] w-full shrink-0 overflow-hidden rounded-2xl md:h-[520px] md:w-[520px]">
        <Image
          src="/images/valley-flowers.jpg"
          alt="Flowering shrubs overlooking the valley"
          fill
          sizes="(min-width: 768px) 520px, 100vw"
          className="object-cover"
        />
      </div>
    </Section>
  );
}
