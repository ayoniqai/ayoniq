import type { Metadata } from "next";
import HeroSection from "@/modules/technology/HeroSection";
import AISection from "@/modules/technology/AISection";
import ComputeSection from "@/modules/technology/ComputeSection";
import EmergingTechSection from "@/modules/technology/EmergingTechSection";
import StackSection from "@/modules/technology/StackSection";
import CTASection from "@/modules/technology/CTASection";

export const metadata: Metadata = {
  title: "Technology | AYONIQ",
  description: "Discover the foundational technologies powering AYONIQ, including high-performance infrastructure, intelligent systems, and developer tools.",
  alternates: {
    canonical: "https://ayoniq.org/technology",
  },
};

export default function TechnologyPage() {
  return (
    <main className="bg-[#050505] text-white">
      <HeroSection />
      <AISection />
      <ComputeSection />
      <EmergingTechSection />
      <StackSection />
      <CTASection />
    </main>
  );
}
