import type { Metadata } from "next";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { getAllPosts } from "@/lib/blog";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const description =
  "Read detailed blog posts about every MobileMint app — features, privacy, and how they stay on your device.";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description,
  path: "/blog",
  image: { url: `${site.url}/blog/og.png`, alt: "The MobileMint blog" },
});

export default function BlogPage() {
  const posts = getAllPosts();

  const blog = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${site.name} Blog`,
    description,
    url: absoluteUrl("/blog"),
    inLanguage: "en",
    publisher: { "@type": "Organization", name: site.name, url: absoluteUrl("/") },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: absoluteUrl(`/blog/${post.slug}`),
      datePublished: post.date,
    })),
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
    ],
  };

  return (
    <div className="grain relative overflow-hidden">
      <JsonLd data={blog} />
      <JsonLd data={breadcrumbs} />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-mesh opacity-80" />

      <div className="container-page relative py-16 lg:py-24">
        <Reveal>
          <span className="eyebrow">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-mint-500" />
            The blog
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">
            The story behind every app.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/60">
            One plain-language post per app — what it does, what it collects, and how it stays on your device.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08} className="h-full">
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-16 text-center text-ink/55">
            Looking for the apps themselves?{" "}
            <Link href="/apps" className="font-semibold text-mint-700 hover:text-mint-600">
              Browse all apps →
            </Link>
          </p>
        </Reveal>
      </div>
    </div>
  );
}
