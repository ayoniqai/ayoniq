import { BrainCircuit, Network, Fingerprint } from "lucide-react";

export default function AISection() {
  const capabilities = [
    {
      title: "Large Language Models",
      desc: "High-performance foundation models designed for reasoning, code generation, and complex analysis.",
      icon: BrainCircuit,
    },
    {
      title: "Multimodal Processing",
      desc: "Systems capable of natively understanding and synthesizing text, images, and structured data.",
      icon: Network,
    },
    {
      title: "Autonomous Agents",
      desc: "Intelligent systems capable of multi-step reasoning, tool use, and secure environment execution.",
      icon: Fingerprint,
    },
  ];

  return (
    <section className="border-t border-white/[0.06] bg-[#050505] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-400">Intelligent Systems</h2>
            <p className="mt-4 text-[2.2rem] font-bold tracking-tight text-white">
              Cognitive Architecture
            </p>
            <p className="mt-6 text-[16px] leading-[1.8] text-zinc-400">
              AYONIQ develops advanced machine learning architectures capable of deep reasoning and autonomous execution. Our systems are built to understand context, adapt to complex environments, and augment human capabilities securely.
            </p>
          </div>

          <div className="flex w-full flex-col gap-6 lg:max-w-md">
            {capabilities.map((item, i) => (
              <div key={i} className="flex gap-5 rounded-2xl border border-white/[0.06] bg-[#030303] p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-indigo-400">
                  <item.icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="mb-2 text-[15.5px] font-semibold text-white">{item.title}</h3>
                  <p className="text-[14px] leading-relaxed text-zinc-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
