import Link from "next/link";
import { ArrowRight, BrainCircuit, Cpu, Monitor, Shield, Bot, Sparkles } from "lucide-react";
import { getResearchAreas } from "@/src/lib/content";
import { FadeIn } from "@/src/components/ui/FadeIn";

const iconMap: Record<string, React.ElementType> = {
  BrainCircuit,
  Cpu,
  Monitor,
  Shield,
  Bot,
  Sparkles,
};


export function ResearchAreasSection() {
  const researchAreas = getResearchAreas().slice(0, 6);

  return (
    <section className="bg-[#0B0F19] text-white py-16 md:py-24 border-b border-white/5 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-4">
          <h2 className="font-heading text-4xl font-bold tracking-tight">
            What we research
          </h2>
          <Link 
            href="/research"
            className="group flex items-center text-sm font-medium text-white/80 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full transition-colors border border-white/10"
          >
            View all research areas <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[280px] gap-4 lg:gap-6">
          {researchAreas.map((area, index) => {
            const Icon = area.data.icon ? iconMap[area.data.icon] || BrainCircuit : BrainCircuit;
            
            let gridClass = "lg:col-span-1 lg:row-span-1";
            let contentClass = "flex-col justify-between";
            let titleSize = "text-xl";
            let showSummary = true;
            let iconSize = "w-10 h-10";
            
            if (index === 0) {
              gridClass = "lg:col-span-2 lg:row-span-2";
              titleSize = "text-3xl lg:text-4xl";
              iconSize = "w-14 h-14";
            } else if (index === 3) {
              gridClass = "lg:col-span-2 lg:row-span-1";
              contentClass = "flex-row items-center gap-8";
              titleSize = "text-2xl";
              showSummary = false;
            }

            return (
              <FadeIn key={area.slug} delay={index * 0.1} className={`${gridClass}`}>
                <Link 
                  href={`/research/${area.slug}`} 
                  className={`group relative flex ${contentClass} h-full p-6 lg:p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden isolate`}
                >
                  {/* Hover Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  
                  {index !== 3 && (
                    <div className={`${iconSize} rounded-2xl flex items-center justify-center mb-6 bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30 transition-all duration-500 shrink-0`}>
                      <Icon className="w-1/2 h-1/2 text-white/70 group-hover:text-indigo-400 transition-colors" />
                    </div>
                  )}

                  {index === 3 && (
                    <div className={`${iconSize} rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-purple-500/20 group-hover:border-purple-500/30 transition-all duration-500 shrink-0`}>
                      <Icon className="w-1/2 h-1/2 text-white/70 group-hover:text-purple-400 transition-colors" />
                    </div>
                  )}

                  <div className="flex flex-col flex-grow">
                    <h3 className={`font-heading ${titleSize} font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-500`}>
                      {area.data.title}
                    </h3>
                    
                    {showSummary && (
                      <p className={`text-white/50 leading-relaxed font-light ${index === 0 ? 'text-lg max-w-md' : 'text-sm'} line-clamp-3 mb-6`}>
                        {area.data.summary}
                      </p>
                    )}
                  </div>

                  <div className="mt-auto flex items-center shrink-0">
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
  );
}
