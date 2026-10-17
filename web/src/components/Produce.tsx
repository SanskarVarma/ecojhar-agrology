import Image from "next/image";
import { Beef, Recycle, Sprout, type LucideIcon } from "lucide-react";
import { Eyebrow, Section, SectionTitle } from "./ui";

interface ImageTileProps {
  src: string;
  alt: string;
  title: string;
  body?: string;
  sizes: string;
  className: string;
}

function ImageTile({ src, alt, title, body, sizes, className }: ImageTileProps) {
  return (
    <div
      className={`relative flex flex-col justify-end gap-2 overflow-hidden rounded-2xl p-6 md:p-8 ${className}`}
    >
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-35% to-[#1E3322E6]" />
      <h3
        className={`relative font-heading font-medium leading-[1.1] text-fg-inverse ${
          body ? "text-4xl" : "text-[26px]"
        }`}
      >
        {title}
      </h3>
      {body && (
        <p className="relative max-w-[420px] text-base leading-[1.5] text-white/85">
          {body}
        </p>
      )}
    </div>
  );
}

interface InfoTile {
  icon: LucideIcon;
  title: string;
  body: string;
  tint?: boolean;
}

const infoTiles: InfoTile[] = [
  { icon: Beef, title: "Goat meat", body: "From our shed for 50 goats." },
  { icon: Recycle, title: "Compost", body: "Made on the farm to feed the soil." },
  { icon: Sprout, title: "Mushroom", body: "Planned for next year.", tint: true },
];

export function Produce() {
  return (
    <Section id="grow" className="bg-surface-secondary">
      <div className="flex flex-col gap-3">
        <Eyebrow>What we grow</Eyebrow>
        <SectionTitle className="max-w-[820px]">
          Fresh from our fields, pond and shed.
        </SectionTitle>
      </div>

      <div className="flex flex-col gap-5 md:flex-row">
        <ImageTile
          src="/images/cantaloupe.jpg"
          alt="Freshly harvested cantaloupes"
          title="Vegetables & fruit"
          body="Seasonal vegetables and fruit grown on about 3 acres of our land."
          sizes="(min-width: 768px) 620px, 100vw"
          className="h-[360px] md:h-[440px] md:flex-[620]"
        />
        <ImageTile
          src="/images/fish.jpg"
          alt="Rohu and Katla fish in a sack"
          title="Fish: Rohu & Katla"
          body="Raised in our own 100×100 pond."
          sizes="(min-width: 768px) 672px, 100vw"
          className="h-[360px] md:h-[440px] md:flex-[672]"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {infoTiles.map(({ icon: Icon, title, body, tint }) => (
          <div
            key={title}
            className={`flex h-[200px] flex-col justify-between rounded-2xl p-8 md:h-[240px] ${
              tint ? "bg-surface-tint" : "bg-surface-primary"
            }`}
          >
            <Icon size={30} className="text-accent" />
            <div className="flex flex-col gap-1.5">
              <h3 className="font-heading text-[28px] font-medium">{title}</h3>
              <p className="text-[15px] text-fg-secondary">{body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <ImageTile
          src="/images/cucumber.jpg"
          alt="Cucumbers"
          title="Cucumbers"
          sizes="(min-width: 640px) 424px, 100vw"
          className="h-[200px] md:h-[260px]"
        />
        <ImageTile
          src="/images/custard-apple.jpg"
          alt="Custard apples"
          title="Custard apples"
          sizes="(min-width: 640px) 424px, 100vw"
          className="h-[200px] md:h-[260px]"
        />
        <ImageTile
          src="/images/maize-field.jpg"
          alt="Maize growing in the field"
          title="Maize"
          sizes="(min-width: 640px) 424px, 100vw"
          className="h-[200px] md:h-[260px]"
        />
      </div>
    </Section>
  );
}
