import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

interface NewsItem {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  excerpt?: string;
  publishedAt?: string;
  coverImage?: string;
  author?: { name: string; avatar?: string };
  tags?: string[];
}

const categoryConfig: Record<string, { text: string; bg: string }> = {
  ayoniq:       { text: "text-indigo-400",  bg: "bg-indigo-400/10" },
  "ayoniq-pay": { text: "text-purple-400",  bg: "bg-purple-400/10" },
  ai:           { text: "text-cyan-400",    bg: "bg-cyan-400/10"   },
  research:     { text: "text-sky-400",     bg: "bg-sky-400/10"    },
  technology:   { text: "text-blue-400",    bg: "bg-blue-400/10"   },
  announcement: { text: "text-emerald-400", bg: "bg-emerald-400/10"},
};

export default function UpdatesList({ items }: { items: NewsItem[] }) {
  if (!items || items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-white/[0.07] bg-white/[0.02] py-28 text-center">
        <div className="mb-4 text-4xl">📭</div>
        <h3 className="text-xl font-bold text-white mb-2">No updates yet</h3>
        <p className="text-zinc-500 text-sm">Check back soon for news in this category.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {items.map((item, i) => {
        const dateStr = item.publishedAt
          ? new Date(item.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
          : "";
        const cat = item.category?.toLowerCase().replace(/\s+/g, "-") ?? "";
        const cfg = categoryConfig[cat] ?? { text: "text-zinc-400", bg: "bg-white/5" };
        const label = item.category?.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()) ?? "";

        return (
          <Link
            key={item._id ?? i}
            href={`/updates/${item.slug?.current ?? "#"}`}
            className="group flex flex-col gap-5 rounded-2xl border border-white/[0.07] bg-[#060606] p-5 transition-all duration-300 hover:bg-white/[0.03] hover:border-white/[0.14] hover:shadow-[0_4px_30px_rgba(0,0,0,0.5)] sm:flex-row"
          >
            {/* Thumbnail */}
            {item.coverImage && (
              <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-xl bg-zinc-900 sm:h-[100px] sm:w-[160px]">
                <Image
                  src={item.coverImage}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            )}

            {/* Content */}
            <div className="flex flex-1 flex-col justify-center">
              <div className="mb-2.5 flex flex-wrap items-center gap-2">
                <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${cfg.text} ${cfg.bg}`}>
                  {label}
                </span>
                {dateStr && (
                  <span className="flex items-center gap-1 text-[11px] text-zinc-600">
                    <Calendar size={10} /> {dateStr}
                  </span>
                )}
              </div>

              <h2 className="mb-2 text-[17px] font-bold leading-snug text-white transition-colors group-hover:text-cyan-400 line-clamp-2">
                {item.title}
              </h2>

              {item.excerpt && (
                <p className="mb-4 text-[13px] leading-relaxed text-zinc-500 line-clamp-2">{item.excerpt}</p>
              )}

              <div className="mt-auto flex items-center justify-between">
                {item.author && (
                  <div className="flex items-center gap-2">
                    {item.author.avatar ? (
                      <div className="relative h-6 w-6 overflow-hidden rounded-full shrink-0">
                        <Image src={item.author.avatar} alt={item.author.name} fill className="object-cover" />
                      </div>
                    ) : (
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-white shrink-0">
                        {item.author.name.charAt(0)}
                      </div>
                    )}
                    <span className="text-[12px] text-zinc-500">{item.author.name}</span>
                  </div>
                )}
                <span className="flex items-center gap-1 text-[12px] font-medium text-zinc-500 transition-all group-hover:text-white group-hover:gap-1.5 ml-auto">
                  Read <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
