const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

export default function OpenTechSection() {
  return (
    <section className="border-t border-white/[0.06] bg-[#030303] py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-400">Open Technology</h2>
        
        <p className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight text-zinc-100">
          Open technology accelerates progress.
        </p>
        
        <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.8] text-zinc-400">
          We build and support open technologies that enable researchers, developers, and builders to experiment, learn, and create.
        </p>

        <a
          href="https://github.com/ayoniqai"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-10 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-[13.5px] font-medium text-white transition-all hover:bg-white/[0.08]"
        >
          <GithubIcon className="h-4 w-4" />
          Explore GitHub
        </a>
      </div>
    </section>
  );
}
