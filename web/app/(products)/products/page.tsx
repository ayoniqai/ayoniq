import type { Metadata } from "next";
import { BRAND_FOCUS } from "@/core/constants/brand";
import HeroSection from "@/modules/products/HeroSection";
import CoreProductsSection from "@/modules/products/CoreProductsSection";
import PlatformFeaturesSection from "@/modules/products/PlatformFeaturesSection";
import CTASection from "@/modules/products/CTASection";

export const metadata: Metadata = {
  title: "Products | AYONIQ",
  description: `Deploy advanced AI models, handle global payment routing, and scale your applications with AYONIQ's unified developer platform. ${BRAND_FOCUS}`,
  alternates: {
    canonical: "https://ayoniq.org/products",
  },
};

export default function ProductsPage() {
  return (
    <main className="bg-[#050505] text-white">
      <HeroSection />
      <CoreProductsSection />
      <PlatformFeaturesSection />
      <CTASection />
    </main>
  );
}
