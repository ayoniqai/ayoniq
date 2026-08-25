import { FadeIn } from "@/src/components/ui/FadeIn";
import { BookOpen, Code, Lightbulb, ShieldCheck } from "lucide-react";

export function AboutMissionSection() {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col gap-24">
          
          <FadeIn>
            <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
              <div className="md:w-1/3 shrink-0">
                <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white leading-tight sticky top-24">
                  Our <br /> Mission.
                </h2>
              </div>
              <div className="md:w-2/3 flex flex-col gap-8">
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light">
                  AYONIQ LABS is a nonprofit Artificial Intelligence research organization.
                </p>
                <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light">
                  Our mission is to ensure that artificial general intelligence benefits all of humanity. We believe that the most significant technological leaps happen when knowledge is shared openly. We conduct cutting-edge research in Artificial General Intelligence (AGI), AI Alignment, and foundational models, and immediately open-source our findings, datasets, and models.
                </p>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <div className="p-10 border border-white/10 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 border border-blue-500/20">
                  <BookOpen className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4 text-white">Open Research</h3>
                <p className="text-white/50 leading-relaxed font-light text-lg">
                  We publish our papers and methodologies openly. There are no paywalls between you and our latest scientific breakthroughs in AGI and AI alignment.
                </p>
              </div>
              
              <div className="p-10 border border-white/10 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-8 border border-indigo-500/20">
                  <Code className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4 text-white">Open Source</h3>
                <p className="text-white/50 leading-relaxed font-light text-lg">
                  Research is only as good as its implementation. We provide robust, open-source models, weights, and toolkits to help you test, deploy, and scale globally.
                </p>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn>
            <div className="pt-24 border-t border-white/10 flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
              <div className="md:w-1/3 shrink-0">
                <h2 className="font-heading text-4xl font-bold text-white leading-tight">
                  Independent <br /> & Nonprofit.
                </h2>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light">
                  AYONIQ LABS operates as an independent, nonprofit research organization. We are structurally aligned to prioritize safety, alignment, and open collaboration over short-term commercialization, ensuring that our advancements in AGI serve the greater good of humanity.
                </p>
              </div>
            </div>
          </FadeIn>
          
        </div>
      </div>
    </section>
  );
}
