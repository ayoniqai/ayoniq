import { PublicationCard } from "./PublicationCard";

const DUMMY_PUBLICATIONS = [
  {
    id: "pub-1",
    title: "Foundation Models for Multilingual Semantic Search",
    venue: "NeurIPS 2026",
    authors: ["Dr. Jane Doe", "Alan Smith"],
    year: "2026",
    paperUrl: "/research/foundation-models-multilingual"
  },
  {
    id: "pub-2",
    title: "Quantum-Resilient Encryption Protocols for IoT",
    venue: "IEEE Symposium on Security and Privacy",
    authors: ["Alice Johnson", "Bob Williams"],
    year: "2026",
    paperUrl: "#"
  },
  {
    id: "pub-3",
    title: "Quantization Techniques in Edge Computing",
    venue: "ICLR 2025",
    authors: ["Bob Williams", "Dr. Jane Doe"],
    year: "2025",
  }
];

export function PublicationsListSection() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center py-4 border-b border-border">
        <h2 className="text-xl font-bold font-heading">Latest Publications</h2>
        <select className="bg-background border border-border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary">
          <option>Sort by: Newest</option>
          <option>Sort by: Oldest</option>
        </select>
      </div>
      <div className="flex flex-col">
        {DUMMY_PUBLICATIONS.map((pub) => (
          <PublicationCard key={pub.id} {...pub} />
        ))}
      </div>
    </div>
  );
}
