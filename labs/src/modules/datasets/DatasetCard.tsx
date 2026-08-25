import Link from "next/link";
import { Database, Box } from "lucide-react";

interface DatasetCardProps {
  slug: string;
  title: string;
  description: string;
  size: string;
  format: string;
  license: string;
  type: "Dataset" | "Model";
}

export function DatasetCard({
  slug,
  title,
  description,
  size,
  format,
  license,
  type,
}: DatasetCardProps) {
  return (
    <article className="group flex flex-col gap-4 p-6 border border-border rounded-lg bg-card hover:border-primary/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
      <div className="flex justify-between items-start gap-4">
        <h3 className="font-heading text-xl font-bold group-hover:text-primary transition-colors">
          <Link href={`/datasets/${slug}`} className="hover:underline underline-offset-4 line-clamp-2">
            {title}
          </Link>
        </h3>
        <span className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border bg-secondary text-foreground font-medium shrink-0">
          {type === "Dataset" ? <Database className="w-3.5 h-3.5" /> : <Box className="w-3.5 h-3.5" />}
          {type}
        </span>
      </div>
      
      <p className="text-sm text-muted flex-grow line-clamp-3">
        {description}
      </p>

      <div className="mt-4 pt-4 border-t border-border grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
        <div className="flex flex-col">
          <span className="text-xs text-muted uppercase tracking-wider font-semibold">Size</span>
          <span className="font-medium text-foreground">{size}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-muted uppercase tracking-wider font-semibold">Format</span>
          <span className="font-medium text-foreground">{format}</span>
        </div>
        <div className="flex flex-col col-span-2">
          <span className="text-xs text-muted uppercase tracking-wider font-semibold">License</span>
          <span className="font-medium text-foreground">{license}</span>
        </div>
      </div>
    </article>
  );
}
