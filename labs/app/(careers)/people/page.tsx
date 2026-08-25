import { PeopleHeroSection } from "@/src/modules/people/PeopleHeroSection";
import { PeopleListSection } from "@/src/modules/people/PeopleListSection";

export default function PeoplePage() {
  return (
    <div className="bg-[#030509] text-white min-h-screen pb-24 flex flex-col gap-12">
      <PeopleHeroSection />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PeopleListSection />
      </div>
    </div>
  );
}
