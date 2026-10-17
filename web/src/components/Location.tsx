import { ExternalLink, MapPin } from "lucide-react";
import { Eyebrow, Section, SectionTitle } from "./ui";

const MAPS_URL = process.env.NEXT_PUBLIC_MAPS_URL;
const MAPS_QUERY = process.env.NEXT_PUBLIC_MAPS_QUERY;

export function Location() {
  if (!MAPS_URL || !MAPS_QUERY) return null;

  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    MAPS_QUERY,
  )}&output=embed`;

  return (
    <Section
      id="location"
      className="bg-surface-secondary"
      innerClassName="flex flex-col gap-10 md:flex-row md:items-center md:gap-16"
    >
      <div className="flex w-full flex-col gap-5 md:max-w-[440px]">
        <Eyebrow>Find us</Eyebrow>
        <SectionTitle className="md:text-5xl">Come and see the farm.</SectionTitle>
        <p className="flex gap-3 text-lg leading-[1.5] text-fg-secondary">
          <MapPin size={22} className="mt-1 shrink-0 text-accent" />
          Tiuj Village, Daru block, Hazaribagh district, Jharkhand
        </p>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-fit items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-semibold text-fg-inverse hover:brightness-110"
        >
          Get directions
          <ExternalLink size={18} />
        </a>
      </div>

      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Ecojhar Agrology in Google Maps"
        className="group relative block h-[320px] w-full overflow-hidden rounded-2xl bg-surface-tint shadow-[0_1px_2px_#0000000a] md:h-[420px]"
      >
        <iframe
          src={embedUrl}
          title="Ecojhar Agrology location on Google Maps"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="pointer-events-none absolute inset-0 size-full border-0"
        />
        <span className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-surface-primary px-5 py-3 text-sm font-semibold text-fg-primary shadow-[0_4px_16px_#00000026] group-hover:bg-surface-tint">
          Open in Google Maps
          <ExternalLink size={16} />
        </span>
      </a>
    </Section>
  );
}
