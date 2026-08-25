import type { Metadata } from "next";
import { BRAND_CORE_STATEMENT } from "@/core/constants/brand";
import HeroSection from "@/modules/about/HeroSection";
import MissionSection from "@/modules/about/MissionSection";
import VisionSection from "@/modules/about/VisionSection";
import WhatWeDoSection from "@/modules/about/WhatWeDoSection";
import ResearchSection from "@/modules/about/ResearchSection";
import InfrastructureSection from "@/modules/about/InfrastructureSection";
import OpenTechSection from "@/modules/about/OpenTechSection";
import GlobalSection from "@/modules/about/GlobalSection";
import PrinciplesSection from "@/modules/about/PrinciplesSection";
import EcosystemSection from "@/modules/about/EcosystemSection";
import StructureSection from "@/modules/about/StructureSection";
import TimelineSection from "@/modules/about/TimelineSection";
import CTASection from "@/modules/about/CTASection";

export const metadata: Metadata = {
  title: "About | AYONIQ",
  description: BRAND_CORE_STATEMENT,
};

export default function AboutPage() {
  return (
    <main className="bg-[#050505] text-white">
      <HeroSection />
      <MissionSection />
      <VisionSection />
      <WhatWeDoSection />
      <ResearchSection />
      <InfrastructureSection />
      <OpenTechSection />
      <GlobalSection />
      <PrinciplesSection />
      <EcosystemSection />
      <StructureSection />
      <TimelineSection />
      <CTASection />
    </main>
  );
}
