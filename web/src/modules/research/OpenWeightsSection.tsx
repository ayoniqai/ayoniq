import { Database, Download } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

export default function OpenWeightsSection() {
  return (
    <section className="border-t border-white/[0.06] bg-[#050505] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row-reverse lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-400">Open Resources</h2>
            <p className="mt-4 text-[2.2rem] font-bold tracking-tight text-white">
              Open Weights & Datasets
            </p>
            <p className="mt-6 text-[16px] leading-[1.8] text-zinc-400">
              We believe in open science. AYONIQ LABS regularly releases open-source model weights, high-quality training datasets, and rigorous evaluation benchmarks to empower the global research community.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-white/[0.08]">
                <GithubIcon className="h-4 w-4" /> View on Hugging Face
              </a>
            </div>
          </div>

          <div className="grid w-full gap-4 sm:grid-cols-2 lg:max-w-[500px]">
            <div className="flex flex-col rounded-2xl border border-white/[0.06] bg-[#030303] p-6 transition-colors hover:bg-white/[0.02]">
              <Database className="mb-4 text-zinc-500" size={20} />
              <h3 className="mb-2 text-[15px] font-semibold text-white">AYONIQ-Text-v1 (8B)</h3>
              <p className="mb-4 text-[13px] text-zinc-400">Our flagship 8 billion parameter reasoning model. Available under Apache 2.0.</p>
              <div className="mt-auto flex items-center gap-1.5 text-[12px] font-medium text-teal-400">
                <Download size={12} /> 12GB Weights
              </div>
            </div>
            
            <div className="flex flex-col rounded-2xl border border-white/[0.06] bg-[#030303] p-6 transition-colors hover:bg-white/[0.02]">
              <Database className="mb-4 text-zinc-500" size={20} />
              <h3 className="mb-2 text-[15px] font-semibold text-white">AYONIQ-Fin-Corpus</h3>
              <p className="mb-4 text-[13px] text-zinc-400">A cleaned, multi-lingual financial reasoning dataset spanning 50M tokens.</p>
              <div className="mt-auto flex items-center gap-1.5 text-[12px] font-medium text-teal-400">
                <Download size={12} /> Download Dataset
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
