import Link from "next/link";
import AppIcon from "./AppIcon";
import Glyph from "./Glyph";
import type { App } from "@/lib/apps";

export default function AppCard({ app }: { app: App }) {
  return (
    <Link
      href={`/apps/${app.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-mint-100 bg-paper p-6 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-mint-200 hover:shadow-glow"
    >
      {/* accent wash */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
        style={{ background: `radial-gradient(circle, ${app.accent.from}, transparent 70%)` }}
      />

      <div className="relative flex items-start justify-between">
        <AppIcon app={app} size={68} />
        {app.status === "coming-soon" ? (
          <span className="rounded-full border border-mint-200 bg-mint-50 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-widest text-mint-700">
            Soon
          </span>
        ) : (
          <span className="flex items-center gap-1 rounded-full bg-mint-50 px-3 py-1 text-[0.7rem] font-semibold text-mint-700">
            <Glyph name="star" className="h-3.5 w-3.5" strokeWidth={0} fill="currentColor" />
            {app.rating}
          </span>
        )}
      </div>

      <div className="relative mt-5 flex-1">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-mint-600">{app.category}</p>
        <h3 className="mt-1.5 font-display text-2xl font-semibold text-ink">{app.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/60">{app.short}</p>
      </div>

      <div className="relative mt-6 flex items-center justify-between border-t border-mint-100 pt-4 text-sm">
        <span className="text-ink/50">
          {app.status === "live" ? `${app.installs} installs` : "In development"}
        </span>
        <span className="inline-flex items-center gap-1.5 font-semibold text-mint-700">
          View
          <Glyph name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
