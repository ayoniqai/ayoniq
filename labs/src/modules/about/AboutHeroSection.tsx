import { FadeIn } from "@/src/components/ui/FadeIn";

export function AboutHeroSection() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
        <FadeIn>
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sky-400 text-xs font-bold uppercase tracking-widest mb-8">
            The AYONIQ LABS Story
          </div>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-tight text-white">
            Researching the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
              frontiers of AGI.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed font-light">
            AYONIQ LABS is a nonprofit Artificial Intelligence research organization. Our mission is to ensure that artificial general intelligence benefits all of humanity.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
