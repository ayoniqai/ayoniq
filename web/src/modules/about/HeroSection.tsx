export default function HeroSection() {
  return (
    <section className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="animate-fade-up mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
        AI RESEARCH <span className="h-1 w-1 rounded-full bg-white/30" /> INFRASTRUCTURE <span className="h-1 w-1 rounded-full bg-white/30" /> OPEN TECHNOLOGY
      </div>

      <h1 className="animate-fade-up delay-100 mx-auto max-w-[800px] text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-white">
        Pioneering the Next Era of Intelligence
      </h1>

      <p className="animate-fade-up delay-200 mx-auto mt-8 max-w-[600px] text-[17px] leading-[1.7] text-zinc-400">
        AYONIQ is an Artificial Intelligence research and deployment company advancing AI through research, infrastructure, intelligent systems, and open technology.
      </p>
    </section>
  );
}
