import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import AppIcon from "@/components/AppIcon";
import BlogCard from "@/components/BlogCard";
import BlogMarkdown from "@/components/BlogMarkdown";
import Glyph from "@/components/Glyph";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import StoreButton from "@/components/StoreButton";
import { getApp } from "@/lib/apps";
import { formatPostDate, getMorePosts, getPost, getPostSlugs } from "@/lib/blog";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    image: { url: `${site.url}/blog/${post.slug}/og.png`, alt: post.title },
    openGraph: {
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [site.name],
    },
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const app = getApp(post.app ?? post.slug);
  const morePosts = getMorePosts(post.slug);
  const url = absoluteUrl(`/blog/${post.slug}`);
  const publisher = {
    "@type": "Organization",
    name: site.name,
    url: absoluteUrl("/"),
    logo: { "@type": "ImageObject", url: `${site.url}/brand/mobilemint-icon-512-square.png` },
  };

  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en",
    ...(post.keywords.length > 0 && { keywords: post.keywords.join(", ") }),
    url,
    image: `${site.url}/blog/${post.slug}/og.png`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: publisher,
    publisher,
    ...(app && {
      about: {
        "@type": "SoftwareApplication",
        name: app.name,
        url: absoluteUrl(`/apps/${app.slug}`),
        operatingSystem: app.platforms.join(", "),
      },
    }),
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <div className="grain relative overflow-hidden">
      <JsonLd data={blogPosting} />
      <JsonLd data={breadcrumbs} />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-mesh opacity-80" />

      <div className="container-page relative pb-8 pt-10 lg:pt-14">
        <Reveal>
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/55 transition-colors hover:text-mint-700">
            <Glyph name="arrow" className="h-4 w-4 rotate-180" />
            All posts
          </Link>
        </Reveal>

        <article>
          <header className="mt-8 max-w-3xl">
            <Reveal delay={0.06}>
              <span className="eyebrow">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-mint-500" />
                The blog
              </span>
              <h1 className="mt-5 font-display text-3xl font-semibold leading-[1.1] text-ink sm:text-4xl lg:text-5xl">{post.title}</h1>
              <p className="mt-5 text-lg leading-relaxed text-ink/60">{post.description}</p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-3 text-sm text-ink/55">
                {app && (
                  <>
                    <Link href={`/apps/${app.slug}`} className="inline-flex items-center gap-2.5 font-semibold text-ink/80 transition-colors hover:text-mint-700">
                      <AppIcon app={app} size={32} />
                      {app.name}
                    </Link>
                    <span aria-hidden="true">·</span>
                  </>
                )}
                <span>By {site.name}</span>
                <span aria-hidden="true">·</span>
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              </div>
            </Reveal>
          </header>

          <div className="mt-10 max-w-3xl border-t border-mint-100 pt-4">
            <BlogMarkdown content={post.content} />
          </div>
        </article>
      </div>

      {app && (
        <section className="container-page relative py-12">
          <Reveal>
            <div className="max-w-3xl rounded-3xl border border-mint-100 bg-paper p-8 shadow-card">
              <div className="flex items-center gap-4">
                <AppIcon app={app} size={68} />
                <div className="min-w-0">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-mint-600">{app.category}</p>
                  <h2 className="mt-1 font-display text-xl font-semibold text-ink">{app.name}</h2>
                </div>
              </div>
              <p className="mt-4 leading-relaxed text-ink/65">{app.short}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <StoreButton href={app.storeUrl} comingSoon={app.status === "coming-soon"} />
                <Link href={`/apps/${app.slug}`} className="btn-ghost">
                  App details
                  <Glyph name="arrow" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      )}

      {morePosts.length > 0 && (
        <section className="container-page relative pb-16 pt-4 lg:pb-20">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink">Keep reading</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {morePosts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08} className="h-full">
                <BlogCard post={p} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
