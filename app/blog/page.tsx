import type { Metadata } from "next";
import Link from "next/link";
import Glyph from "@/components/Glyph";
import Reveal from "@/components/Reveal";
import { formatPostDate, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read detailed blog posts about every MobileMint app — features, privacy, and how they stay on your device.",
};

export default function BlogPage() {
  const blogPosts = getAllPosts();

  return (
    <div className="grain relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-mesh opacity-80" />

      <div className="container-page relative py-16 lg:py-24">
        <Reveal>
          <span className="eyebrow">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-mint-500" />
            The collection
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">
            Every MobileMint app, in one place — Blog
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/60">
            A growing collection of detailed posts about each MobileMint app, including features, privacy details, and how they stay on your device.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-2xl border border-mint-100 bg-paper p-5 shadow-card">
                <time dateTime={post.date} className="text-[0.65rem] font-semibold uppercase tracking-widest text-ink/40">
                  {formatPostDate(post.date)}
                </time>
                <h2 className="mt-2 font-display text-base font-semibold leading-snug text-ink">
                  <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-mint-700">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink/60">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-medium text-mint-700 transition-colors hover:text-mint-600"
                >
                  Read blog post
                  <Glyph name="arrow" className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        {blogPosts.length > 0 && (
          <div className="mt-16 text-center">
            <p className="text-ink/60">
              {" "}
              <Link href="/apps" className="font-medium text-mint-600 hover:text-mint-700 transition-colors">
                Browse all apps →
              </Link>{" "}
              or view{' '}
              <Link href="/" className="font-medium text-mint-600 hover:text-mint-700 transition-colors">
                the homepage
              </Link>
              {" "}
              for more.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}