import { HeroSection } from "@/components/home/hero-section";
import { SelectedWorks } from "@/components/home/selected-works";
import { ServicesGrid } from "@/components/home/services-grid";
import { SpecTicker } from "@/components/home/spec-ticker";
import Testimonials from "@/components/home/testimonials";
import { WhatWeDo } from "@/components/home/what-we-do";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata } from "@/config/seo.config";
import { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Home",
  description:
      "Apex 49 Digital Limited is a creative digital agency. description: We design and build modern digital infrastructure, software systems and powerful technology solutions that help organizations operate smarter, faster, and more securely.",
  canonicalPath: "/",
});

export default function Home() {
  return (
    <div>
      <JsonLd />
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
