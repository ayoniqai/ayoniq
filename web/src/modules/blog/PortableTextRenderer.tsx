import { PortableText, PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';

const components: PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="relative my-8 aspect-video w-full overflow-hidden rounded-2xl bg-white/5">
          {/* Temporary placeholder for image since we don't have sanity image builder set up in this component */}
          <div className="flex h-full w-full items-center justify-center text-zinc-500">
            [Image: {value.asset._ref}]
          </div>
        </div>
      );
    },
  },
  block: {
    h1: ({ children }) => <h1 className="mb-6 mt-12 text-4xl font-bold text-white">{children}</h1>,
    h2: ({ children }) => <h2 className="mb-4 mt-10 text-3xl font-semibold text-white">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-4 mt-8 text-2xl font-medium text-white">{children}</h3>,
    normal: ({ children }) => <p className="mb-6 text-[17px] leading-relaxed text-zinc-300">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-cyan-500 bg-white/5 p-6 text-lg italic text-zinc-300 rounded-r-xl">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mb-6 ml-6 list-disc space-y-2 text-[17px] text-zinc-300">{children}</ul>,
    number: ({ children }) => <ol className="mb-6 ml-6 list-decimal space-y-2 text-[17px] text-zinc-300">{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
    em: ({ children }) => <em className="italic text-zinc-400">{children}</em>,
    link: ({ children, value }) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline decoration-cyan-400/30 underline-offset-4 transition-colors hover:decoration-cyan-400">
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="rounded bg-white/10 px-1.5 py-0.5 text-[14px] text-cyan-300">
        {children}
      </code>
    ),
  },
};

export default function PortableTextRenderer({ value }: { value: any }) {
  return (
    <div className="prose prose-invert max-w-none">
      <PortableText value={value} components={components} />
    </div>
  );
}
