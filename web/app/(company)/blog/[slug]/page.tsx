import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Tag, ExternalLink } from "lucide-react";
import { client } from "@/core/lib/sanity";
import { POST_QUERY } from "@/core/lib/queries";
import PortableTextRenderer from "@/modules/blog/PortableTextRenderer";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(POST_QUERY, { slug });
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | AYONIQ Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
    alternates: { canonical: `https://ayoniq.org/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await client.fetch(POST_QUERY, { slug });

  if (!post) notFound();

  const dateStr = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    : "";

  const author = post.author;
  const authorInitial = author?.name?.charAt(0).toUpperCase() ?? "A";

  return (
    <main className="min-h-screen bg-[#020202] text-white">

      {/* ── Hero Header ─────────────────────────── */}
      <header className="mx-auto max-w-4xl px-6 pt-28 pb-12 lg:pt-36">
        <Link href="/blog" className="inline-flex items-center gap-2 text-[13px] font-medium text-zinc-500 transition-colors hover:text-white mb-10 group">
          <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-0.5" /> Back to Blog
        </Link>

        {/* Category + date */}
        <div className="mb-5 flex flex-wrap items-center gap-3 text-[12px]">
          <span className="rounded-full bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 text-cyan-400 font-semibold">
            {post.category?.replace(/-/g, " & ").replace(/\b\w/g, (c: string) => c.toUpperCase())}
          </span>
          {dateStr && (
            <span className="flex items-center gap-1.5 text-zinc-500">
              <Calendar size={12} /> {dateStr}
            </span>
          )}
          {post.readTime && (
            <span className="flex items-center gap-1.5 text-zinc-500">
              <Clock size={12} /> {post.readTime}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-[clamp(2rem,5vw,3.8rem)] font-extrabold leading-[1.08] tracking-tight text-white mb-6">
          {post.title}
        </h1>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-[17px] leading-relaxed text-zinc-400 mb-8 max-w-2xl">
            {post.excerpt}
          </p>
        )}

        {/* Author */}
        {author && (
          <div className="flex items-center gap-4 py-5 border-t border-b border-white/[0.06]">
            {author.avatar ? (
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                <Image src={author.avatar} alt={author.name} fill className="object-cover" />
              </div>
            ) : (
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 text-base font-bold text-white shrink-0">
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

      {/* ── Cover Image ───────────────────────────── */}
      {post.coverImage && (
        <div className="mx-auto max-w-5xl px-6 mb-16">
          <div className="relative aspect-[21/10] w-full overflow-hidden rounded-3xl border border-white/[0.07] bg-zinc-900">
            <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority />
          </div>
        </div>
      )}

      {/* ── Article Body ──────────────────────────── */}
      <article className="mx-auto max-w-3xl px-6 pb-20">
        {post.content ? (
          <PortableTextRenderer value={post.content} />
        ) : (
          <p className="text-center text-zinc-500 py-20">Content coming soon.</p>
        )}
      </article>

      {/* ── Tags ─────────────────────────────────── */}
      {post.tags && post.tags.length > 0 && (
        <div className="mx-auto max-w-3xl px-6 pb-12">
          <div className="flex flex-wrap items-center gap-2">
            <Tag size={14} className="text-zinc-500" />
            {post.tags.map((tag: string) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[12px] text-zinc-400">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* ── Related Projects ─────────────────────── */}
      {post.relatedProjects && post.relatedProjects.length > 0 && (
        <section className="mx-auto max-w-3xl px-6 pb-16">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">Related Projects</p>
          <div className="flex flex-col gap-3">
            {post.relatedProjects.map((proj: any) => (
              <Link
                key={proj._id}
                href={`/projects/${proj.slug?.current}`}
                className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 transition-colors hover:border-white/[0.16] hover:bg-white/[0.04]"
              >
                {proj.coverImage && (
                  <div className="relative h-12 w-20 shrink-0 overflow-hidden rounded-lg bg-zinc-900">
                    <Image src={proj.coverImage} alt={proj.title} fill className="object-cover" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] font-semibold text-white truncate">{proj.title}</p>
                  <p className="text-[12px] text-zinc-500">{proj.category}</p>
                </div>
                <ExternalLink size={14} className="text-zinc-600 group-hover:text-white shrink-0 transition-colors" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── Back link ────────────────────────────── */}
      <div className="mx-auto max-w-3xl px-6 pb-32">
        <Link href="/blog" className="inline-flex items-center gap-2 text-[13px] font-medium text-zinc-500 hover:text-white transition-colors group">
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" /> All posts
        </Link>
      </div>

    </main>
  );
}
