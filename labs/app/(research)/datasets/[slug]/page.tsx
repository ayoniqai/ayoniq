import { notFound } from "next/navigation";
import { getDatasetBySlug, getDatasets } from "@/src/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft, Download, Database, FileJson, Scale, Calendar } from "lucide-react";
import { format } from "date-fns";
import { FadeIn } from "@/src/components/ui/FadeIn";

export async function generateStaticParams() {
  const datasets = getDatasets();
  return datasets.map((d) => ({
    slug: d.slug,
  }));
}

export default async function DatasetDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dataset = getDatasetBySlug(slug);

  if (!dataset) {
    notFound();
  }

  return (
    <div className="bg-[#030509] min-h-screen text-white pb-24">
      <div className="bg-[#0B0F19] border-b border-white/5 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link href="/datasets" className="inline-flex items-center text-sm font-medium text-white/40 hover:text-blue-400 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Datasets
            </Link>

            <h1 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-6 max-w-4xl leading-tight">
              {dataset.data.title}
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl leading-relaxed mb-10">
              {dataset.data.summary}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/60 font-medium mb-10 bg-white/5 p-6 rounded-xl border border-white/10 w-fit">
              <div className="flex items-center">
                <Database className="w-4 h-4 mr-2 text-blue-400" />
                <span className="font-bold text-white/80 mr-1">Size:</span> {dataset.data.size}
              </div>
              <div className="flex items-center">
                <FileJson className="w-4 h-4 mr-2 text-blue-400" />
                <span className="font-bold text-white/80 mr-1">Format:</span> {dataset.data.format}
              </div>
              <div className="flex items-center">
                <Scale className="w-4 h-4 mr-2 text-blue-400" />
                <span className="font-bold text-white/80 mr-1">License:</span> {dataset.data.license}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                <span className="font-bold text-white/80 mr-1">Released:</span> {format(new Date(dataset.data.date), "MMM yyyy")}
              </div>
            </div>

            {dataset.data.downloadUrl && (
              <a 
                href={dataset.data.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-8 text-sm font-medium text-white shadow-[0_4px_14px_rgba(59,130,246,0.4)] transition-all hover:scale-[1.02]"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Dataset
              </a>
            )}
          </FadeIn>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <article className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-a:text-blue-400 hover:prose-a:text-blue-300">
              <MDXRemote source={dataset.content} />
            </article>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
