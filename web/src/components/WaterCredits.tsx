import { Handshake, Quote, Waves, type LucideIcon } from "lucide-react";
import { Eyebrow, Section, SectionTitle } from "./ui";

const partners: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Waves,
    title: "Pond & water body owners",
    body: "Any institution, Gram Panchayat, local community or individual managing water bodies or ponds of any size can join. Partnering lets you earn sustainable revenue from your existing water resources without any financial investment.",
  },
  {
    icon: Handshake,
    title: "ESG & sustainability partners",
    body: "Collaborate with us to sponsor verifiable water recharge projects, support smallholder farmers and drive measurable environmental impact.",
  },
];

export function WaterCredits() {
  return (
    <Section id="water-credits" className="bg-surface-tint">
      <div className="flex flex-col gap-3">
        <Eyebrow>Water credit initiative</Eyebrow>
        <SectionTitle className="max-w-[900px]">
          Pioneering water credits in Hazaribagh.
        </SectionTitle>
        <p className="max-w-[820px] pt-2 text-lg leading-[1.55] text-fg-secondary">
          In a major step toward sustainable agriculture, natural resource
          management and rural resilience, Ecojhar Agrology has officially
          expanded into water credits in Hazaribagh district, Jharkhand.
          Building on our mission of promoting natural farming, soil health and
          farmer empowerment, we are now leading the effort to quantify, value
          and incentivize water conservation and sustainable groundwater
          management across the region.
        </p>
      </div>

      <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
        <div className="flex w-full flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-[28px] font-medium leading-[1.1]">
              Why water credits?
            </h3>
            <p className="text-base leading-[1.6] text-fg-secondary">
              Water scarcity and fluctuating monsoon patterns pose significant
              risks to agriculture and local livelihoods in Jharkhand. Through
              the Water Credit Framework, we aim to turn water conservation into
              a measurable, scalable and economically rewarding asset for local
              communities. By creating verified baselines and monitoring water
              conservation interventions, the initiative ensures that every drop
              of water saved, recharged or harvested creates tangible social,
              environmental and economic value.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-[28px] font-medium leading-[1.1]">
              Sustainable growth and climate resilience
            </h3>
            <p className="text-base leading-[1.6] text-fg-secondary">
              This initiative aligns agriculture with environmental finance. By
              linking natural farming practices with water credit generation, we
              are securing the future of local water resources and building a
              climate-resilient ecosystem for future generations.
            </p>
          </div>
        </div>

        <figure className="flex w-full flex-col justify-between gap-8 rounded-2xl bg-surface-inverse p-8 md:p-10">
          <Quote size={32} className="text-white/60" />
          <blockquote className="font-heading text-[22px] font-medium leading-[1.3] text-fg-inverse md:text-[26px]">
            “Water security is the bedrock of organic and sustainable
            agriculture. Our entry into the Water Credit space in Hazaribagh
            reflects our unwavering commitment to restoring ecosystems,
            empowering rural communities, and driving climate action from the
            ground up.”
          </blockquote>
          <figcaption className="text-[15px] text-white/80">
            Gaurav Varma, Partner, Ecojhar Agrology
          </figcaption>
        </figure>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-[28px] font-medium leading-[1.1]">
            Partner with us
          </h3>
          <p className="max-w-[820px] text-base leading-[1.6] text-fg-secondary">
            We invite institutions, Panchayats, local communities, corporate ESG
            partners and individuals to join hands in expanding water security
            and sustainable agriculture across Jharkhand.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {partners.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-2xl bg-surface-primary p-8 shadow-[0_1px_2px_#0000000a]"
            >
              <Icon size={30} className="text-accent" />
              <h4 className="font-heading text-[26px] font-medium leading-[1.1]">
                {title}
              </h4>
              <p className="text-[15px] leading-[1.55] text-fg-secondary">
                {body}
              </p>
            </div>
          ))}
        </div>
        <a
          href="#contact"
          className="w-fit rounded-full bg-accent px-8 py-4 text-base font-semibold text-fg-inverse hover:brightness-110"
        >
          Partner with us
        </a>
      </div>
    </Section>
  );
}
