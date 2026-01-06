import { Hero } from "./sections/hero/Hero";
import { FeaturedTools } from "./sections/featured/Featured";
import { Trending } from "./sections/trending/Trending";
import { PopularUsecase } from "./sections/usecase/PopularUsecase";
import { PromptSection } from "./sections/prompt/PromptSection";
import { Bundles } from "./sections/bundle/Bundles";
import { CTA } from "./sections/cta/CTA";
import { Section } from "./components/Section";
import { AllBtn } from "@/shared/AllBtn";

export const Home = () => {
  return (
    <div className="max-w-7xl p-4 mx-auto">
      <Hero />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 place-items-center">
          <FeaturedTools />
          <Trending />
        </div>
        <AllBtn />
      </Section>

      <Section>
        <PopularUsecase />
      </Section>

      <Section>
        <PromptSection />
      </Section>

      <Section>
        <Bundles />
      </Section>

      <section>
        <CTA />
      </section>
    </div>
  );
};
