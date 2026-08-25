import { Code2, ShieldCheck, Zap } from "lucide-react";

export default function PlatformFeaturesSection() {
  const features = [
    {
      title: "Developer-First APIs",
      desc: "Clean, well-documented REST and GraphQL APIs with SDKs available in major languages.",
      icon: Code2,
    },
    {
      title: "Enterprise Security",
      desc: "SOC2 compliant infrastructure with end-to-end encryption and zero-trust networking.",
      icon: ShieldCheck,
    },
    {
      title: "Real-time Telemetry",
      desc: "Comprehensive dashboard for monitoring latency, usage, and system health in real time.",
      icon: Zap,
    },
  ];

  return (
    <section className="border-t border-white/[0.06] bg-[#030303] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">The Platform</h2>
          <p className="mt-4 text-[2rem] font-bold tracking-tight text-white">Built for Scale and Security.</p>
        </div>

        <div className="grid gap-px border border-white/[0.06] rounded-2xl overflow-hidden md:grid-cols-3">
          {features.map((feature, i) => (
            <div key={i} className="bg-[#050505] p-10 transition-colors hover:bg-white/[0.02]">
              <div className="mb-6 inline-flex rounded-xl bg-white/[0.03] p-4 text-purple-400">
                <feature.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 text-[17px] font-semibold text-white">{feature.title}</h3>
              <p className="text-[14.5px] leading-relaxed text-zinc-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
