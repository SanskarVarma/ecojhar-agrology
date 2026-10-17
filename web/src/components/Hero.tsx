import Image from "next/image";
import { MessageCircle } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "What we grow", href: "#grow" },
  { label: "Our farm", href: "#farm" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[680px] flex-col justify-between gap-16 overflow-hidden bg-surface-inverse px-6 pb-12 pt-6 md:min-h-[800px] md:px-16 md:pb-20 md:pt-8">
      <Image
        src="/images/farm-field.jpg"
        alt="Crop rows on the Ecojhar Agrology farm in Tiuj Village"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E332240] to-[#1E3322F0]" />

      <nav className="relative z-10 flex items-center justify-between">
        <a
          href="#top"
          className="font-heading text-[21px] font-semibold text-fg-inverse md:text-[26px]"
        >
          Ecojhar Agrology
        </a>
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[15px] text-fg-inverse hover:opacity-80"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-surface-primary px-5 py-3 text-sm font-semibold md:px-6 text-fg-primary hover:bg-surface-tint"
        >
          Contact us
        </a>
      </nav>

      <div className="relative z-10 flex max-w-[880px] flex-col gap-6">
        <p className="font-data text-[13px] uppercase tracking-[1.5px] text-white/80">
          Tiuj Village · Daru Block · Hazaribagh, Jharkhand
        </p>
        <h1 className="font-heading text-[44px] font-medium leading-[1.03] text-fg-inverse md:text-[78px]">
          Natural, chemical-free produce from our farm in Hazaribagh.
        </h1>
        <p className="max-w-[600px] text-[17px] leading-[1.5] text-white/90 md:text-[19px]">
          Vegetables, fruit, fish and goat meat grown on 4.16 acres in Tiuj
          Village and sold at a fair price.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#grow"
            className="rounded-full bg-accent px-8 py-4 text-base font-semibold text-fg-inverse hover:brightness-110"
          >
            See what we grow
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/70 px-7 py-4 text-base font-medium text-fg-inverse hover:bg-white/10"
          >
            Partner with us
          </a>
        </div>
      </div>

      <a
        href="https://wa.me/919431491403"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex size-[60px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_16px_#00000026] hover:brightness-105"
      >
        <MessageCircle size={28} />
      </a>
    </section>
  );
}
