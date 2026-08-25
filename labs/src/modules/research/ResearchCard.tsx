import Link from "next/link";
import { FileText, Code, Database } from "lucide-react";

interface ResearchCardProps {
  slug: string;
  title: string;
  abstract: string;
  area: string;
  authors: string[];
  date: string;
  status: string;
  hasPaper?: boolean;
  hasCode?: boolean;
  hasDataset?: boolean;
}

export function ResearchCard({
  slug,
  title,
  abstract,
  area,
  authors,
  date,
  status,
  hasPaper,
  hasCode,
  hasDataset,
}: ResearchCardProps) {
  return (
    <article className="group flex flex-col gap-4 p-6 border border-border rounded-lg bg-card hover:border-primary/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="flex justify-between items-start gap-4">
        <span className="text-xs font-semibold text-accent uppercase tracking-wider">{area}</span>
        <span className={`text-xs px-2 py-1 rounded-full border transition-colors ${
          status === 'Published' ? 'bg-primary/10 text-primary border-primary/20' : 'bg-secondary text-muted border-border'
        }`}>
          {status}
        </span>
      </div>
      
      <div>
        <h3 className="font-heading text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
          <Link href={`/research/${slug}`}>
            {title}
          </Link>
        </h3>
        <p className="text-muted text-sm line-clamp-3">
          {abstract}
        </p>
      </div>

      <div className="text-sm text-muted">
        <span className="font-medium text-foreground">{authors.join(", ")}</span> • {date}
      </div>

      <div className="mt-auto pt-4 border-t border-border flex items-center gap-4">
        {hasPaper && <span className="text-xs flex items-center gap-1.5 font-medium text-foreground"><FileText className="w-4 h-4 text-muted group-hover:text-primary transition-colors" /> Paper</span>}
        {hasCode && <span className="text-xs flex items-center gap-1.5 font-medium text-foreground"><Code className="w-4 h-4 text-muted group-hover:text-primary transition-colors" /> Code</span>}
        {hasDataset && <span className="text-xs flex items-center gap-1.5 font-medium text-foreground"><Database className="w-4 h-4 text-muted group-hover:text-primary transition-colors" /> Dataset</span>}
      </div>
    </article>
  );
}
