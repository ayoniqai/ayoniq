import { Globe, ArrowRight } from "lucide-react";

export default function GlobalSection() {
  return (
    <section className="border-t border-white/[0.06] bg-[#050505] py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-400">From Bangladesh to the World</h2>
        
        <p className="text-[clamp(1.5rem,3.5vw,2.2rem)] font-bold tracking-tight text-white">
          Built from Bangladesh. Built for the world.
        </p>

        <p className="mx-auto mt-8 max-w-2xl text-[16.5px] leading-[1.8] text-zinc-400">
          Bangladesh has a growing generation of engineers, researchers, and builders. AYONIQ exists to help turn that potential into globally relevant AI research, infrastructure, and technology.
        </p>

        <div className="mt-16 flex items-center justify-center gap-4 text-[13px] font-semibold uppercase tracking-widest text-zinc-300 sm:gap-8">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2">
            Bangladesh
          </div>
          <ArrowRight className="text-zinc-600" size={16} />
          <div className="flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-indigo-300">
            <Globe size={14} className="mb-[1px]" /> Global AI Ecosystem
          </div>
        </div>
      </div>
    </section>
  );
}
