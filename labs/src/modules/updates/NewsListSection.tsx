import { NewsCard } from "./NewsCard";

const DUMMY_NEWS = [
  {
    slug: "launching-ayoniq-labs",
    title: "Introducing AYONIQ LABS: An Open Research Platform",
    summary: "Today we are officially launching AYONIQ LABS to share our internal research, tools, and datasets with the global community.",
    date: "August 18, 2026",
    category: "Announcement",
  },
  {
    slug: "new-multilingual-dataset-released",
    title: "New 1.2M Sample Multilingual Dataset Released",
    summary: "We have open-sourced a high-quality, human-annotated dataset covering 50+ languages to aid in developing unbiased foundation models.",
    date: "August 10, 2026",
    category: "Release",
  },
  {
    slug: "collaboration-with-global-universities",
    title: "AYONIQ LABS Partners with Leading Universities",
    summary: "We are partnering with three major academic institutions to accelerate research in quantum-resilient encryption.",
    date: "July 28, 2026",
    category: "Partnership",
  },
  {
    slug: "alpha-toolkit-v2-update",
    title: "Alpha Toolkit v2.0 Now Available",
    summary: "The latest update brings significantly faster evaluation pipelines and support for multi-modal model analysis.",
    date: "July 15, 2026",
    category: "Update",
  }
];

export function NewsListSection() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center py-4 border-b border-border">
        <h2 className="text-xl font-bold font-heading">Latest Updates</h2>
        <div className="flex gap-4">
          <select className="bg-background border border-border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary hidden sm:block">
            <option>All Categories</option>
            <option>Announcement</option>
            <option>Release</option>
            <option>Partnership</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DUMMY_NEWS.map((news) => (
          <NewsCard key={news.slug} {...news} />
        ))}
      </div>
    </div>
  );
}
