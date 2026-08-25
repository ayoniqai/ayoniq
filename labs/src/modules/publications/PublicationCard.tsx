import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PublicationCardProps {
  id: string;
  title: string;
  venue: string;
  authors: string[];
  year: string;
  paperUrl?: string;
}

export function PublicationCard({
  title,
  venue,
  authors,
  year,
  paperUrl,
}: PublicationCardProps) {
  return (
    <article className="group flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 border-b border-border/50 hover:bg-secondary/20 transition-all duration-300">
      <div className="flex flex-col gap-2 max-w-4xl">
        <h3 className="font-heading text-xl font-bold group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted">
          <span className="font-medium text-foreground">{authors.join(", ")}</span>
        </p>
        <p className="text-sm font-medium text-accent">
          {venue} • {year}
        </p>
      </div>
      
      {paperUrl && (
        <div className="shrink-0">
          <Link
            href={paperUrl}
            className="group/btn inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105"
          >
            Read Paper <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      )}
    </article>
  );
}
