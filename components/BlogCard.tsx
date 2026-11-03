import Link from "next/link";
import AppIcon from "./AppIcon";
import Glyph from "./Glyph";
import { getApp } from "@/lib/apps";
import { formatPostDate, type BlogPost } from "@/lib/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  const app = getApp(post.slug);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-mint-100 bg-paper p-6 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-mint-200 hover:shadow-glow"
    >
      {app && (
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
          style={{ background: `radial-gradient(circle, ${app.accent.from}, transparent 70%)` }}
        />
      )}

      <div className="relative flex items-start justify-between">
        {app ? (
          <AppIcon app={app} size={56} />
        ) : (
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-mint-50 text-mint-700">
            <Glyph name="doc" className="h-6 w-6" />
          </span>
        )}
        <time
          dateTime={post.date}
          className="rounded-full border border-mint-200 bg-mint-50 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-widest text-mint-700"
        >
          {formatPostDate(post.date)}
        </time>
      </div>

      <div className="relative mt-5 flex-1">
        {app && <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-mint-600">{app.category}</p>}
        <h2 className="mt-1.5 line-clamp-3 font-display text-xl font-semibold leading-snug text-ink">{post.title}</h2>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink/60">{post.description}</p>
      </div>

      <div className="relative mt-6 flex items-center justify-between border-t border-mint-100 pt-4 text-sm">
        <span className="text-ink/50">{app ? (app.status === "live" ? "On Google Play" : "Coming soon") : "MobileMint"}</span>
        <span className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-mint-700">
          Read post
          <Glyph name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
