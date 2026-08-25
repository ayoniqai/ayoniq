import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorAvatar?: string;
  date: string;
  readTime: string;
}

export function BlogCard({
  slug,
  title,
  excerpt,
  author,
  authorAvatar,
  date,
  readTime,
}: BlogCardProps) {
  return (
    <article className="group flex flex-col gap-4 p-6 border border-white/10 rounded-lg bg-[#030509] hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 hover:-translate-y-1 h-full">
      <div>
        <h3 className="font-heading text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
          <Link href={`/blog/${slug}`} className="hover:underline underline-offset-4 line-clamp-2">
            {title}
          </Link>
        </h3>
        <p className="text-sm text-white/60 line-clamp-3 mb-4">
          {excerpt}
        </p>
      </div>

      <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#0B0F19] flex items-center justify-center text-[10px] font-bold text-white/40 overflow-hidden">
            {authorAvatar ? (
              <Image src={authorAvatar} alt={author} width={24} height={24} className="object-cover" />
            ) : (
              author.charAt(0)
            )}
          </div>
          <span className="text-sm font-medium text-white">{author}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-white/40 font-medium">
          {date} • <Clock className="w-3.5 h-3.5" /> {readTime}
        </div>
      </div>
    </article>
  );
}
