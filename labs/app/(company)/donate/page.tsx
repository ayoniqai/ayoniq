import { DonateHeroSection } from "@/src/modules/donate/DonateHeroSection";
import { DonateOptionsSection } from "@/src/modules/donate/DonateOptionsSection";

export default function DonatePage() {
  return (
    <div className="bg-[#030509] text-white min-h-screen flex flex-col gap-8 pb-20">
      <DonateHeroSection />
      <DonateOptionsSection />
    </div>
  );
}
