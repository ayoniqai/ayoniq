import { ContactHeroSection } from "@/src/modules/contact/ContactHeroSection";
import { ContactFormSection } from "@/src/modules/contact/ContactFormSection";

export default function ContactPage() {
  return (
    <div className="bg-[#030509] text-white min-h-screen flex flex-col gap-8 pb-20">
      <ContactHeroSection />
      <ContactFormSection />
    </div>
  );
}
