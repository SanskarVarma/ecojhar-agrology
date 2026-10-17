import { Contact } from "@/components/Contact";
import { Farm } from "@/components/Farm";
import { Footer } from "@/components/Footer";
import { Glance } from "@/components/Glance";
import { Hero } from "@/components/Hero";
import { MissionVision } from "@/components/MissionVision";
import { Outcomes } from "@/components/Outcomes";
import { Produce } from "@/components/Produce";
import { Roadmap } from "@/components/Roadmap";
import { Story } from "@/components/Story";
import { Team } from "@/components/Team";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <Glance />
      <Story />
      <Produce />
      <Farm />
      <MissionVision />
      <Roadmap />
      <Outcomes />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
