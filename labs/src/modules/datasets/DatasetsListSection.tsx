import { DatasetCard } from "./DatasetCard";

const DUMMY_DATASETS = [
  {
    slug: "multilingual-semantic-pairs-v1",
    title: "Multilingual Semantic Pairs v1",
    description: "1.2 million human-annotated sentence pairs across 50+ languages, optimized for training dense retrieval models.",
    size: "4.2 GB",
    format: "JSONL, Parquet",
    license: "CC BY-SA 4.0",
    type: "Dataset" as const,
  },
  {
    slug: "ayoniq-retrieval-model-base",
    title: "AYONIQ Retrieval Base",
    description: "Pre-trained foundation model for zero-shot dense retrieval. Fine-tuned on the Multilingual Semantic Pairs dataset.",
    size: "850 MB",
    format: "Safetensors, PyTorch",
    license: "Apache 2.0",
    type: "Model" as const,
  },
  {
    slug: "iot-network-traffic-2026",
    title: "IoT Network Traffic Analysis 2026",
    description: "Anonymized network traffic logs from 10,000 simulated IoT devices, used for anomaly detection and security research.",
    size: "12.5 GB",
    format: "PCAP, CSV",
    license: "CC BY-NC 4.0",
    type: "Dataset" as const,
  }
];

export function DatasetsListSection() {
  return (
    <div className="flex flex-col gap-6 pt-12">
      <div className="flex justify-between items-center py-4 border-b border-border">
        <h2 className="text-xl font-bold font-heading">Available Resources</h2>
        <div className="flex gap-4">
          <select className="bg-background border border-border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary hidden sm:block">
            <option>All Types</option>
            <option>Datasets</option>
            <option>Models</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DUMMY_DATASETS.map((item) => (
          <DatasetCard key={item.slug} {...item} />
        ))}
      </div>
    </div>
  );
}
