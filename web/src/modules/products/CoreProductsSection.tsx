import { BrainCircuit, CreditCard, CloudLightning, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CoreProductsSection() {
  const products = [
    {
      id: "ai",
      name: "AYONIQ AI",
      tagline: "Enterprise Intelligence",
      desc: "Integrate high-performance reasoning models and autonomous agents directly into your applications via a unified API.",
      icon: BrainCircuit,
      color: "text-indigo-400",
      bg: "bg-indigo-400/10",
      border: "hover:border-indigo-500/50",
    },
    {
      id: "pay",
      name: "AYONIQ PAY",
      tagline: "Global Payment Infrastructure",
      desc: "An open-source financial routing engine for global payouts, currency conversion, and fraud prevention.",
      icon: CreditCard,
      color: "text-rose-400",
      bg: "bg-rose-400/10",
      border: "hover:border-rose-500/50",
    },
    {
      id: "cloud",
      name: "AYONIQ CLOUD",
      tagline: "Edge Compute",
      desc: "Deploy functions and workloads globally with sub-10ms latency on our highly optimized edge network.",
      icon: CloudLightning,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "hover:border-blue-500/50",
    },
  ];

  return (
    <section className="border-t border-white/[0.06] bg-[#050505] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">The Ecosystem</h2>
          <p className="mt-4 text-[2rem] font-bold tracking-tight text-white">Our Core Products.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className={`group flex flex-col rounded-2xl border border-white/[0.06] bg-[#030303] p-8 transition-colors ${product.border}`}>
              <div className={`mb-8 inline-flex h-12 w-12 items-center justify-center rounded-xl ${product.bg} ${product.color}`}>
                <product.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="mb-1 text-[13px] font-semibold uppercase tracking-wider text-zinc-500">{product.tagline}</h3>
              <h4 className="mb-4 text-[22px] font-bold text-white">{product.name}</h4>
              <p className="mb-8 text-[14.5px] leading-relaxed text-zinc-400 flex-grow">{product.desc}</p>
              
              <Link href={`/products/${product.id}`} className={`mt-auto flex items-center gap-2 text-[14px] font-semibold ${product.color}`}>
                Explore {product.name} <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
