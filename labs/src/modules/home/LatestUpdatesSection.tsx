import Link from "next/link";
import { ArrowRight, Terminal, Zap, BookOpen, Code, Layers } from "lucide-react";
import { getNews } from "@/src/lib/content";
import { format } from "date-fns";
import { FadeIn } from "@/src/components/ui/FadeIn";



const iconMap = {
  terminal: Terminal,
  zap: Zap,
  book: BookOpen,
  code: Code,
  layers: Layers
};

const gradientMap = {
  terminal: "from-blue-600 to-indigo-600",
  zap: "from-amber-500 to-orange-600",
  book: "from-emerald-500 to-teal-600",
  code: "from-purple-500 to-pink-600",
  layers: "from-blue-500 to-cyan-600"
};

export function LatestUpdatesSection() {
  const latestUpdates = getNews().slice(0, 3);

  return (
    <section className="bg-[#0B0F19] text-white py-16 md:py-24 border-b border-white/5 relative overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="font-heading text-4xl font-bold tracking-tight mb-4">
              Latest updates
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Updates, announcements, and perspectives from the AYONIQ LABS team.
            </p>
          </div>
          <Link 
            href="/updates"
            className="group flex items-center text-sm font-medium text-white/80 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white px-4 py-2 rounded-full transition-colors shrink-0"
          >
            View all updates <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestUpdates.map((update, index) => {
            const Icon = iconMap[update.data.icon as keyof typeof iconMap] || Terminal;
            const gradient = gradientMap[update.data.icon as keyof typeof gradientMap] || "from-blue-600 to-indigo-600";
            
            return (
              <FadeIn key={update.slug} delay={index * 0.1} className="h-full">
                <Link href={`/updates/${update.slug}`} className="group flex flex-col bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 h-full relative isolate">
                  
                  {/* Image/Gradient Header */}
                  <div className={`h-48 w-full bg-gradient-to-br ${gradient} relative overflow-hidden flex flex-col justify-between p-6 shrink-0 group-hover:scale-[1.02] transition-transform duration-500 origin-bottom`}>
                     <div className="absolute inset-0 bg-black/20 mix-blend-overlay pointer-events-none" />
                     <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
                     
                     <div className="bg-white/10 backdrop-blur-md w-12 h-12 rounded-2xl flex items-center justify-center border border-white/20 text-white relative z-10 shadow-lg">
                       <Icon className="w-6 h-6" />
                     </div>
                     <div className="relative z-10 flex gap-2 items-center">
                        <span className="text-[10px] font-bold text-white tracking-widest uppercase bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                          {update.data.category}
                        </span>
                     </div>
                  </div>
                  
                  {/* Content Body */}
                  <div className="p-8 flex flex-col flex-grow relative bg-[#0B0F19] z-10">
                    <div className="flex items-center gap-3 text-white/40 text-sm font-medium mb-4">
                      <span>{format(new Date(update.data.date), "MMM d, yyyy")}</span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span>{update.data.author || "AYONIQ LABS"}</span>
                    </div>
                    
                    <h3 className="font-heading text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors line-clamp-3">
                      {update.data.title}
                    </h3>
                    
                    <p className="text-white/50 leading-relaxed font-light flex-grow mb-8 line-clamp-3">
                      {update.data.summary}
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-sm font-medium text-white/40 group-hover:text-white transition-colors">
                        Read article
                      </span>
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 group-hover:text-white transition-all duration-300">
                        <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:-rotate-45 transition-all duration-300" />
                      </div>
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
