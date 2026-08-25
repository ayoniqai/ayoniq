import { getPublications } from "@/src/lib/content";
import Link from "next/link";
import { FadeIn } from "@/src/components/ui/FadeIn";
import { ArrowRight, Download, FileText, Search } from "lucide-react";
import { format } from "date-fns";

export default function PublicationsPage() {
  const publications = getPublications();

  return (
    <div className="bg-[#030509] text-white min-h-screen pb-24">
      
      {/* Massive Typography Header */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen -translate-x-1/2 translate-y-1/2" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
              Research <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                Publications.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/50 max-w-2xl leading-relaxed font-light">
              Explore our latest research papers, technical reports, and preprints shaping the future of AI.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="py-8 border-b border-white/5 bg-white/[0.01] sticky top-[72px] z-30 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-white/40" />
            </div>
            <input 
              type="text" 
              placeholder="Search publications by title, author, or keyword..." 
              className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors"
            />
          </div>
          <div className="flex items-center gap-4 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
             <button className="px-4 py-2 rounded-full bg-white text-black text-sm font-bold whitespace-nowrap">All</button>
             <button className="px-4 py-2 rounded-full bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors text-sm font-medium whitespace-nowrap border border-white/10">Papers</button>
             <button className="px-4 py-2 rounded-full bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors text-sm font-medium whitespace-nowrap border border-white/10">Technical Reports</button>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto flex flex-col border-t border-white/10">
            {publications.map((pub, idx) => (
              <FadeIn key={pub.slug} delay={idx * 0.05}>
                <Link 
                  href={`/publications/${pub.slug}`}
                  className="group flex flex-col md:flex-row md:items-start justify-between gap-6 py-10 border-b border-white/5 hover:border-white/20 transition-all duration-300 relative"
                >
                  {/* Background Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />

                  <div className="md:w-32 shrink-0 pt-1">
                    <span className="text-white/40 text-sm font-medium tracking-widest uppercase">
                      {format(new Date(pub.data.date), "MMM yyyy")}
                    </span>
                  </div>
                  
                  <div className="flex-grow pr-4 lg:pr-12">
                    <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-emerald-400 transition-all duration-500">
                      {pub.data.title}
                    </h3>
                    
                    <p className="text-white/50 text-base leading-relaxed mb-6 font-light">
                      {pub.data.summary}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className="text-white/60 font-medium">
                        {pub.data.team}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-white/20 hidden md:block"></span>
                      <span className="flex items-center text-[10px] font-bold text-white/40 tracking-widest uppercase border border-white/10 px-2 py-0.5 rounded">
                        <FileText className="w-3 h-3 mr-1.5" />
                        {pub.data.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="shrink-0 flex items-center justify-end md:w-32 mt-4 md:mt-0 pt-1">
                    {pub.data.downloadUrl ? (
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-sm font-medium text-white/60 group-hover:text-teal-400 group-hover:border-teal-400/30 group-hover:bg-teal-400/10 transition-all">
                        <Download className="w-4 h-4" />
                        <span>PDF</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-sm font-medium text-white/40 group-hover:text-white transition-colors">
                        View details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}
