"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Products", href: "/products" },
    { name: "Technology", href: "/technology" },
    { name: "Research", href: "/research" },
    { name: "Developers", href: "/developers" },
    { name: "Updates", href: "/updates" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#050505]/90 backdrop-blur-md">
      <div className="mx-auto flex h-[60px] max-w-[1400px] items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="z-50 flex-shrink-0" onClick={() => setIsOpen(false)}>
          <Image
            src="/watermark.svg"
            alt="AYONIQ"
            width={110}
            height={28}
            className="h-[26px] w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-4 py-2 text-[13px] font-medium transition-colors duration-150 ${
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right — Labs CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="https://labs.ayoniq.org"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-indigo-500/40 bg-indigo-500/10 px-[18px] py-[7px] text-[13px] font-semibold text-indigo-300 transition-all hover:border-indigo-500/70 hover:bg-indigo-500/20 hover:text-indigo-200"
          >
            AYONIQ Labs ↗
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="z-50 flex h-8 w-8 items-center justify-center rounded-md text-zinc-400 transition hover:text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute inset-x-0 top-[60px] border-b border-white/[0.07] bg-[#050505] md:hidden">
          <nav className="flex flex-col px-4 py-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-lg px-3 py-3 text-[15px] font-medium text-zinc-400 transition-colors hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-white/[0.07]">
              <a
                href="https://labs.ayoniq.org"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-4 py-3 text-center text-sm font-semibold text-indigo-300"
                onClick={() => setIsOpen(false)}
              >
                AYONIQ Labs ↗
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}