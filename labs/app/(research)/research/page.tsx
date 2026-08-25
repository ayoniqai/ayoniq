import { getResearchAreas } from "@/src/lib/content";
import Link from "next/link";
import { FadeIn } from "@/src/components/ui/FadeIn";
import { ArrowRight, BrainCircuit, Cpu, Monitor, Shield, Bot, Sparkles } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  BrainCircuit,
  Cpu,
  Monitor,
  Shield,
  Bot,
  Sparkles,
};

export default function ResearchPage() {
  const researchAreas = getResearchAreas();

  return (
    <div className="bg-[#030509] text-white min-h-screen pb-24">
      
      {/* Massive Typography Header */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-tight">
              Pioneering the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Future of AI.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed font-light">
              We focus on long-term foundational research to solve critical challenges in computing and AI for the benefit of society.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Premium Glassmorphism Grid */}
      <section className="py-24 relative z-20 -mt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {researchAreas.map((area, idx) => {
              const Icon = area.data.icon ? iconMap[area.data.icon] || BrainCircuit : BrainCircuit;
              
              return (
                <FadeIn key={area.slug} delay={idx * 0.1} className="h-full">
                  <Link 
                    href={`/research/${area.slug}`}
                    className="group relative flex flex-col h-full p-8 lg:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden isolate"
                  >
                    {/* Hover Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30 transition-all duration-500 shrink-0 shadow-lg">
                      <Icon className="w-8 h-8 text-white/70 group-hover:text-indigo-400 transition-colors" />
                    </div>
                    
                    <h3 className="font-heading text-3xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-500">
                      {area.data.title}
                    </h3>
                    
                    <p className="text-white/50 leading-relaxed font-light flex-grow mb-8 text-lg">
                      {area.data.summary}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                      <span className="text-sm font-medium text-white/40 group-hover:text-white transition-colors">
                        Explore research
                      </span>
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                        <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-black group-hover:translate-x-0.5 transition-all duration-500" />
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
      
    </div>
  );
}
