import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, HandHeart, Sparkles, Code, Globe2 } from "lucide-react";
import { FadeIn } from "@/src/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Volunteer | AYONIQ LABS",
  description: "Join AYONIQ LABS as a volunteer and help us build open, safe artificial general intelligence for all of humanity.",
};

export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-[#030509] pt-32 pb-24 selection:bg-indigo-500/30 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/5 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-fuchsia-600/5 blur-[120px] mix-blend-screen" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <FadeIn className="mb-12">
          <Link href="/" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium mb-6 inline-flex items-center transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6">
            Help shape the <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-fuchsia-500">
              future of intelligence.
            </span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            As a nonprofit research organization, AYONIQ LABS relies on a global community of brilliant minds. Whether you're an engineer, researcher, or open-source enthusiast, your contribution matters.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <FadeIn delay={0.1}>
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl h-full hover:bg-white/[0.04] transition-colors">
              <Code className="w-8 h-8 text-blue-400 mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-medium text-white mb-3">Open Source Engineering</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Contribute to our open source repositories. Help us optimize models, build evaluation frameworks, and improve our data pipelines. We welcome pull requests from developers of all skill levels.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl h-full hover:bg-white/[0.04] transition-colors">
              <Sparkles className="w-8 h-8 text-fuchsia-400 mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-medium text-white mb-3">AI Safety & Ethics</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Join our alignment teams in red-teaming models, conducting bias audits, and developing robust safety guardrails to ensure AGI benefits humanity equitably.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl h-full hover:bg-white/[0.04] transition-colors">
              <Globe2 className="w-8 h-8 text-indigo-400 mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-medium text-white mb-3">Community & Outreach</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Help us organize workshops, translate research papers into local languages, and build a diverse, inclusive community around AI research.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl h-full hover:bg-white/[0.04] transition-colors">
              <HandHeart className="w-8 h-8 text-rose-400 mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-medium text-white mb-3">Resource Donation</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Have idle GPU compute? You can volunteer your hardware resources to help run distributed training jobs and support independent researchers worldwide.
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.5} className="bg-gradient-to-br from-indigo-900/20 to-fuchsia-900/20 border border-indigo-500/20 p-8 md:p-12 rounded-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">Ready to contribute?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto font-light">
            Tell us about your background and how you'd like to help. We review volunteer applications on a rolling basis.
          </p>
          <a 
            href="mailto:volunteer@ayoniqlabs.org"
            className="inline-flex items-center justify-center bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-white/90 transition-colors"
          >
            Email us to apply
          </a>
        </FadeIn>

      </div>
    </div>
  );
}
