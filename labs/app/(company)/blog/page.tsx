import { BlogHeroSection } from "@/src/modules/blog/BlogHeroSection";
import { BlogListSection } from "@/src/modules/blog/BlogListSection";

export default function BlogPage() {
  return (
    <div className="bg-[#030509] text-white min-h-screen flex flex-col gap-8 pb-20">
      <BlogHeroSection />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BlogListSection />
      </div>
    </div>
  );
}
