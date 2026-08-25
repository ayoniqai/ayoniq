import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen, FlaskConical, Target, BrainCircuit } from "lucide-react";
import { FadeIn } from "@/src/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Research Fellowship | AYONIQ LABS",
  description: "Join the AYONIQ LABS Research Fellowship program to tackle fundamental challenges in artificial general intelligence alongside world-class researchers.",
};

export default function FellowshipPage() {
  return (
    <div className="min-h-screen bg-[#030509] pt-32 pb-24 selection:bg-indigo-500/30 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/5 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/5 blur-[120px] mix-blend-screen" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <FadeIn className="mb-12">
          <Link href="/" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium mb-6 inline-flex items-center transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="text-sm font-medium tracking-widest text-indigo-400 uppercase mb-4">
            Academic Programs
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6">
            AYONIQ LABS <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-fuchsia-500">
              Research Fellowship
            </span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            A fully-funded program for exceptional researchers, post-docs, and PhD candidates to pursue independent research in AGI alignment, architecture, and ethics.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <FadeIn delay={0.1}>
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl h-full hover:bg-white/[0.04] transition-colors group">
              <FlaskConical className="w-8 h-8 text-blue-400 mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <h3 className="text-xl font-medium text-white mb-3">Independent Research</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Design and lead your own research agenda. Access our state-of-the-art compute clusters and work entirely on open-source, non-profit initiatives.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl h-full hover:bg-white/[0.04] transition-colors group">
              <BrainCircuit className="w-8 h-8 text-fuchsia-400 mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <h3 className="text-xl font-medium text-white mb-3">World-Class Mentorship</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Collaborate directly with senior scientists and engineers at AYONIQ LABS. Participate in weekly reading groups and internal technical seminars.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl h-full hover:bg-white/[0.04] transition-colors group">
              <BookOpen className="w-8 h-8 text-indigo-400 mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <h3 className="text-xl font-medium text-white mb-3">Open Publication</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                We believe in open science. Fellows are highly encouraged and supported to publish their findings in top-tier conferences (NeurIPS, ICLR, ICML).
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl h-full hover:bg-white/[0.04] transition-colors group">
              <Target className="w-8 h-8 text-emerald-400 mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <h3 className="text-xl font-medium text-white mb-3">Funding & Grants</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Fellows receive a highly competitive stipend, generous compute budget, and travel grants for international AI research conferences.
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.5} className="bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-3xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent pointer-events-none" />
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-4 relative z-10">2026 Cohort Applications</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto font-light relative z-10">
            Applications for the Winter 2026 Research Fellowship cohort are currently open. We welcome applicants from all technical disciplines.
          </p>
          <a 
            href="mailto:fellowship@ayoniqlabs.org"
            className="inline-flex items-center justify-center bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-white/90 transition-colors relative z-10"
          >
            Submit your Proposal
          </a>
        </FadeIn>

      </div>
    </div>
  );
}
