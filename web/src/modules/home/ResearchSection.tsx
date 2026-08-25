import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { client } from "@/core/lib/sanity";
import { FEATURED_RESEARCH_QUERY } from "@/core/lib/queries";
import ResearchClient from "./ResearchClient";

const fallbackPapers = [
  {
    title: "Scaling Laws for Autoregressive Generative Modeling",
    authors: ["A. Rahman", "S. Chen", "M. Patel"],
    category: "Foundation Models",
    date: "Aug 2026",
    link: "#",
    color: "#c084fc",
  },
  {
    title: "Zero-Shot Reasoning in Multi-Modal Agents",
    authors: ["L. Wang", "E. Wright"],
    category: "Autonomous Agents",
    date: "Jul 2026",
    link: "#",
    color: "#818cf8",
  },
  {
    title: "Efficient Edge Inference via Quantized KV Cache",
    authors: ["J. Doe", "K. Smith"],
    category: "Systems & Optimization",
    date: "Jun 2026",
    link: "#",
    color: "#38bdf8",
  },
];

export default async function ResearchSection() {
  let papers: any[] = [];
  try {
    papers = await client.fetch(FEATURED_RESEARCH_QUERY);
  } catch {
    papers = [];
  }

  const displayPapers = papers.length > 0 ? papers.map(p => ({
    title: p.title,
    authors: p.authors || [],
    category: p.category,
    date: p.publishedAt ? new Date(p.publishedAt).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "",
    link: p.pdfUrl || "#",
    color: p.category === "Foundation Models" ? "#c084fc" : p.category === "Autonomous Agents" ? "#818cf8" : "#38bdf8",
  })) : fallbackPapers;

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 relative">
      <ResearchClient papers={displayPapers} />
    </section>
  );
}

