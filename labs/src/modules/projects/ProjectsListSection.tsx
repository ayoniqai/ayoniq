import { ProjectCard } from "./ProjectCard";

const DUMMY_PROJECTS = [
  {
    slug: "alpha-toolkit",
    title: "Alpha Toolkit",
    description: "An open-source toolkit for evaluating large language model robustness and fairness against adversarial attacks.",
    tags: ["Python", "Machine Learning", "Security"],
    stars: 1240,
    githubUrl: "https://github.com/ayoniq",
    status: "Active",
  },
  {
    slug: "tensor-lite",
    title: "TensorLite Edge",
    description: "Highly optimized inference engine for deploying quantized neural networks on edge devices with minimal memory footprint.",
    tags: ["C++", "Edge Computing", "Hardware"],
    stars: 856,
    githubUrl: "https://github.com/ayoniq",
    status: "Active",
  },
  {
    slug: "secure-iot-protocol",
    title: "Secure IoT Comm",
    description: "A reference implementation of quantum-resilient cryptographic protocols for low-bandwidth IoT sensor networks.",
    tags: ["Rust", "Cryptography", "IoT"],
    stars: 342,
    githubUrl: "https://github.com/ayoniq",
    status: "Beta",
  }
];

export function ProjectsListSection() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center py-4 border-b border-border">
        <h2 className="text-xl font-bold font-heading">All Projects</h2>
        <div className="flex gap-4">
          <select className="bg-background border border-border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary hidden sm:block">
            <option>All Technologies</option>
            <option>Python</option>
            <option>Rust</option>
            <option>C++</option>
          </select>
          <select className="bg-background border border-border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary">
            <option>Sort by: Stars</option>
            <option>Sort by: Recently Updated</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DUMMY_PROJECTS.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </div>
  );
}
