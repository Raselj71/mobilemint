import type { Metadata } from "next";
import AppCard from "@/components/AppCard";
import Reveal from "@/components/Reveal";
import { apps } from "@/lib/apps";

export const metadata: Metadata = {
  title: "Apps",
  description: "Browse every app from the MobileMint studio — habit tracking, live radio, shared expenses and more.",
};

export default function AppsPage() {
  const live = apps.filter((a) => a.status === "live");
  const soon = apps.filter((a) => a.status === "coming-soon");

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
            Every MobileMint app, in one place.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/60">
            A small, growing collection — each one made to be fast, private, and a pleasure to use.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {live.map((app, i) => (
            <Reveal key={app.slug} delay={i * 0.08}>
              <AppCard app={app} />
            </Reveal>
          ))}
        </div>

        {soon.length > 0 && (
          <div className="mt-16">
            <Reveal>
              <h2 className="font-display text-xl font-semibold text-ink/70">In the workshop</h2>
            </Reveal>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {soon.map((app, i) => (
                <Reveal key={app.slug} delay={i * 0.08}>
                  <AppCard app={app} />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
