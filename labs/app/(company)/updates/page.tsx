import { getNews } from "@/src/lib/content";
import Link from "next/link";
import { FadeIn } from "@/src/components/ui/FadeIn";
import { ArrowRight, Calendar, User } from "lucide-react";
import { format } from "date-fns";

export default function NewsPage() {
  const newsItems = getNews();

  return (
    <div className="bg-[#030509] text-white min-h-screen pb-24">
      
      <section className="bg-[#0B0F19] py-24 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6">Latest Updates</h1>
            <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
              News, announcements, and insights from the AYONIQ LABS team.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news, idx) => (
              <FadeIn key={news.slug} delay={idx * 0.1}>
                <Link 
                  href={`/updates/${news.slug}`}
                  className="flex flex-col h-full border border-white/10 rounded-xl overflow-hidden bg-[#030509] hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="h-48 bg-slate-900 relative overflow-hidden flex flex-col justify-between p-6">
                    {/* Simulated abstract background for news cards */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-[#0B0F19]"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                    
                    <span className="relative z-10 text-[10px] font-bold text-white uppercase tracking-wider bg-black/30 border border-white/10 backdrop-blur-md px-2 py-1 rounded w-fit">
                      {news.data.category}
                    </span>
                    
                    <div className="relative z-10 flex items-center gap-2 text-white/80 text-xs font-medium mt-auto">
                      <Calendar className="w-3.5 h-3.5" />
                      {format(new Date(news.data.date), "MMM d, yyyy")}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors line-clamp-2 text-white">
                      {news.data.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed flex-grow mb-6 line-clamp-3">
                      {news.data.summary}
                    </p>
                    <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between text-blue-400 text-sm font-medium">
                      Read full story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
