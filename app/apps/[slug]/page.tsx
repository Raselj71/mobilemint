import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Glyph from "@/components/Glyph";
import Reveal from "@/components/Reveal";
import AppIcon from "@/components/AppIcon";
import PhoneMockup from "@/components/PhoneMockup";
import StoreButton from "@/components/StoreButton";
import { apps, getApp, getAppSlugs } from "@/lib/apps";

export function generateStaticParams() {
  return getAppSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const app = getApp(params.slug);
  if (!app) return {};
  return {
    title: `${app.name} — ${app.tagline}`,
    description: app.short,
  };
}

export default function AppDetailPage({ params }: { params: { slug: string } }) {
  const app = getApp(params.slug);
  if (!app) notFound();

  const meta = [
    { label: "Category", value: app.category },
    { label: "Platform", value: app.platforms.join(", ") },
    { label: "Version", value: app.version },
    { label: app.status === "live" ? "Installs" : "Status", value: app.status === "live" ? app.installs! : "Coming soon" },
  ];

  return (
    <article>
      {/* hero */}
      <section
        className="grain relative overflow-hidden"
        style={{ background: `linear-gradient(180deg, ${app.accent.from}1f, transparent 60%)` }}
      >
        <div className="container-page relative pb-12 pt-10 lg:pt-14">
          <Reveal>
            <Link href="/apps" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/55 transition-colors hover:text-mint-700">
              <Glyph name="arrow" className="h-4 w-4 rotate-180" />
              All apps
            </Link>
          </Reveal>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1fr_auto]">
            <div>
              <Reveal>
                <div className="flex items-center gap-4">
                  <AppIcon app={app} size={76} />
                  <div>
                    <h1 className="font-display text-4xl font-semibold leading-none text-ink sm:text-5xl">{app.name}</h1>
                    <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-mint-700">{app.category}</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <p className="mt-6 max-w-xl text-xl leading-relaxed text-ink/70">{app.tagline}</p>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <StoreButton href={app.storeUrl} comingSoon={app.status === "coming-soon"} />
                  <Link href={`/apps/${app.slug}/privacy`} className="btn-ghost">
                    <Glyph name="shield" className="h-4 w-4 text-mint-600" />
                    Privacy policy
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <dl className="mt-9 grid max-w-lg grid-cols-2 gap-5 sm:grid-cols-4">
                  {meta.map((m) => (
                    <div key={m.label}>
                      <dt className="text-[0.65rem] font-semibold uppercase tracking-widest text-ink/40">{m.label}</dt>
                      <dd className="mt-1 text-sm font-semibold text-ink">{m.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            <Reveal delay={0.16} className="hidden justify-self-center lg:block">
              <div className="animate-float">
                <PhoneMockup
                  accent={app.accent}
                  screen={app.screens[0]}
                  image={app.screenshots?.[0]}
                  alt={`${app.name} screenshot`}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* description + features */}
      <section className="container-page grid gap-12 py-16 lg:grid-cols-[1fr_1.1fr] lg:py-20">
        <Reveal className="space-y-4">
          <h2 className="font-display text-2xl font-semibold text-ink">About {app.name}</h2>
          {app.description.map((para, i) => (
            <p key={i} className="leading-relaxed text-ink/65">{para}</p>
          ))}
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {app.features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-mint-100 bg-paper p-5 shadow-card">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-mint-50 text-mint-700">
                  <Glyph name={f.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* screenshots */}
      <section className="relative overflow-hidden py-8 lg:py-12">
        <div className="container-page">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink">Take a look</h2>
          </Reveal>
        </div>
        <div className="mt-8 flex snap-x gap-6 overflow-x-auto px-6 pb-8 sm:px-8 lg:justify-center">
          {app.screenshots
            ? app.screenshots.map((src, i) => (
                <Reveal key={src} delay={i * 0.06} className="snap-center">
                  <PhoneMockup accent={app.accent} image={src} alt={`${app.name} screenshot ${i + 1}`} className={i % 2 === 1 ? "sm:-mt-6" : ""} />
                </Reveal>
              ))
            : app.screens.map((screen, i) => (
                <Reveal key={i} delay={i * 0.08} className="snap-center">
                  <PhoneMockup accent={app.accent} screen={screen} className={i === 1 ? "sm:-mt-6" : ""} />
                </Reveal>
              ))}
        </div>
      </section>

      {/* cross-sell */}
      <section className="container-page py-16">
        <Reveal>
          <div className="rounded-3xl border border-mint-100 bg-paper p-8 shadow-card">
            <h2 className="font-display text-xl font-semibold text-ink">More from MobileMint</h2>
            <div className="mt-6 flex flex-wrap gap-4">
              {apps
                .filter((a) => a.slug !== app.slug)
                .map((a) => (
                  <Link
                    key={a.slug}
                    href={`/apps/${a.slug}`}
                    className="group flex items-center gap-3 rounded-2xl border border-mint-100 px-4 py-3 transition-colors hover:border-mint-300 hover:bg-mint-50/50"
                  >
                    <AppIcon app={a} size={44} />
                    <span>
                      <span className="block font-semibold text-ink">{a.name}</span>
                      <span className="block text-xs text-ink/50">{a.category}</span>
                    </span>
                    <Glyph name="arrow" className="ml-2 h-4 w-4 text-mint-600 transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
            </div>
          </div>
        </Reveal>
      </section>
    </article>
  );
}
