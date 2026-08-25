import { AboutHeroSection } from "@/src/modules/about/AboutHeroSection";
import { AboutMissionSection } from "@/src/modules/about/AboutMissionSection";

export default function AboutPage() {
  return (
    <div className="bg-[#030509] text-white min-h-screen flex flex-col gap-8 pb-20">
      <AboutHeroSection />
      <AboutMissionSection />
    </div>
  );
}
