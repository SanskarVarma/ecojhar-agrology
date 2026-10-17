import { Eyebrow, Section, SectionTitle } from "./ui";

const partners = [
  { role: "Ph.D. in Chemistry", detail: "27 years in water, sanitation and hygiene" },
  { role: "Ph.D. in Social Science", detail: "27 years in water, sanitation and hygiene" },
  { role: "BA, entrepreneur", detail: "15 years in the transport sector" },
  { role: "Farmer and contractor", detail: "15 years of local contractual work" },
];

export function Team() {
  return (
    <Section id="team">
      <div className="flex flex-col gap-3">
        <Eyebrow>The team</Eyebrow>
        <SectionTitle>The people behind the farm.</SectionTitle>
        <p className="max-w-[760px] pt-1 text-[17px] text-fg-secondary">
          Designated partners: Dr. Gaurav Varma and Dr. Bipin Kumar Singh, with
          two further partners.
        </p>
      </div>
      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {partners.map((p) => (
          <li
            key={p.role}
            className="flex flex-col gap-2 border-t border-line pt-5"
          >
            <p className="font-data text-xs uppercase tracking-[1.2px] text-accent">
              Designated partner
            </p>
            <h3 className="font-heading text-2xl font-medium leading-[1.15]">
              {p.role}
            </h3>
            <p className="text-[15px] leading-[1.5] text-fg-secondary">
              {p.detail}
            </p>
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
