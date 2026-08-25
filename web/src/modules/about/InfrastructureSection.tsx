export default function InfrastructureSection() {
  const infraItems = [
    "Compute",
    "Data",
    "Training",
    "Inference",
    "Evaluation",
    "Developer Infrastructure",
    "AI Platforms",
  ];

  return (
    <section className="border-t border-white/[0.06] bg-[#050505] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-400">AI Infrastructure</h2>
          <p className="mt-4 text-[2rem] font-bold tracking-tight text-white">
            Building the infrastructure behind intelligence
          </p>
          <p className="mt-6 text-[17px] leading-[1.8] text-zinc-400">
            Advanced AI requires more than models. It requires compute, data, training systems, inference infrastructure, evaluation, and developer platforms.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {infraItems.map((item) => (
            <div
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.02] px-6 py-3 text-[14px] font-medium text-zinc-300 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
