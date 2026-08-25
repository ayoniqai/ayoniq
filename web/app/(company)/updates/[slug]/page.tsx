import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Tag, ExternalLink } from "lucide-react";
import { client } from "@/core/lib/sanity";
import { NEWS_BY_SLUG_QUERY } from "@/core/lib/queries";
import PortableTextRenderer from "@/modules/blog/PortableTextRenderer";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await client.fetch(NEWS_BY_SLUG_QUERY, { slug });
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} | AYONIQ Updates`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.coverImage ? [article.coverImage] : [],
    },
    alternates: { canonical: `https://ayoniq.org/updates/${slug}` },
  };
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await client.fetch(NEWS_BY_SLUG_QUERY, { slug });

  if (!article) notFound();

  const dateStr = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    : "";

  const author = article.author;
  const authorInitial = author?.name?.charAt(0).toUpperCase() ?? "A";
  const categoryLabel = article.category?.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase()) ?? "";

  return (
    <main className="min-h-screen bg-[#020202] text-white">

      {/* ── Header ────────────────────────────── */}
      <header className="mx-auto max-w-4xl px-6 pt-28 pb-10 lg:pt-36">
        <Link href="/updates" className="inline-flex items-center gap-2 text-[13px] font-medium text-zinc-500 transition-colors hover:text-white mb-10 group">
          <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-0.5" /> Back to Updates
        </Link>

        <div className="mb-5 flex flex-wrap items-center gap-3 text-[12px]">
          <span className="rounded-full bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 text-cyan-400 font-semibold">
            {categoryLabel}
          </span>
          {dateStr && (
            <span className="flex items-center gap-1.5 text-zinc-500">
              <Calendar size={12} /> {dateStr}
            </span>
          )}
        </div>

        <h1 className="text-[clamp(1.8rem,4.5vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight text-white mb-6">
          {article.title}
        </h1>

        {article.excerpt && (
          <p className="text-[17px] leading-relaxed text-zinc-400 mb-8 max-w-2xl">{article.excerpt}</p>
        )}

        {/* Author */}
        {author && (
          <div className="flex items-center gap-3 py-5 border-t border-b border-white/[0.06]">
            {author.avatar ? (
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <Image src={author.avatar} alt={author.name} fill className="object-cover" />
              </div>
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 text-sm font-bold text-white shrink-0">
                {authorInitial}
              </div>
            )}
            <div>
              <p className="text-[14px] font-semibold text-white">{author.name}</p>
              <p className="text-[12px] text-zinc-500">{author.role ?? "AYONIQ Team"}</p>
            </div>
          </div>
        )}
      </header>

      {/* ── Cover Image ─────────────────────── */}
      {article.coverImage && (
        <div className="mx-auto max-w-5xl px-6 mb-16">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl border border-white/[0.07] bg-zinc-900">
            <Image src={article.coverImage} alt={article.title} fill className="object-cover" priority />
          </div>
        </div>
      )}

      {/* ── Content ─────────────────────────── */}
      <article className="mx-auto max-w-3xl px-6 pb-20">
        {article.content ? (
          <PortableTextRenderer value={article.content} />
        ) : (
          <p className="text-center text-zinc-500 py-20">No detailed content available yet.</p>
        )}
      </article>

      {/* ── Tags ────────────────────────────── */}
      {article.tags && article.tags.length > 0 && (
        <div className="mx-auto max-w-3xl px-6 pb-16">
          <div className="flex flex-wrap items-center gap-2">
            <Tag size={14} className="text-zinc-500" />
            {article.tags.map((tag: string) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[12px] text-zinc-400">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* ── Back ────────────────────────────── */}
      <div className="mx-auto max-w-3xl px-6 pb-32">
        <Link href="/updates" className="inline-flex items-center gap-2 text-[13px] font-medium text-zinc-500 hover:text-white transition-colors group">
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" /> All updates
        </Link>
      </div>

    </main>
  );
}
