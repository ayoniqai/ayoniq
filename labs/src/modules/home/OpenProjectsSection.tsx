import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getProjects } from "@/src/lib/content";
import { FadeIn } from "@/src/components/ui/FadeIn";

export function OpenProjectsSection() {
  const allProjects = getProjects();
  const featuredProjects = allProjects.filter(p => p.data.featured).slice(0, 4);

  return (
    <section className="bg-[#0B0F19] text-white py-16 md:py-24 border-b border-white/5 relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="font-heading text-4xl font-bold tracking-tight mb-4">
              Open projects
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Collaborative open-source projects focused on solving real-world challenges in AI and computing.
            </p>
          </div>
          <Link 
            href="/projects"
            className="group flex items-center text-sm font-medium text-white/80 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white px-4 py-2 rounded-full transition-colors shrink-0"
          >
            View all projects <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.slice(0, 3).map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.1} className="h-full">
              <Link href={`/projects/${project.slug}`} className="flex flex-col p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500 group h-full relative overflow-hidden isolate">
                
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
  );
}
