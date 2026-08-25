import { Server, CheckCircle2 } from "lucide-react";

export default function CloudPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-24 text-center">
        <Server className="mx-auto mb-6 text-blue-400" size={64} />
        <h1 className="text-5xl font-extrabold md:text-7xl">AYONIQ Cloud</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          Global edge infrastructure built for speed, security, and infinite scalability.
        </p>
      </section>
      <section className="mx-auto max-w-4xl px-6 pb-32">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            "Global Edge CDN",
            "Serverless Compute",
            "Object Storage",
            "DDoS Protection"
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <CheckCircle2 className="text-blue-400" />
              <span className="font-semibold">{feature}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
