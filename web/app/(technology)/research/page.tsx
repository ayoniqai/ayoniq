import type { Metadata } from "next";
import { BRAND_FOCUS } from "@/core/constants/brand";
import HeroSection from "@/modules/research/HeroSection";
import FocusAreasSection from "@/modules/research/FocusAreasSection";
import PublicationsSection from "@/modules/research/PublicationsSection";
import OpenWeightsSection from "@/modules/research/OpenWeightsSection";
import CTASection from "@/modules/research/CTASection";

export const metadata: Metadata = {
  title: "Research | AYONIQ LABS",
  description: `Explore publications, open weights, and foundation model research from AYONIQ LABS. ${BRAND_FOCUS}`,
};

export default function ResearchPage() {
  return (
    <main className="bg-[#050505] text-white">
      <HeroSection />
      <FocusAreasSection />
      <PublicationsSection />
      <OpenWeightsSection />
      <CTASection />
    </main>
  );
}
