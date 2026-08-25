import { FadeIn } from "@/src/components/ui/FadeIn";

export function ContactHeroSection() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen -translate-x-1/2 translate-y-1/2" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        <FadeIn>
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-rose-400 text-xs font-bold uppercase tracking-widest mb-8">
            Connect With Us
          </div>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-tight text-white">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">Touch.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed font-light">
            Have a question about our research, want to collaborate, or need support? We'd love to hear from you.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
