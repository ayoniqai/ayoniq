import { CareersHeroSection } from "@/src/modules/careers/CareersHeroSection";
import { CareersListSection } from "@/src/modules/careers/CareersListSection";

export default function CareersPage() {
  return (
    <div className="bg-[#030509] text-white min-h-screen flex flex-col gap-8 pb-20">
      <CareersHeroSection />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <CareersListSection />
      </div>
    </div>
  );
}
