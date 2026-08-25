import { Brain, Sparkles, Workflow, ShieldCheck } from "lucide-react";

export default function FocusAreasSection() {
  const areas = [
    {
      title: "Foundation Models",
      desc: "Training highly capable, efficient LLMs tailored for reasoning tasks and code generation from the ground up.",
      icon: Brain,
    },
    {
      title: "Multimodal Intelligence",
      desc: "Architectures that natively process and synthesize text, images, and structured datasets without loss of context.",
      icon: Sparkles,
    },
    {
      title: "Autonomous Reasoning",
      desc: "Developing multi-agent systems that can break down complex goals, use tools, and verify their own work.",
      icon: Workflow,
    },
    {
      title: "AI Safety & Alignment",
      desc: "Researching robust alignment techniques, interpretability, and verifiable execution environments.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="border-t border-white/[0.06] bg-[#050505] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Focus Areas</h2>
          <p className="mt-4 text-[2rem] font-bold tracking-tight text-white">What we are solving.</p>
        </div>

        <div className="grid gap-px border border-white/[0.06] rounded-2xl overflow-hidden md:grid-cols-2">
          {areas.map((area) => (
            <div key={area.title} className="group bg-[#030303] p-10 transition-colors hover:bg-white/[0.02]">
              <div className="mb-6 inline-flex rounded-lg bg-white/[0.05] p-3 text-cyan-400">
                <area.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 text-[18px] font-semibold text-zinc-100">{area.title}</h3>
              <p className="text-[15px] leading-relaxed text-zinc-400">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
