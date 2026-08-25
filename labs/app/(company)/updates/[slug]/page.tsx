import { notFound } from "next/navigation";
import { getNewsBySlug, getNews } from "@/src/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { format } from "date-fns";
import { FadeIn } from "@/src/components/ui/FadeIn";

export async function generateStaticParams() {
  const news = getNews();
  return news.map((n) => ({
    slug: n.slug,
  }));
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const news = getNewsBySlug(slug);

  if (!news) {
    notFound();
  }

  return (
    <div className="bg-[#030509] min-h-screen text-white pb-24">
      <div className="bg-[#0B0F19] border-b border-white/5 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <Link href="/updates" className="inline-flex items-center text-sm font-medium text-white/40 hover:text-blue-400 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Updates
              </Link>
              
              <div className="flex items-center gap-2 mb-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-white/80 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                  {news.data.category}
                </span>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                {news.data.title}
              </h1>
              
              <p className="text-xl text-white/60 leading-relaxed mb-8">
                {news.data.summary}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/60 font-medium">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {format(new Date(news.data.date), "MMMM d, yyyy")}
                </div>
                {news.data.author && (
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {news.data.author}
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <article className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-a:text-blue-400 hover:prose-a:text-blue-300">
              <MDXRemote source={news.content} />
            </article>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
