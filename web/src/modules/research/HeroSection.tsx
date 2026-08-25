export default function HeroSection() {
  return (
    <section className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
        AYONIQ LABS
      </div>

      <h1 className="animate-fade-up delay-100 mx-auto max-w-[900px] text-[clamp(2.5rem,6.5vw,5rem)] font-extrabold leading-[1.05] tracking-tight text-white">
        Advancing the{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
          Frontier
        </span>
      </h1>

      <p className="animate-fade-up delay-200 mx-auto mt-8 max-w-[600px] text-[17px] leading-[1.7] text-zinc-400">
        AYONIQ LABS is an independent research organization dedicated to pushing the boundaries of machine intelligence, reasoning, and decentralized systems.
      </p>
    </section>
  );
}
