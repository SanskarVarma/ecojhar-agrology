import { Eyebrow, Section, SectionTitle } from "./ui";

const steps = [
  {
    label: "Start-up plan",
    title: "First 6 months",
    body: "Allocate capital and set up the farm.",
  },
  {
    label: "1-year plan",
    title: "April to March",
    body: "Develop a model agro farm in the village and a Farmers Producers Group of 10-11 farmers.",
  },
  {
    label: "5-year plan",
    title: "2027 to 2032",
    body: "Annual plan for the farm's sustainability, then replicate the model in 5 regions with local farmers.",
  },
  {
    label: "From 2032",
    title: "Next 5-year plan",
    body: "Replicate the model in all 24 districts of Jharkhand, in partnership with farmers.",
  },
];

export function Roadmap() {
  return (
    <Section id="roadmap">
      <div className="flex flex-col gap-3">
        <Eyebrow>Roadmap</Eyebrow>
        <SectionTitle className="max-w-[820px]">
          From one farm to a model for Jharkhand.
        </SectionTitle>
      </div>
      <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <li
            key={s.label}
            className="flex flex-col gap-3 border-t-[3px] border-accent pt-6"
          >
            <p className="font-data text-xs uppercase tracking-[1.2px] text-accent">
              {s.label}
            </p>
            <h3 className="font-heading text-[26px] font-medium leading-[1.1]">
              {s.title}
            </h3>
            <p className="text-[15px] leading-[1.5] text-fg-secondary">
              {s.body}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
