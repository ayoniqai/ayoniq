import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HeroFeatures() {
  const features = [
    {
      title: "Open",
      highlight: "TECHNOLOGY",
      desc: "Building open technologies that expand access to AI and accelerate innovation.",
      linkText: "Learn More",
      href: "/technology",
    },
    {
      title: "AI",
      highlight: "& AUTOMATION",
      desc: "Building intelligent systems and automation for real-world impact.",
      linkText: "Our AI Research",
      href: "/research",
    },
    {
      title: "Global",
      highlight: "INFRASTRUCTURE",
      desc: "Scalable, secure, and reliable infrastructure for the future.",
      linkText: "View Infrastructure",
      href: "/technology",
    },
    {
      title: "Research",
      highlight: "DRIVEN",
      desc: "Pushing the boundaries of AI through continuous research.",
      linkText: "Explore Research",
      href: "/research",
    },
  ];

  return (
    <section className="w-full bg-[#050505] py-20 px-6 border-t border-white/5 relative z-10">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col border-l border-white/10 pl-6">
            <h3 className="text-xl md:text-2xl font-light text-zinc-300 leading-tight">
              {feature.title} <br />
              <span className="font-bold text-white tracking-wide">{feature.highlight}</span>
            </h3>
            <p className="mt-4 text-sm text-zinc-400 flex-1 leading-relaxed">
              {feature.desc}
            </p>
            <Link 
              href={feature.href}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group w-fit"
            >
              {feature.linkText}
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
