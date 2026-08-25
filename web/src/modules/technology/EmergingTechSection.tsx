import { Lock, Cpu, Link2 } from "lucide-react";

export default function EmergingTechSection() {
  const tech = [
    {
      title: "Advanced Cryptography",
      desc: "Post-quantum secure encryption protocols protecting sensitive data pipelines.",
      icon: Lock,
    },
    {
      title: "Decentralized Verification",
      desc: "Trustless execution environments for verifying AI model outputs and data integrity.",
      icon: Link2,
    },
    {
      title: "Neuromorphic Engineering",
      desc: "Researching next-generation hardware paradigms mimicking biological efficiency.",
      icon: Cpu,
    },
  ];

  return (
    <section className="border-t border-white/[0.06] bg-[#050505] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-400">Next-Generation Protocols</h2>
            <p className="mt-4 text-[2.2rem] font-bold tracking-tight text-white">
              Emerging Technology
            </p>
            <p className="mt-6 text-[16px] leading-[1.8] text-zinc-400">
              Beyond today&apos;s state-of-the-art, AYONIQ LABS explores theoretical and applied technologies that will define the next decade of computing, focusing on security, trust, and radical efficiency.
            </p>
          </div>

          <div className="flex w-full flex-col gap-6 lg:max-w-md">
            {tech.map((item, i) => (
              <div key={i} className="flex gap-5 rounded-2xl border border-white/[0.06] bg-[#030303] p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-teal-400">
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
