import { ResearchCard } from "./ResearchCard";

const DUMMY_RESEARCH = [
  {
    slug: "foundation-models-multilingual",
    title: "Foundation Models for Multilingual Semantic Search",
    abstract: "Exploring efficient architectures to bridge language gaps in large-scale retrieval systems without compromising performance on resource-constrained devices.",
    area: "Artificial Intelligence",
    authors: ["Dr. Jane Doe", "Alan Smith"],
    date: "August 2026",
    status: "Published",
    hasPaper: true,
    hasCode: true,
  },
  {
    slug: "quantum-resilient-encryption",
    title: "Quantum-Resilient Encryption Protocols for IoT",
    abstract: "A novel lightweight encryption protocol designed to withstand quantum attacks while operating within the tight computational bounds of Internet of Things devices.",
    area: "Security",
    authors: ["Alice Johnson"],
    date: "July 2026",
    status: "Preprint",
    hasPaper: true,
    hasDataset: true,
  },
  {
    slug: "edge-compute-quantization",
    title: "Quantization Techniques in Edge Computing",
    abstract: "Analyzing the trade-offs of extreme quantization (4-bit and 2-bit) in convolutional neural networks deployed on edge hardware.",
    area: "Computing",
    authors: ["Bob Williams", "Dr. Jane Doe"],
    date: "Ongoing",
    status: "Ongoing",
    hasCode: true,
  }
];

export function ResearchListSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {DUMMY_RESEARCH.map((research) => (
        <ResearchCard key={research.slug} {...research} />
      ))}
    </div>
  );
}
