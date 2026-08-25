import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { BRAND_CORE_STATEMENT, BRAND_MISSION } from "../../../../web/src/core/constants/brand";

export function Footer() {
  return (
    <footer className="bg-[#10141D] text-white pt-16 md:pt-20 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="flex items-center space-x-2 mb-6 group">
              <div className="w-8 h-8 flex items-center justify-center">
                <img
                  src="/brand/icone.svg"
                  alt="AYONIQ LABS Logo"
                  className="w-full h-full scale-[1.7] origin-center group-hover:scale-[1.8] transition-transform duration-300"
                />
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-xl tracking-tight">AYONIQ</span>
                <span className="text-xl tracking-widest text-[#7C3AED] font-light">LABS</span>
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-8 max-w-sm">
              {BRAND_CORE_STATEMENT} {BRAND_MISSION}
            </p>
            <div className="flex items-center gap-3">
              <a href="https://github.com/AYOMIQLABS" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
              </a>
              <a href="https://x.com/AYOMIQLABS" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
              </a>
              <a href="https://x.com/AYOMIQLABS" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
              </a>
              <a href="https://linkedin.com/company/ayoniqlabs" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="https://youtube.com/@AYONIQLABS" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
            </div>
            {/* The horizontal bar under description in original image - simulating that */}
            <div className="w-10 h-0.5 bg-[#7C3AED] mt-8 rounded-full opacity-50"></div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-2">
            <div className="flex flex-col gap-4">
              <div className="relative pb-2 mb-2">
                <h4 className="font-bold text-[15px] tracking-wide">Explore</h4>
                <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#7C3AED] rounded-full opacity-80" />
              </div>
              <Link href="/research" className="flex items-center text-[13px] text-white/60 hover:text-white transition-colors group">
                Research <ChevronRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#7C3AED]" />
              </Link>
              <Link href="/projects" className="flex items-center text-[13px] text-white/60 hover:text-white transition-colors group">
                Projects <ChevronRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#7C3AED]" />
              </Link>
              <Link href="/publications" className="flex items-center text-[13px] text-white/60 hover:text-white transition-colors group">
                Publications <ChevronRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#7C3AED]" />
              </Link>
              <Link href="/datasets" className="flex items-center text-[13px] text-white/60 hover:text-white transition-colors group">
                Datasets <ChevronRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#7C3AED]" />
              </Link>
              <Link href="/updates" className="flex items-center text-[13px] text-white/60 hover:text-white transition-colors group">
                Updates <ChevronRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#7C3AED]" />
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <div className="relative pb-2 mb-2">
                <h4 className="font-bold text-[15px] tracking-wide">About</h4>
                <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#7C3AED] rounded-full opacity-80" />
              </div>
              <Link href="/about" className="flex items-center text-[13px] text-white/60 hover:text-white transition-colors group">
                Our Mission <ChevronRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#7C3AED]" />
              </Link>
              <Link href="/people" className="flex items-center text-[13px] text-white/60 hover:text-white transition-colors group">
                Our Team <ChevronRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#7C3AED]" />
              </Link>
              <Link href="/careers" className="flex items-center text-[13px] text-white/60 hover:text-white transition-colors group">
                Careers <ChevronRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#7C3AED]" />
              </Link>
              <Link href="/contact" className="flex items-center text-[13px] text-white/60 hover:text-white transition-colors group">
                Contact <ChevronRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#7C3AED]" />
              </Link>
              <Link href="privacy" className="flex items-center text-[13px] text-white/60 hover:text-white transition-colors group">
                Privacy Policy <ChevronRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#7C3AED]" />
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <div className="relative pb-2 mb-2">
                <h4 className="font-bold text-[15px] tracking-wide">Get Involved</h4>
                <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#7C3AED] rounded-full opacity-80" />
              </div>
              <Link href="/donate" className="flex items-center text-[13px] text-white/60 hover:text-white transition-colors group">
                Donate <ChevronRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#7C3AED]" />
              </Link>
              <Link href="/fellowship" className="flex items-center text-[13px] text-white/60 hover:text-white transition-colors group">
                Research Fellowship <ChevronRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#7C3AED]" />
              </Link>
              <Link href="/internship" className="flex items-center text-[13px] text-white/60 hover:text-white transition-colors group">
                Internship <ChevronRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#7C3AED]" />
              </Link>
              <Link href="/collaborate" className="flex items-center text-[13px] text-white/60 hover:text-white transition-colors group">
                Collaborate <ChevronRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#7C3AED]" />
              </Link>
              <Link href="/volunteer" className="flex items-center text-[13px] text-white/60 hover:text-white transition-colors group">
                Volunteer <ChevronRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#7C3AED]" />
              </Link>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3 flex flex-col pt-2">
            <div className="relative pb-2 mb-2">
              <h4 className="font-bold text-[15px] tracking-wide">Stay updated</h4>
              <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#7C3AED] rounded-full opacity-80" />
            </div>
            <p className="text-[13px] text-white/60 mb-6">Subscribe to our newsletter</p>
            <form className="relative flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#1A1F2E]/50 border border-white/10 rounded-lg py-3 px-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#7C3AED] transition-colors"
              />
              <button
                type="submit"
                className="absolute right-1.5 w-9 h-9 flex items-center justify-center bg-[#7C3AED] hover:bg-[#6D28D9] rounded-md text-white transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} AYONIQ LABS. All rights reserved.</p>
          <p>A nonprofit research organization</p>
        </div>

      </div>
    </footer>
  );
}