export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030509] overflow-hidden">
      
      {/* Animated Rings — placed relative to the outer container */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[260px] w-[260px] animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full border border-indigo-500/20" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[380px] w-[380px] animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full border border-blue-500/10" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[500px] w-[500px] rounded-full border border-indigo-600/5" />
      </div>

      {/* Center Content */}
      <div className="relative flex flex-col items-center">

        {/* Logo Mark */}
        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] shadow-[0_0_40px_rgba(139,92,246,0.4)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <span className="text-4xl font-bold text-white relative z-10">A</span>
        </div>

        {/* Wordmark */}
        <div className="mb-8 flex flex-col items-center gap-1">
          <span className="text-xl font-bold tracking-tight text-white">AYONIQ</span>
          <span className="text-xs tracking-[0.3em] text-white/40 font-medium uppercase">LABS</span>
        </div>

        {/* Progress Bar */}
        <div className="h-[2px] w-52 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-[slide_2s_ease-in-out_infinite_alternate] rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
        </div>
        
        {/* Dots */}
        <div className="mt-5 flex items-center space-x-2">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-500" style={{ animationDelay: '0ms' }} />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-indigo-500" style={{ animationDelay: '150ms' }} />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-purple-500" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}
