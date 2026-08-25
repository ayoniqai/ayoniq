import { notFound } from "next/navigation";
import { getPublicationBySlug, getPublications } from "@/src/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft, Download, Calendar, Users, FileText } from "lucide-react";
import { format } from "date-fns";
import { FadeIn } from "@/src/components/ui/FadeIn";

export async function generateStaticParams() {
  const publications = getPublications();
  return publications.map((p) => ({
    slug: p.slug,
  }));
}

export default async function PublicationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const publication = getPublicationBySlug(slug);

  if (!publication) {
    notFound();
  }

  return (
    <div className="bg-[#030509] min-h-screen text-white pb-24">
      <div className="bg-[#0B0F19] border-b border-white/5 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link href="/publications" className="inline-flex items-center text-sm font-medium text-white/40 hover:text-blue-400 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Publications
            </Link>
            
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center text-[10px] font-bold uppercase tracking-[0.1em] text-white/80 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                <FileText className="w-3.5 h-3.5 mr-1.5" />
                {publication.data.type}
              </span>
            </div>

            <h1 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-6 max-w-4xl leading-tight">
              {publication.data.title}
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl leading-relaxed mb-10">
              {publication.data.summary}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/60 font-medium mb-10">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {format(new Date(publication.data.date), "MMMM yyyy")}
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                {publication.data.team}
              </div>
            </div>

            {publication.data.downloadUrl && (
              <a 
                href={publication.data.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-8 text-sm font-medium text-white shadow-[0_4px_14px_rgba(59,130,246,0.4)] transition-all hover:scale-[1.02]"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </a>
            )}
          </FadeIn>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <article className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-a:text-blue-400 hover:prose-a:text-blue-300">
              <MDXRemote source={publication.content} />
            </article>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
