import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Calendar } from "lucide-react";

interface Author {
  name: string;
  avatar?: string;
  role?: string;
}

interface PostCardProps {
  post: {
    _id: string;
    title: string;
    slug: { current: string };
    category: string;
    author?: Author;
    readTime?: string;
    excerpt: string;
    coverImage?: string;
    tags?: string[];
    publishedAt?: string;
  };
  featured?: boolean;
}

const categoryConfig: Record<string, { text: string; bg: string; border: string }> = {
  engineering:    { text: "text-blue-400",   bg: "bg-blue-400/10",    border: "border-blue-400/20"    },
  "ai-research":  { text: "text-purple-400", bg: "bg-purple-400/10",  border: "border-purple-400/20"  },
  product:        { text: "text-emerald-400",bg: "bg-emerald-400/10", border: "border-emerald-400/20" },
  company:        { text: "text-orange-400", bg: "bg-orange-400/10",  border: "border-orange-400/20"  },
  tutorials:      { text: "text-cyan-400",   bg: "bg-cyan-400/10",    border: "border-cyan-400/20"    },
  technology:     { text: "text-sky-400",    bg: "bg-sky-400/10",     border: "border-sky-400/20"     },
};

const CategoryBadge = ({ category }: { category: string }) => {
  const cfg = categoryConfig[category] ?? { text: "text-zinc-400", bg: "bg-white/5", border: "border-white/10" };
  const label = category.replace(/-/g, " & ").replace(/\b\w/g, c => c.toUpperCase());
  return (
    <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${cfg.text} ${cfg.bg} ${cfg.border}`}>
      {label}
    </span>
  );
};

const AuthorChip = ({ author, compact = false }: { author?: Author; compact?: boolean }) => {
  if (!author) return null;
  const initials = author.name.charAt(0).toUpperCase();
  return (
    <div className="flex items-center gap-2">
      {author.avatar ? (
        <div className={`relative overflow-hidden rounded-full ${compact ? "h-7 w-7" : "h-9 w-9"} shrink-0`}>
          <Image src={author.avatar} alt={author.name} fill className="object-cover" />
        </div>
      ) : (
        <div className={`flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 font-bold text-white ${compact ? "h-7 w-7 text-[11px]" : "h-9 w-9 text-sm"}`}>
          {initials}
        </div>
      )}
      {!compact && (
        <div>
          <p className="text-[13px] font-semibold text-white leading-none">{author.name}</p>
          {author.role && <p className="text-[11px] text-zinc-500 mt-0.5">{author.role}</p>}
        </div>
      )}
      {compact && <span className="text-[12px] font-medium text-zinc-400">{author.name}</span>}
    </div>
  );
};

export default function PostCard({ post, featured = false }: PostCardProps) {
  const dateStr = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    : "";

  if (featured) {
    return (
      <Link href={`/blog/${post.slug.current}`} className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#080808] transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_60px_rgba(0,255,255,0.04)] lg:flex-row">
        {/* Image */}
        <div className="relative min-h-[260px] w-full overflow-hidden bg-zinc-900 lg:w-[55%]">
          {post.coverImage ? (
            <Image src={post.coverImage} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black" />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#080808]/40 hidden lg:block" />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-8 lg:w-[45%] lg:p-12">
          <div className="mb-1 flex items-center gap-2 text-[11px] font-semibold text-cyan-500 uppercase tracking-widest">
            Featured Post
          </div>
          <div className="mb-4 flex items-center gap-3">
            <CategoryBadge category={post.category} />
            {dateStr && (
              <span className="flex items-center gap-1 text-[12px] text-zinc-500">
                <Calendar size={11} /> {dateStr}
              </span>
            )}
          </div>

          <h2 className="mb-4 text-2xl font-extrabold leading-snug tracking-tight text-white transition-colors group-hover:text-cyan-400 lg:text-[1.85rem]">
            {post.title}
          </h2>
          <p className="mb-8 line-clamp-3 text-[15px] leading-relaxed text-zinc-400">
            {post.excerpt}
          </p>

          <div className="mt-auto flex items-center justify-between">
            <AuthorChip author={post.author} compact />
            <div className="flex items-center gap-3 text-[12px] text-zinc-500">
              {post.readTime && <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>}
              <span className="flex items-center gap-1 text-cyan-400 font-medium transition-all group-hover:gap-2">
                Read more <ArrowRight size={13} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug.current}`} className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#080808] transition-all duration-300 hover:border-white/[0.18] hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)] hover:-translate-y-0.5">
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
        {post.coverImage ? (
          <Image src={post.coverImage} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black" />
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between gap-2">
          <CategoryBadge category={post.category} />
          {dateStr && <span className="text-[11px] text-zinc-600">{dateStr}</span>}
        </div>

        <h3 className="mb-3 text-[18px] font-bold leading-snug text-white transition-colors group-hover:text-cyan-400 line-clamp-2">
          {post.title}
        </h3>
        <p className="mb-5 line-clamp-2 text-[13.5px] leading-relaxed text-zinc-500">
          {post.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-white/[0.06] pt-4">
          <AuthorChip author={post.author} compact />
          <div className="flex items-center gap-3 text-[11px] text-zinc-600">
            {post.readTime && <span className="flex items-center gap-1"><Clock size={10} />{post.readTime}</span>}
            <ArrowRight size={13} className="text-zinc-600 transition-all group-hover:text-cyan-400 group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
