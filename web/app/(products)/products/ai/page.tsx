import { Cpu, CheckCircle2 } from "lucide-react";

export default function AIPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-24 text-center">
        <Cpu className="mx-auto mb-6 text-cyan-400" size={64} />
        <h1 className="text-5xl font-extrabold md:text-7xl">AYONIQ AI</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          Deploy intelligent autonomous agents and LLMs securely in your enterprise environment.
        </p>
      </section>
      <section className="mx-auto max-w-4xl px-6 pb-32">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            "Custom LLM Fine-tuning",
            "Autonomous Workflow Agents",
            "Data Privacy & Security",
            "Real-time Analytics"
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <CheckCircle2 className="text-cyan-400" />
              <span className="font-semibold">{feature}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
