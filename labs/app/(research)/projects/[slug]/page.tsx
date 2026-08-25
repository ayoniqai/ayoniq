import { notFound } from "next/navigation";
import { getProjectBySlug, getProjects } from "@/src/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft, Users, Tag, Calendar, Activity } from "lucide-react";
import { format } from "date-fns";
import { FadeIn } from "@/src/components/ui/FadeIn";

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-[#030509] min-h-screen text-white pb-24">
      {/* Header Section */}
      <div className="bg-[#0B0F19] border-b border-white/5 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link href="/projects" className="inline-flex items-center text-sm font-medium text-white/40 hover:text-blue-400 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
            
            <div className="flex items-center gap-2 mb-6">
              <span className={`w-2 h-2 rounded-full ${project.data.status === 'Active' ? 'bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]' : 'bg-white/40'}`}></span>
              <span className={`text-[10px] font-bold uppercase tracking-[0.1em] ${project.data.status === 'Active' ? 'text-green-400' : 'text-white/40'}`}>
                {project.data.status}
              </span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-4xl">
              {project.data.title}
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl leading-relaxed mb-10">
              {project.data.summary}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/60 font-medium">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {format(new Date(project.data.date), "MMMM d, yyyy")}
              </div>
              {project.data.researchers && (
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  {project.data.researchers} Contributors
                </div>
              )}
              {project.data.researchArea && (
                <div className="flex items-center text-white/80 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold">
                  <Tag className="w-3.5 h-3.5 mr-1.5" />
                  {project.data.researchArea}
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <article className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-a:text-blue-400 hover:prose-a:text-blue-300">
              <MDXRemote source={project.content} />
            </article>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
