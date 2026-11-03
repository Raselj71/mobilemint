import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import Glyph from "@/components/Glyph";
import Reveal from "@/components/Reveal";
import { formatPostDate, getPost, getPostSlugs } from "@/lib/blog";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

// The page header already renders the post title as the <h1>, so a `#` heading
// inside the markdown body is demoted to an <h2> to keep a single <h1> per page.
const markdownComponents: Components = {
  h1: ({ children }) => (
    <h2 className="mt-2 font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">{children}</h2>
  ),
  h2: ({ children }) => <h2 className="mt-12 font-display text-xl font-semibold text-ink sm:text-2xl">{children}</h2>,
  h3: ({ children }) => <h3 className="mt-8 font-display text-lg font-semibold text-ink">{children}</h3>,
  p: ({ children }) => <p className="mt-4 leading-relaxed text-ink/70">{children}</p>,
  strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
  ul: ({ children }) => <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-ink/70 marker:text-mint-500">{children}</ul>,
  ol: ({ children }) => <ol className="mt-4 list-decimal space-y-2 pl-6 leading-relaxed text-ink/70 marker:text-mint-600">{children}</ol>,
  blockquote: ({ children }) => (
    <blockquote className="mt-6 rounded-2xl border border-mint-200 border-l-4 border-l-mint-500 bg-mint-50/60 px-5 py-4 [&>p]:mt-0">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="mt-12 border-mint-100" />,
  a: ({ href = "", children }) => {
    const className = "font-medium text-mint-700 underline decoration-mint-300 underline-offset-4 transition-colors hover:text-mint-600";
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={className}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  },
  table: ({ children }) => (
    <div className="mt-6 overflow-x-auto rounded-2xl border border-mint-100 bg-paper shadow-card">
      <table className="w-full min-w-[32rem] border-collapse text-left text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-mint-50 text-ink">{children}</thead>,
  tr: ({ children }) => <tr className="border-b border-mint-100 last:border-b-0">{children}</tr>,
  th: ({ children }) => <th className="px-4 py-3 font-semibold">{children}</th>,
  td: ({ children }) => <td className="px-4 py-3 align-top leading-relaxed text-ink/70">{children}</td>,
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <article className="grain relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-mesh opacity-80" />

      <div className="container-page relative py-12 lg:py-20">
        <Reveal>
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/55 transition-colors hover:text-mint-700">
            <Glyph name="arrow" className="h-4 w-4 rotate-180" />
            All posts
          </Link>
        </Reveal>

        <header className="mt-8 max-w-3xl">
          <Reveal delay={0.06}>
            <time dateTime={post.date} className="eyebrow">
              {formatPostDate(post.date)}
            </time>
            <h1 className="mt-5 font-display text-3xl font-semibold leading-[1.1] text-ink sm:text-4xl lg:text-5xl">{post.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-ink/60">{post.description}</p>
          </Reveal>
        </header>

        <div className="mt-10 max-w-3xl border-t border-mint-100 pt-6">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
