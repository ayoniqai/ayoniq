export function PeopleHeroSection() {
  return (
    <section className="relative bg-[#0B0F19] py-24 md:py-32 border-b border-white/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] opacity-50 mix-blend-screen"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] opacity-50 mix-blend-screen"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium mb-8 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          The Team
        </div>
        
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">
          Our People
        </h1>
        
        <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-2xl mx-auto">
          Meet the researchers, engineers, and scientists driving innovation at AYONIQ LABS.
        </p>
      </div>
    </section>
  );
}
