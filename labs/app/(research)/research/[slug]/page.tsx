import { notFound } from "next/navigation";
import { getResearchBySlug, getResearchAreas } from "@/src/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FadeIn } from "@/src/components/ui/FadeIn";

export async function generateStaticParams() {
  const research = getResearchAreas();
  return research.map((r) => ({
    slug: r.slug,
  }));
}

export default async function ResearchDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const research = getResearchBySlug(slug);

  if (!research) {
    notFound();
  }

  return (
    <div className="bg-[#030509] min-h-screen text-white pb-24">
      <div className="bg-[#0B0F19] border-b border-white/5 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link href="/research" className="inline-flex items-center text-sm font-medium text-white/40 hover:text-blue-400 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Research Areas
            </Link>
            
            <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-4xl">
              {research.data.title}
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl leading-relaxed">
              {research.data.summary}
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <article className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-a:text-blue-400 hover:prose-a:text-blue-300">
              <MDXRemote source={research.content} />
            </article>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
