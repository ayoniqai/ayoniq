import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface JobCardProps {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
}

export function JobCard({
  id,
  title,
  department,
  location,
  type,
}: JobCardProps) {
  return (
    <article className="group flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 border border-white/10 rounded-lg bg-[#030509] hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-col gap-2">
        <h3 className="font-heading text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
          <Link href={`/careers/${id}`}>
            {title}
          </Link>
        </h3>
        <div className="flex flex-wrap items-center gap-2 text-sm text-white/60">
          <span className="font-medium text-white">{department}</span>
          <span>•</span>
          <span>{location}</span>
          <span>•</span>
          <span>{type}</span>
        </div>
      </div>
      
      <div className="shrink-0 mt-4 md:mt-0">
        <Link
          href={`/careers/${id}`}
          className="group/btn inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-transform hover:bg-blue-700 hover:scale-105"
        >
          View Role <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
