import { BlogCard } from "./BlogCard";

const DUMMY_POSTS = [
  {
    slug: "why-we-open-sourced-alpha-toolkit",
    title: "Why we open-sourced the Alpha Toolkit",
    excerpt: "Adversarial testing is a community effort. We discuss the engineering challenges of building the Alpha Toolkit and why open-sourcing it accelerates AI safety.",
    author: "Dr. Jane Doe",
    date: "August 15, 2026",
    readTime: "5 min read",
  },
  {
    slug: "engineering-multilingual-retrieval",
    title: "Engineering Multilingual Semantic Retrieval at Scale",
    excerpt: "A deep dive into the vector database architecture and embedding strategies we used to train our new multilingual foundation model.",
    author: "Alan Smith",
    date: "August 02, 2026",
    readTime: "8 min read",
  },
  {
    slug: "the-future-of-iot-cryptography",
    title: "The Future of Cryptography in Resource-Constrained Environments",
    excerpt: "As quantum computing advances, how do we secure edge devices that lack the compute power for traditional post-quantum algorithms?",
    author: "Alice Johnson",
    date: "July 18, 2026",
    readTime: "6 min read",
  }
];

export function BlogListSection() {
  return (
    <div className="flex flex-col gap-6 pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DUMMY_POSTS.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}
