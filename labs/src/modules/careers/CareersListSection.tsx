import { JobCard } from "./JobCard";

const DUMMY_JOBS = [
  {
    id: "ai-research-scientist",
    title: "AI Research Scientist (Foundation Models)",
    department: "Research",
    location: "Remote / Dhaka",
    type: "Full-time",
  },
  {
    id: "edge-computing-engineer",
    title: "Edge Computing Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: "open-source-developer-advocate",
    title: "Open Source Developer Advocate",
    department: "Community",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: "security-researcher",
    title: "Security Researcher (Cryptography)",
    department: "Research",
    location: "Dhaka",
    type: "Contract",
  }
];

export function CareersListSection() {
  return (
    <div className="flex flex-col gap-6 py-12">
      <div className="flex justify-between items-center py-4 border-b border-white/10">
        <h2 className="text-xl font-bold font-heading text-white">Open Positions</h2>
        <div className="flex gap-4">
          <select className="bg-[#030509] border border-white/10 rounded-md px-3 py-1.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500 hidden sm:block">
            <option>All Departments</option>
            <option>Research</option>
            <option>Engineering</option>
            <option>Community</option>
          </select>
        </div>
      </div>
      
      <div className="flex flex-col gap-4">
        {DUMMY_JOBS.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    </div>
  );
}
