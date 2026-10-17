import Image from "next/image";
import { Users } from "lucide-react";
import { Eyebrow, Section, SectionTitle } from "./ui";

interface Partner {
  kind: string;
  name?: string;
  photo?: string;
  role: string;
  detail: string;
}

const partners: Partner[] = [
  {
    kind: "Designated partner",
    name: "Dr. Gaurav Varma",
    photo: "/images/team/gaurav.png",
    role: "Ph.D. in Chemistry",
    detail: "27 years in water, sanitation and hygiene",
  },
  {
    kind: "Designated partner",
    name: "Dr. Bipin Kumar Singh",
    photo: "/images/team/bipin.png",
    role: "Ph.D. in Social Science",
    detail: "27 years in WASH and skill development",
  },
  {
    kind: "Associated partner",
    photo: "/images/team/surjit.jpg",
    role: "Farmer and contractor",
    detail: "15 years of local contractual work",
  },
];

export function Team() {
  return (
    <Section id="team">
      <div className="flex flex-col gap-3">
        <Eyebrow>The team</Eyebrow>
        <SectionTitle>The people behind the farm.</SectionTitle>
        <p className="max-w-[760px] pt-1 text-[17px] text-fg-secondary">
          Designated partners: Dr. Gaurav Varma and Dr. Bipin Kumar Singh.
        </p>
      </div>
      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {partners.map((p) => (
          <li
            key={p.role}
            className="flex flex-col gap-4 border-t border-line pt-5"
          >
            {p.photo ? (
              <Image
                src={p.photo}
                alt={p.name ? `${p.name}, ${p.role}` : p.role}
                width={88}
                height={88}
                className="size-[88px] rounded-full object-cover object-[50%_30%]"
              />
            ) : (
              <span className="flex size-[88px] items-center justify-center rounded-full bg-surface-tint text-accent">
                <Users size={32} />
              </span>
            )}
            <div className="flex flex-col gap-2">
              <p className="font-data text-xs uppercase tracking-[1.2px] text-accent">
                {p.kind}
              </p>
              <h3 className="font-heading text-2xl font-medium leading-[1.15]">
                {p.name ?? p.role}
              </h3>
              {p.name && (
                <p className="text-base font-medium text-fg-primary">
                  {p.role}
                </p>
              )}
              <p className="text-[15px] leading-[1.5] text-fg-secondary">
                {p.detail}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <p className="max-w-[900px] text-[17px] leading-[1.5] text-fg-secondary">
        A team of 14 including a full-time farm manager and marketing expert,
        part-time agriculture expert and livestock consultant, and farm labour.
      </p>
    </Section>
  );
}
