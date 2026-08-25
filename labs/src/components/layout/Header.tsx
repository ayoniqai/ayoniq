"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, Heart, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Research", href: "/research" },
  { name: "Projects", href: "/projects" },
  { name: "Publications", href: "/publications" },
  { name: "People", href: "/people" },
  { name: "Datasets", href: "/datasets" },
  { name: "About", href: "/about" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 border-b ${
        scrolled 
          ? "bg-[#030509]/80 backdrop-blur-xl border-white/10 shadow-lg" 
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center shrink-0">
          <Link href="/" className="flex items-center space-x-2 group" onClick={handleLinkClick}>
            <div className="w-9 h-9 flex items-center justify-center">
              <img 
                src="/brand/icone.svg" 
                alt="AYONIQ LABS Logo" 
                className="w-full h-full scale-[1.7] origin-center group-hover:scale-[1.8] transition-transform duration-300" 
              />
            </div>
            <div className="flex flex-col leading-none justify-center ml-1">
              <span className="font-bold text-[17px] tracking-tight text-white mb-1">AYONIQ</span>
              <span className="text-[10px] tracking-[0.25em] text-white/50 font-medium uppercase">LABS</span>
            </div>
          </Link>
        </div>
          
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link 
                key={link.name}
                href={link.href} 
                className={`relative py-2 text-[13px] font-medium transition-colors hover:text-white ${isActive ? "text-white font-semibold" : "text-white/60"}`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Search Input */}
          <div className="hidden lg:flex items-center gap-2 bg-white/5 border border-white/10 hover:border-white/20 transition-all rounded-full py-1.5 px-4 focus-within:border-white/30 focus-within:bg-white/10 group">
            <Search className="w-4 h-4 text-white/50 group-focus-within:text-white/80 transition-colors" strokeWidth={2} />
            <input 
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none text-sm text-white placeholder:text-white/40 w-32 focus:w-48 transition-all duration-300"
            />
            <kbd className="hidden xl:inline-block px-1.5 py-0.5 text-[10px] font-medium text-white/40 bg-white/10 rounded border border-white/10">⌘K</kbd>
          </div>
          
          {/* Donate Button */}
          <Link
            href="/donate"
            className="hidden lg:flex h-9 items-center justify-center rounded-full bg-white px-5 text-[13px] font-medium text-black transition-all hover:bg-white/90 hover:scale-105"
          >
            <Heart className="w-4 h-4 mr-2 text-rose-500" strokeWidth={2.5} fill="currentColor" />
            Donate
          </Link>

          {/* Mobile menu toggle */}
          <button 
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors border border-white/10 bg-[#0B0F19]/50 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-x-0 top-20 z-40 bg-[#030509]/95 backdrop-blur-xl lg:hidden overflow-y-auto border-t border-white/10"
          >
            <div className="flex flex-col p-6 h-full text-white">
              
              <nav className="flex flex-col gap-2 mt-4">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link 
                        href={link.href} 
                        onClick={handleLinkClick}
                        className={`flex items-center justify-between p-4 rounded-lg text-lg font-medium transition-colors ${
                          isActive ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {link.name}
                        <ChevronRight className="w-5 h-5 text-white/30" />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.hr 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="my-8 border-white/10" 
              />

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8"
              >
                <Link
                  href="/donate"
                  onClick={handleLinkClick}
                  className="flex w-full h-14 items-center justify-center rounded-lg bg-[#7C3AED] px-4 py-2 text-lg font-medium text-white shadow transition-colors hover:bg-[#6D28D9]"
                >
                  <Heart className="w-5 h-5 mr-3" />
                  Donate to AYONIQ LABS
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
