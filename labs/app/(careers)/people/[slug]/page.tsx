import { notFound } from "next/navigation";
import { getPersonBySlug, getPeople } from "@/src/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { FadeIn } from "@/src/components/ui/FadeIn";

export async function generateStaticParams() {
  const people = getPeople();
  return people.map((p) => ({
    slug: p.slug,
  }));
}

export default async function PersonDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const person = getPersonBySlug(slug);

  if (!person) {
    notFound();
  }

  return (
    <div className="bg-[#030509] min-h-screen text-white pb-24">
      <div className="relative bg-[#0B0F19] border-b border-white/5 py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] opacity-50 mix-blend-screen"></div>
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] opacity-50 mix-blend-screen"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <Link href="/people" className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/60 hover:text-white hover:bg-white/10 mb-12 transition-all backdrop-blur-sm group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Team
              </Link>
              
              <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                  <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#030509] overflow-hidden flex-shrink-0 flex items-center justify-center text-white/20 font-bold text-5xl border-2 border-white/10">
                    {person.data.avatarUrl ? (
                      <Image src={person.data.avatarUrl} alt={person.data.name} width={192} height={192} className="object-cover" />
                    ) : (
                      <span>{person.data.name.charAt(0)}</span>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">
                    {person.data.name}
                  </h1>
                  <div className="inline-flex items-center px-3 py-1.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium mb-6 w-fit">
                    {person.data.role}
                  </div>
                  <p className="text-xl text-white/60 leading-relaxed max-w-2xl">
                    {person.data.bio}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {person.content && person.content.trim().length > 0 && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <FadeIn delay={0.2}>
              <article className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-a:text-blue-400 hover:prose-a:text-blue-300">
                <MDXRemote source={person.content} />
              </article>
            </FadeIn>
          </div>
        </div>
      )}
    </div>
  );
}
