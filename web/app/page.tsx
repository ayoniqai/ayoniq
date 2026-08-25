import HeroSection from "@/modules/home/HeroSection";
import StatsSection from "@/modules/home/StatsSection";
import MissionSection from "@/modules/home/MissionSection";
import ProductsSection from "@/modules/home/ProductsSection";
import TechStackSection from "@/modules/home/TechStackSection";
import ResearchSection from "@/modules/home/ResearchSection";
import FeaturesSection from "@/modules/home/FeaturesSection";
import NewsSection from "@/modules/home/NewsSection";
import CtaSection from "@/modules/home/CtaSection";

export default function HomePage() {
  return (
    <main className="bg-[#050505] text-white overflow-x-hidden relative">
      <HeroSection />
      <StatsSection />
      <MissionSection />

      <ProductsSection />

      {/* ── Divider ───────────────────────────────── */}
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <TechStackSection />

      {/* ── Divider ───────────────────────────────── */}
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <ResearchSection />

      {/* ── Divider ───────────────────────────────── */}
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <FeaturesSection />

      {/* ── Divider ───────────────────────────────── */}
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <NewsSection />

      {/* ── Divider ───────────────────────────────── */}
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <CtaSection />
    </main>
  );
}
