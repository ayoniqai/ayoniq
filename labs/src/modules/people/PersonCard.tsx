import Image from "next/image";
import Link from "next/link";

interface PersonCardProps {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
  twitter?: string;
  github?: string;
  linkedin?: string;
}

export function PersonCard({
  id,
  name,
  role,
  bio,
  imageUrl,
  twitter,
  github,
  linkedin,
}: PersonCardProps) {
  return (
    <div className="group relative flex flex-col p-6 rounded-2xl bg-[#0B0F19] border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-2 h-full overflow-hidden">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center gap-5 h-full">
        <Link href={`/people/${id}`} className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center bg-[#030509] border-2 border-white/5 group-hover:border-blue-500/30 transition-colors duration-300">
          {imageUrl ? (
            <Image src={imageUrl} alt={name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
          ) : (
            <span className="text-4xl text-white/20 font-bold group-hover:text-blue-400 transition-colors">{name.charAt(0)}</span>
          )}
        </Link>
        
        <div className="flex flex-col gap-1.5">
          <Link href={`/people/${id}`}>
            <h3 className="font-heading text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{name}</h3>
          </Link>
          <p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{role}</p>
        </div>
        
        <p className="text-sm text-white/50 leading-relaxed line-clamp-3">
          {bio}
        </p>

        <div className="flex items-center gap-3 mt-auto pt-6 border-t border-white/5 w-full justify-center">
          {twitter && (
            <a href={twitter} target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-white/40 hover:bg-blue-500/10 hover:text-blue-400 transition-all">
              <span className="sr-only">Twitter</span>
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-white/40 hover:bg-white/10 hover:text-white transition-all">
              <span className="sr-only">GitHub</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-white/40 hover:bg-blue-500/10 hover:text-blue-500 transition-all">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
