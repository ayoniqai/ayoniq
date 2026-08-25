import { getProjects } from "@/src/lib/content";
import Link from "next/link";
import { FadeIn } from "@/src/components/ui/FadeIn";

import { ArrowRight, Filter } from "lucide-react";

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="bg-[#030509] text-white min-h-screen pb-24">
      
      {/* Massive Typography Header */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen -translate-x-1/2 translate-y-1/2" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
              Open <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">Projects.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/50 max-w-2xl leading-relaxed font-light">
              Explore the research initiatives and open-source projects driven by the AYONIQ LABS community.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 border-b border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
             <button className="px-4 py-2 rounded-full bg-white text-black text-sm font-bold whitespace-nowrap">All Projects</button>
             <button className="px-4 py-2 rounded-full bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors text-sm font-medium whitespace-nowrap border border-white/10">Active</button>
             <button className="px-4 py-2 rounded-full bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors text-sm font-medium whitespace-nowrap border border-white/10">Archived</button>
          </div>
          <button className="flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors">
            <Filter className="w-4 h-4" /> Filter by Area
          </button>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, idx) => (
              <FadeIn key={project.slug} delay={idx * 0.05} className="h-full">
                <Link 
                  href={`/projects/${project.slug}`}
                  className="flex flex-col p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500 group h-full relative overflow-hidden isolate"
                >
                  {/* Hover Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-fuchsia-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                      <span className={`w-1.5 h-1.5 rounded-full ${project.data.status === 'Active' ? 'bg-green-400 animate-pulse' : 'bg-white/40'}`}></span>
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${project.data.status === 'Active' ? 'text-green-400' : 'text-white/40'}`}>
                        {project.data.status}
                      </span>
                    </div>
                    {project.data.researchArea && (
                      <span className="text-[10px] font-medium text-white/40 uppercase tracking-wider">
                        {project.data.researchArea}
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-fuchsia-400 transition-all duration-500 relative z-10">
                    {project.data.title}
                  </h3>
                  
                  <p className="text-white/50 leading-relaxed font-light flex-grow mb-8 line-clamp-3 relative z-10">
                    {project.data.summary}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center relative z-10">
                    <span className="text-sm font-medium text-white/40 group-hover:text-white/70 transition-colors flex items-center gap-2">
                      {project.data.researchers ? (
                        <>
                          <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-white">
                            +{project.data.researchers}
                          </span>
                          Contributors
                        </>
                      ) : "View details"}
                    </span>
                    
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:-rotate-45 transition-all duration-300" />
                    </div>
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
