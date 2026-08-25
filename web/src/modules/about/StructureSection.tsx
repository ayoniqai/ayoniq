export default function StructureSection() {
  return (
    <section className="border-t border-white/[0.06] bg-[#030303] py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Corporate Structure</h2>
        <p className="mb-16 text-[2rem] font-bold tracking-tight text-white">Our Organization</p>
        
        <div className="flex flex-col gap-8 md:flex-row md:items-stretch md:justify-center">
          <div className="flex-1 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center">
            <h3 className="mb-2 text-[18px] font-bold text-white">AYONIQ LIMITED</h3>
            <p className="mb-2 text-[13px] font-semibold text-zinc-300 uppercase tracking-wider">Artificial Intelligence Research & Deployment Company</p>
            <p className="text-[14px] text-zinc-400">Researches, builds, and deploys AI technologies, infrastructure, systems, and products.</p>
          </div>
          <div className="flex-1 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-8 text-center">
            <h3 className="mb-2 text-[18px] font-bold text-indigo-100">AYONIQ LABS</h3>
            <p className="mb-2 text-[13px] font-semibold text-indigo-300 uppercase tracking-wider">Independent Non-profit Research Organization</p>
            <p className="text-[14px] text-indigo-200/70">Conducts and publishes research in artificial intelligence, computing, and emerging technologies.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
