import { HeroSection } from "@/components/home/hero-section";
import { SelectedWorks } from "@/components/home/selected-works";
import { ServicesGrid } from "@/components/home/services-grid";
import { SpecTicker } from "@/components/home/spec-ticker";
import Testimonials from "@/components/home/testimonials";
import { WhatWeDo } from "@/components/home/what-we-do";
import { WhyChooseUs } from "@/components/home/why-choose-us";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="md:mt-32 w-full">
        <SpecTicker />
      </div>

      <div className="mt-24">
        <WhyChooseUs />

        <ServicesGrid />
      </div>

      <div>
        <WhatWeDo />
      </div>

      <div>
        <SelectedWorks />
      </div>

      <div>
        <Testimonials />
      </div>
    </div>
  );
}
