import { FadeIn } from "@/src/components/ui/FadeIn";
import { HeroSection } from "@/src/modules/home/HeroSection";
import { PartnershipsSection } from "@/src/modules/home/PartnershipsSection";
import { ResearchAreasSection } from "@/src/modules/home/ResearchAreasSection";
import { FeaturedResearchSection } from "@/src/modules/home/FeaturedResearchSection";
import { OpenProjectsSection } from "@/src/modules/home/OpenProjectsSection";
import { LatestPublicationsSection } from "@/src/modules/home/LatestPublicationsSection";
import { ImpactSection } from "@/src/modules/home/ImpactSection";
import { LatestUpdatesSection } from "@/src/modules/home/LatestUpdatesSection";
import { getPublications } from "@/src/lib/content";

export default function Home() {
  const featuredPublication = getPublications().find(p => p.data.type === "Research Paper" && p.data.featured);

  return (
    <div className="flex flex-col bg-[#030509]">
      <FadeIn delay={0}>
        <HeroSection />
      </FadeIn>
      <FadeIn delay={0.2}>
        <ResearchAreasSection />
      </FadeIn>
      <FadeIn delay={0.2}>
        <FeaturedResearchSection featuredPublication={featuredPublication} />
      </FadeIn>
      <FadeIn delay={0.2}>
        <OpenProjectsSection />
      </FadeIn>
      <FadeIn delay={0.2}>
        <LatestPublicationsSection />
      </FadeIn>
      <FadeIn delay={0.2}>
        <ImpactSection />
      </FadeIn>
      <FadeIn delay={0.2}>
        <LatestUpdatesSection />
      </FadeIn>
      <FadeIn delay={0.2}>
        <PartnershipsSection />
      </FadeIn>
    </div>
  );
}
