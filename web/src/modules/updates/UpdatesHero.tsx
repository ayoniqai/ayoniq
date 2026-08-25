"use client";

import { Newspaper } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = [
  { name: "All Updates", href: "/updates" },
  { name: "Research", href: "/updates/research" },
  { name: "Products", href: "/updates/products" },
  { name: "Company", href: "/updates/company" },
];

export default function UpdatesHero() {
  const pathname = usePathname();

  return (
    <section className="mx-auto max-w-4xl px-6 pb-16 pt-28">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05]">
          <Newspaper size={18} className="text-zinc-300" strokeWidth={1.8} />
        </div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">Updates</p>
      </div>
      <h1 className="text-[2.8rem] font-extrabold tracking-tight leading-tight text-white">
        Latest Updates &<br />Announcements
      </h1>
      <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-zinc-400">
        Product updates, company announcements, research milestones, and press coverage from AYONIQ.
      </p>

      <div className="mt-12 flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2">
        {categories.map((cat) => {
          const isActive = pathname === cat.href;
          return (
            <Link
              key={cat.name}
              href={cat.href}
              className={`relative whitespace-nowrap rounded-full px-5 py-2.5 text-[13px] font-medium transition-colors ${
                isActive ? "text-black" : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeUpdateCategory"
                  className="absolute inset-0 -z-10 rounded-full bg-white"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {cat.name}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
