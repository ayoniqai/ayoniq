export default function ResearchSection() {
  const researchAreas = [
    "Foundation Models",
    "Large Language Models",
    "Reasoning",
    "Multimodal AI",
    "AI Safety & Alignment",
  ];

  return (
    <section className="border-t border-white/[0.06] bg-[#030303] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-pink-400">Research</h2>
            <p className="mt-4 text-[2rem] font-bold tracking-tight text-white">
              Research is at the heart of AYONIQ.
            </p>
            <p className="mt-6 text-[16px] leading-[1.8] text-zinc-400">
              We explore the frontier of artificial intelligence, seeking to solve fundamental challenges in machine learning, reasoning, and multimodal understanding to build capable and beneficial AI systems.
            </p>
          </div>

          {/* ASCII-style Tree visual representing research areas */}
          <div className="w-full max-w-sm rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 font-mono text-[13px] text-zinc-300">
            <div className="mb-4 font-semibold text-white">AI Research</div>
            <div className="relative border-l border-white/20 pl-6 ml-2">
              {researchAreas.map((area, index) => (
                <div key={area} className="relative mb-3 last:mb-0">
                  <div className="absolute -left-6 top-1/2 w-4 border-t border-white/20" />
                  <span className="text-zinc-400 transition-colors hover:text-white">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
