import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="UF Ultimate Frisbee"
        title="Join Our Legacy"
      >
        Be part of a team that balances competitive spirit with camaraderie. Whether you're a newcomer or an experienced player, we offer a welcoming environment for all.
      </SectionTitle>


      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions" />

      <Faq />
    </Container>
  );
}
