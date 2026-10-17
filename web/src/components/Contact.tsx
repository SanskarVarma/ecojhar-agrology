import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { Eyebrow, Section, SectionTitle } from "./ui";

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

export function Contact() {
  return (
    <Section
      id="contact"
      className="bg-surface-inverse"
      innerClassName="flex flex-col gap-12 lg:flex-row lg:gap-24"
    >
      <div className="flex w-full flex-col gap-6">
        <Eyebrow light>Contact us</Eyebrow>
        <SectionTitle light>
          Buy fresh, partner with us, or visit the farm.
        </SectionTitle>

        <div className="flex gap-3.5">
          <MapPin size={22} className="mt-1 shrink-0 text-fg-inverse" />
          <div className="flex flex-col gap-0.5">
            <p className="text-[15px] text-white/70">Registered office</p>
            <address className="text-lg not-italic leading-[1.4] text-fg-inverse">
              501, PM Residency, Mission School Road, Hurhuru, Hazaribagh -
              825301
            </address>
          </div>
        </div>

        <div className="flex gap-3.5">
          <Phone size={22} className="mt-1 shrink-0 text-fg-inverse" />
          <div className="flex flex-col gap-0.5">
            <p className="text-[15px] text-white/70">Phone</p>
            <p className="text-lg leading-[1.4] text-fg-inverse">
              <a href="tel:+919431491403" className="hover:underline">
                9431491403
              </a>{" "}
              /{" "}
              <a href="tel:+918825331013" className="hover:underline">
                8825331013
              </a>
            </p>
          </div>
        </div>

        {CONTACT_EMAIL && (
          <div className="flex gap-3.5">
            <Mail size={22} className="mt-1 shrink-0 text-fg-inverse" />
            <div className="flex flex-col gap-0.5">
              <p className="text-[15px] text-white/70">Email</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="break-all text-lg leading-[1.4] text-fg-inverse hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        )}
      </div>

      <ContactForm />
    </Section>
  );
}
