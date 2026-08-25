import Link from "next/link";
import { Star, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  stars?: number;
  githubUrl?: string;
  status: string;
}

export function ProjectCard({
  slug,
  title,
  description,
  tags,
  stars,
  githubUrl,
  status,
}: ProjectCardProps) {
  return (
    <article className="group flex flex-col gap-4 p-6 border border-border rounded-lg bg-card hover:border-primary/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
      <div className="flex justify-between items-start">
        <h3 className="font-heading text-xl font-bold group-hover:text-primary transition-colors">
          <Link href={`/projects/${slug}`} className="hover:underline underline-offset-4">
            {title}
          </Link>
        </h3>
        <span className={`text-xs px-2 py-1 rounded-full border transition-colors ${
          status === 'Active' ? 'bg-primary/10 text-primary border-primary/20' : 'bg-secondary text-muted border-border'
        }`}>
          {status}
        </span>
      </div>
      
      <p className="text-sm text-muted flex-grow">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map(tag => (
          <span key={tag} className="text-xs font-medium px-2 py-1 bg-secondary rounded-md text-secondary-foreground">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
        {stars !== undefined && (
          <div className="flex items-center gap-1.5 text-sm text-muted">
            <Star className="w-4 h-4 text-muted group-hover:text-yellow-500 transition-colors" />
            <span className="font-medium text-foreground">{stars}</span>
          </div>
        )}
        
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors text-foreground">
            GitHub <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </article>
  );
}
