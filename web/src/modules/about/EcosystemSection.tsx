export default function EcosystemSection() {
  return (
    <section className="border-t border-white/[0.06] bg-[#050505] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Ecosystem</h2>
          <p className="mt-4 text-[2rem] font-bold tracking-tight text-white">How we are structured.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* AYONIQ */}
          <div className="rounded-2xl border border-white/[0.06] bg-[#030303] p-8">
            <h3 className="mb-1 text-[18px] font-bold text-white">AYONIQ</h3>
            <p className="mb-6 text-[13px] font-medium text-zinc-500 uppercase tracking-wider">AI Research & Technology Company</p>
            <div className="text-[14px] text-zinc-400">
              <span className="mb-3 block font-semibold text-zinc-300">Builds:</span>
              <ul className="space-y-2">
                <li>AI systems</li>
                <li>Infrastructure</li>
                <li>Models</li>
                <li>Products</li>
                <li>Platforms</li>
                <li>Open technologies</li>
              </ul>
            </div>
          </div>

          {/* AYONIQ LABS */}
          <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-8 relative overflow-hidden">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-2xl" />
            <h3 className="mb-1 text-[18px] font-bold text-indigo-100">AYONIQ LABS</h3>
            <p className="mb-6 text-[13px] font-medium text-indigo-400 uppercase tracking-wider">Independent Non-profit AI Research Organization</p>
            <div className="text-[14px] text-indigo-200/70">
              <span className="mb-3 block font-semibold text-indigo-200">Researches:</span>
              <ul className="space-y-2">
                <li>Artificial Intelligence</li>
                <li>Machine Learning</li>
                <li>Computing</li>
                <li>Emerging Technologies</li>
                <li>AI Safety</li>
                <li>New Models</li>
              </ul>
            </div>
          </div>

          {/* AYONIQ COMMUNITY */}
          <div className="rounded-2xl border border-white/[0.06] bg-[#030303] p-8">
            <h3 className="mb-1 text-[18px] font-bold text-white">AYONIQ COMMUNITY</h3>
            <p className="mb-6 text-[13px] font-medium text-zinc-500 uppercase tracking-wider">AI Community</p>
            <div className="text-[14px] text-zinc-400">
              <span className="mb-3 block font-semibold text-zinc-300">Connects:</span>
              <ul className="space-y-2">
                <li>Researchers</li>
                <li>Developers</li>
                <li>Students</li>
                <li>Builders</li>
                <li>Creators</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
