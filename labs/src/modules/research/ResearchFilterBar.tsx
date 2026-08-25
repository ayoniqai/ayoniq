export function ResearchFilterBar() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6 border-b border-border/50 mb-8">
      <div className="flex items-center gap-4 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
        <button className="whitespace-nowrap px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium">
          All Areas
        </button>
        <button className="whitespace-nowrap px-4 py-2 rounded-full border border-border bg-background hover:bg-secondary text-sm font-medium transition-colors">
          Artificial Intelligence
        </button>
        <button className="whitespace-nowrap px-4 py-2 rounded-full border border-border bg-background hover:bg-secondary text-sm font-medium transition-colors">
          Computing
        </button>
        <button className="whitespace-nowrap px-4 py-2 rounded-full border border-border bg-background hover:bg-secondary text-sm font-medium transition-colors">
          Security
        </button>
      </div>
      
      <div className="flex items-center gap-4 w-full md:w-auto">
        <select className="bg-background border border-border rounded-md px-3 py-2 text-sm w-full md:w-[150px] focus:outline-none focus:ring-1 focus:ring-primary">
          <option>Any Year</option>
          <option>2026</option>
          <option>2025</option>
        </select>
        <select className="bg-background border border-border rounded-md px-3 py-2 text-sm w-full md:w-[150px] focus:outline-none focus:ring-1 focus:ring-primary">
          <option>All Status</option>
          <option>Published</option>
          <option>Ongoing</option>
          <option>Preprint</option>
        </select>
      </div>
    </div>
  );
}
