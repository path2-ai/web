import { Hero, HeroTitle, HeroSubtitle } from "../hero";
import { HeroImage } from "../hero-image";

export const HomepageHero = () => (
  <Hero>
    <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      Your company's knowledge
      <br className="hidden md:block" /> at your fingertips
    </HeroTitle>
    <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
      Combine world knowledge from large language models with your company's
      <br className="hidden md:block" /> internal knowledge from documents.
    </HeroSubtitle>
    <HeroImage />
  </Hero>
);
