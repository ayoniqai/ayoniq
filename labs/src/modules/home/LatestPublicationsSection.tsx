import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { getPublications } from "@/src/lib/content";
import { format } from "date-fns";
import { FadeIn } from "@/src/components/ui/FadeIn";

export function LatestPublicationsSection() {
  const publications = getPublications().slice(0, 4);

  return (
    <section className="bg-[#030509] text-white py-16 md:py-24 border-b border-white/5 relative">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="font-heading text-4xl font-bold tracking-tight mb-4">
              Latest publications
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Recent research papers, technical reports and datasets published by our researchers.
            </p>
          </div>
          <Link 
            href="/publications"
            className="group flex items-center text-sm font-medium text-white/80 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full transition-colors shrink-0 border border-white/10"
          >
            View all publications <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeIn>
        
        <div className="flex flex-col border-t border-white/10">
          {publications.map((pub, index) => (
            <FadeIn key={pub.slug} delay={index * 0.1}>
              <Link
                href={`/publications/${pub.slug}`}
                className="group flex flex-col md:flex-row md:items-baseline py-8 border-b border-white/5 hover:border-white/20 transition-all duration-300 relative"
              >
                {/* Background Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />

                <div className="md:w-40 text-white/40 text-sm font-medium tracking-wide mb-3 md:mb-0 shrink-0 uppercase">
                  {format(new Date(pub.data.date), "MMM yyyy")}
                </div>
                
                <div className="flex-grow pr-8">
                  <h3 className="font-heading font-medium text-2xl md:text-3xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-indigo-400 transition-all duration-500 mb-3">
                    {pub.data.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="text-white/60 font-light">
                      {pub.data.team}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/20 hidden md:block"></span>
                    <span className="text-[10px] font-bold text-white/40 tracking-widest uppercase border border-white/10 px-2 py-0.5 rounded">
                      {pub.data.type}
                    </span>
                  </div>
                </div>
                
                <div className="shrink-0 flex items-center justify-between md:justify-end md:w-32 mt-6 md:mt-0">
                  <span className="text-sm font-medium text-white/30 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                    {pub.data.downloadUrl ? (
                      <>
                        Download <Download className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Read paper <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
