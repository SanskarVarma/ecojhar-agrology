import Image from "next/image";
import { Eyebrow, Section, SectionTitle } from "./ui";

interface PhotoTile {
  src: string;
  alt: string;
  title: string;
  body?: string;
  position?: string;
}

const photoTiles: PhotoTile[] = [
  {
    src: "/images/cantaloupe.jpg",
    alt: "Freshly harvested cantaloupes",
    title: "Vegetables & fruit",
    body: "Seasonal vegetables and fruit grown on about 3 acres.",
  },
  {
    src: "/images/fish.jpg",
    alt: "Fish from our pond in a sack",
    title: "Fish farming",
    body: "Raised in our own pond, 100 ft × 100 ft × 20 ft.",
  },
  {
    src: "/images/goat.jpg",
    alt: "Goats feeding on leaves inside our goat shed",
    title: "Goat meat",
    body: "From our shed for 50 goats.",
    position: "object-[50%_65%]",
  },
  {
    src: "/images/pond.jpg",
    alt: "Our fish pond",
    title: "Pond",
    position: "object-[50%_30%]",
  },
  {
    src: "/images/chia.jpg",
    alt: "Chia plants in flower on our farm",
    title: "Chia",
  },
  {
    src: "/images/mango.jpg",
    alt: "Young mango tree with small fruit",
    title: "Mango",
    position: "object-[50%_60%]",
  },
  {
    src: "/images/wheat.jpg",
    alt: "Villagers harvesting wheat in the field",
    title: "Wheat",
    position: "object-[50%_70%]",
  },
  {
    src: "/images/mustard.jpg",
    alt: "Mustard field in full yellow bloom",
    title: "Mustard",
  },
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

      <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {photoTiles.map((t) => (
          <li
            key={t.title}
            className="relative flex h-[190px] flex-col justify-end gap-1.5 overflow-hidden rounded-2xl p-5 md:h-[230px]"
          >
            <Image
              src={t.src}
              alt={t.alt}
              fill
              sizes="(min-width: 1024px) 313px, 50vw"
              className={`object-cover ${t.position ?? "object-center"}`}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% to-[#1E3322E6]" />
            <h3 className="relative font-heading text-xl font-medium leading-[1.1] text-fg-inverse md:text-2xl">
              {t.title}
            </h3>
            {t.body && (
              <p className="relative hidden text-sm leading-[1.4] text-white/85 sm:block">
                {t.body}
              </p>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
