"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const categories = ["All", "Engineering", "AI & Research", "Product", "Company", "Tutorials"];

export default function CategoryFilter() {
  const [active, setActive] = useState("All");

  return (
    <div className="mx-auto mb-16 flex max-w-7xl items-center justify-center gap-2 overflow-x-auto px-6 py-4 scrollbar-hide">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`relative whitespace-nowrap rounded-full px-5 py-2.5 text-[13px] font-medium transition-colors ${
            active === cat ? "text-black" : "text-zinc-400 hover:text-white hover:bg-white/5"
          }`}
        >
          {active === cat && (
            <motion.div
              layoutId="activeCategory"
              className="absolute inset-0 -z-10 rounded-full bg-white"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          {cat}
        </button>
      ))}
    </div>
  );
}
