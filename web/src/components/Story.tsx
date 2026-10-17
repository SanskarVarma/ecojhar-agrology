import Image from "next/image";
import { Eyebrow, Section, SectionTitle } from "./ui";

export function Story() {
  return (
    <Section
      id="about"
      innerClassName="flex flex-col items-center gap-10 md:flex-row md:gap-20"
    >
      <div className="relative h-[340px] w-full shrink-0 overflow-hidden rounded-2xl md:h-[560px] md:w-[580px]">
        <Image
          src="/images/valley-view.jpg"
          alt="View over the valley near the farm in Hazaribagh"
          fill
          sizes="(min-width: 768px) 580px, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex w-full flex-col gap-5">
        <Eyebrow>Our story</Eyebrow>
        <SectionTitle className="md:text-5xl">
          A working farm in Tiuj Village, built to make farming profitable.
        </SectionTitle>
        <p className="text-lg leading-[1.55] text-fg-secondary">
          Ecojhar Agrology is a new start-up in agricultural products and
          related fields. We run a composite farmhouse of about 4.16 acres in
          Hazaribagh district, helping every crop reach its production target
          and making agriculture a profitable business.
        </p>
        <p className="text-lg leading-[1.55] text-fg-secondary">
          We grow with natural, chemical-free inputs. In future we will bring
          other agriculture activities to farmers who need them.
        </p>
      </div>
    </Section>
  );
}
