import { Beaker, Server, Cpu, Globe2 } from "lucide-react";

export default function WhatWeDoSection() {
  const pillars = [
    {
      title: "AI Research",
      desc: "Exploring new approaches to learning, reasoning, multimodal intelligence, and foundation models.",
      icon: Beaker,
    },
    {
      title: "AI Infrastructure",
      desc: "Building the systems required to train, evaluate, operate, and deploy intelligent models at scale.",
      icon: Server,
    },
    {
      title: "AI Systems & Models",
      desc: "Developing models, agents, developer tools, and intelligent software systems.",
      icon: Cpu,
    },
    {
      title: "Open Technology",
      desc: "Building open-source technologies and sharing knowledge that expands access to AI.",
      icon: Globe2,
    },
  ];

  return (
    <section className="border-t border-white/[0.06] bg-[#050505] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">What We Do</h2>
          <p className="mt-4 text-[2rem] font-bold tracking-tight text-white">Four pillars of innovation.</p>
        </div>

        <div className="grid gap-px border border-white/[0.06] rounded-2xl overflow-hidden md:grid-cols-2">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="group bg-[#030303] p-10 transition-colors hover:bg-white/[0.02]">
              <div className="mb-6 inline-flex rounded-lg bg-white/[0.05] p-3 text-zinc-300">
                <pillar.icon size={20} strokeWidth={1.8} />
              </div>
              <h3 className="mb-3 text-[18px] font-semibold text-zinc-100">{pillar.title}</h3>
              <p className="text-[15px] leading-relaxed text-zinc-400">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
