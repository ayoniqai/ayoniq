import { getDatasets } from "@/src/lib/content";
import Link from "next/link";
import { FadeIn } from "@/src/components/ui/FadeIn";
import { Database, Download, FileJson, Scale } from "lucide-react";
import { format } from "date-fns";

export default function DatasetsPage() {
  const datasets = getDatasets();

  return (
    <div className="bg-[#030509] text-white min-h-screen pb-24">
      
      <section className="bg-[#0B0F19] py-24 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6">Open Datasets</h1>
            <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
              High-quality, open-source datasets curated by AYONIQ LABS to accelerate AI research.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {datasets.map((dataset, idx) => (
              <FadeIn key={dataset.slug} delay={idx * 0.1}>
                <Link 
                  href={`/datasets/${dataset.slug}`}
                  className="flex flex-col p-6 border border-white/10 rounded-xl bg-[#030509] hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 h-full hover:-translate-y-1 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded bg-blue-500/10 flex items-center justify-center">
                      <Database className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.1em]">{dataset.data.size}</span>
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors text-white">{dataset.data.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed flex-grow mb-6">
                    {dataset.data.summary}
                  </p>
                  
                  <div className="flex flex-col gap-3 mt-auto pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs text-white/40 font-medium">
                      <div className="flex items-center">
                        <FileJson className="w-3.5 h-3.5 mr-1.5" />
                        {dataset.data.format}
                      </div>
                      <div className="flex items-center">
                        <Scale className="w-3.5 h-3.5 mr-1.5" />
                        {dataset.data.license}
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}
