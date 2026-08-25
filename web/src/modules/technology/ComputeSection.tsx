import { Server, Globe, Zap } from "lucide-react";

export default function ComputeSection() {
  const infra = [
    {
      title: "Global Edge Network",
      desc: "Distributed compute nodes across 50+ regions ensuring sub-10ms latency worldwide.",
      icon: Globe,
    },
    {
      title: "High-Performance Compute",
      desc: "Optimized clusters for large-scale training and high-throughput model inference.",
      icon: Server,
    },
    {
      title: "Serverless Architecture",
      desc: "Auto-scaling infrastructure that instantly adapts to computational demands without overhead.",
      icon: Zap,
    },
  ];

  return (
    <section className="border-t border-white/[0.06] bg-[#030303] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-16 lg:flex-row-reverse lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-400">Global Infrastructure</h2>
            <p className="mt-4 text-[2.2rem] font-bold tracking-tight text-white">
              Scalable Compute
            </p>
            <p className="mt-6 text-[16px] leading-[1.8] text-zinc-400">
              Intelligence requires robust physical foundations. AYONIQ operates a globally distributed compute network optimized for intensive AI workloads, low-latency financial routing, and massive data processing.
            </p>
          </div>

          <div className="flex w-full flex-col gap-6 lg:max-w-md">
            {infra.map((item, i) => (
              <div key={i} className="flex gap-5 rounded-2xl border border-white/[0.06] bg-[#050505] p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-blue-400">
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
