import { FileText, ExternalLink, Calendar, Users } from "lucide-react";
import Link from "next/link";
import { client } from "@/core/lib/sanity";
import { RESEARCH_QUERY } from "@/core/lib/queries";

const statusConfig: Record<string, { text: string; bg: string; dot: string }> = {
  published:    { text: "text-emerald-400", bg: "bg-emerald-400/10", dot: "bg-emerald-400" },
  "in-progress":{ text: "text-amber-400",   bg: "bg-amber-400/10",   dot: "bg-amber-400"   },
  idea:         { text: "text-zinc-400",    bg: "bg-white/5",        dot: "bg-zinc-500"    },
  archived:     { text: "text-zinc-500",    bg: "bg-white/5",        dot: "bg-zinc-600"    },
};

export default async function PublicationsSection() {
  let papers: any[] = [];
  try {
    papers = await client.fetch(RESEARCH_QUERY);
  } catch {
    papers = [];
  }


  if (papers.length === 0) {
    return (
      <section className="border-t border-white/[0.05] bg-[#030303] py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-600 mb-3">Publications</p>
          <h2 className="text-[2rem] font-bold tracking-tight text-white mb-4">Latest Research</h2>
          <p className="text-zinc-600 text-[14px]">Research publications coming soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="border-t border-white/[0.05] bg-[#030303] py-28">
      <div className="mx-auto max-w-4xl px-6">

        {/* Header */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-600 mb-3">Publications</p>
            <h2 className="text-[2rem] font-bold tracking-tight text-white">Latest Research</h2>
          </div>
          <Link href="/research" className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-medium text-zinc-500 hover:text-white transition-colors">
            View all →
          </Link>
        </div>

        {/* Papers list */}
        <div className="flex flex-col gap-3">
          {papers.map((paper: any, i: number) => {
            const dateStr = paper.publishedAt
              ? new Date(paper.publishedAt).toLocaleDateString("en-US", { month: "short", year: "numeric" })
              : "";
            const status = statusConfig[paper.status] ?? statusConfig.idea;
            const authorNames = paper.authors?.map((a: any) => a.name ?? a).join(", ") ?? "";

            return (
              <div
                key={paper._id || i}
                className="group relative flex flex-col gap-4 rounded-2xl border border-white/[0.06] bg-[#060606] p-6 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.02] md:flex-row md:items-start"
              >
                {/* Icon */}
                <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03] md:flex group-hover:border-cyan-500/20 transition-colors">
                  <FileText size={17} className="text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                </div>

                {/* Body */}
                <div className="flex-1 min-w-0">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    {/* Status badge */}
                    <span className={`flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-semibold ${status.text} ${status.bg}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
                      {paper.status?.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase())}
                    </span>

                    {/* Tags */}
                    {paper.tags?.slice(0, 2).map((tag: string) => (
                      <span key={tag} className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-zinc-500">
                        {tag}
                      </span>
                    ))}

                    {dateStr && (
                      <span className="flex items-center gap-1 text-[10px] text-zinc-600 ml-auto">
                        <Calendar size={9} /> {dateStr}
                      </span>
                    )}
                  </div>

                  <h3 className="mb-2 text-[16px] font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {paper.title}
                  </h3>

                  {paper.abstract && (
                    <p className="mb-3 text-[13px] leading-relaxed text-zinc-500 line-clamp-2">{paper.abstract}</p>
                  )}

                  {authorNames && (
                    <div className="flex items-center gap-1.5 text-[12px] text-zinc-600">
                      <Users size={11} /> {authorNames}
                    </div>
                  )}
                </div>

                {/* CTA */}
                {paper.slug?.current && (
                  <Link
                    href={`/research/${paper.slug.current}`}
                    className="shrink-0 flex items-center gap-1.5 self-start text-[12px] font-semibold text-cyan-400 opacity-0 transition-all group-hover:opacity-100 md:mt-1"
                  >
                    Read <ExternalLink size={12} />
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Link href="/research" className="text-[13px] font-medium text-zinc-500 hover:text-white transition-colors">
            View all publications →
          </Link>
        </div>
      </div>
    </section>
  );
}
