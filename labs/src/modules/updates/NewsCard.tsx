import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

interface NewsCardProps {
  slug: string;
  title: string;
  summary: string;
  date: string;
  category: string;
}

export function NewsCard({
  slug,
  title,
  summary,
  date,
  category,
}: NewsCardProps) {
  return (
    <article className="group flex flex-col gap-4 p-6 border border-border rounded-lg bg-card hover:border-primary/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
      <div className="flex justify-between items-center gap-4">
        <span className="text-xs font-semibold text-accent uppercase tracking-wider">{category}</span>
        <span className="flex items-center gap-1.5 text-xs text-muted font-medium whitespace-nowrap">
          <Calendar className="w-3.5 h-3.5" />
          {date}
        </span>
      </div>
      
      <div>
        <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          <Link href={`/updates/${slug}`} className="hover:underline underline-offset-4 line-clamp-2">
            {title}
          </Link>
        </h3>
        <p className="text-sm text-muted line-clamp-3">
          {summary}
        </p>
      </div>

      <div className="mt-auto pt-4 border-t border-border">
        <Link href={`/updates/${slug}`} className="group/link flex w-fit items-center text-sm font-medium text-primary hover:underline underline-offset-4">
          Read Full Story <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
