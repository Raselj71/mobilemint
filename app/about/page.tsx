import type { Metadata } from "next";
import Link from "next/link";
import Glyph from "@/components/Glyph";
import Reveal from "@/components/Reveal";
import { LogoMark } from "@/components/Logo";
import { site } from "@/lib/site";
import { apps } from "@/lib/apps";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} is an independent mobile app studio building calm, fast, privacy-respecting apps.`,
};

const values = [
  { n: "01", title: "Less, but better", body: "We'd rather ship three apps we're proud of than thirty we're not. Focus is a feature." },
  { n: "02", title: "Respect the user", body: "No dark patterns, no data harvesting, no nagging. The app works for you, not the other way around." },
  { n: "03", title: "Sweat the details", body: "The difference between good and great is a hundred small decisions. We make them deliberately." },
  { n: "04", title: "Build for the long run", body: "We maintain what we ship. Updates, fixes, and improvements — for years, not weeks." },
];

export default function AboutPage() {
  return (
    <div className="grain relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[460px] bg-mesh opacity-80" />

      <section className="container-page relative py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-mint-500" />
                About the studio
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">
                A tiny studio with a <span className="text-gradient">big</span> respect for your time.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-ink/65">
                <p>
                  {site.name} started with a simple frustration: too many apps treat people as
                  metrics to be maximised. We wanted to make the opposite — software that is calm,
                  quick, and quietly useful.
                </p>
                <p>
                  We&rsquo;re independent, which means we answer to the people who use our apps
                  rather than advertisers or investors. That shapes everything: what we build, how
                  we handle data, and the pace we keep.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.16} className="hidden justify-self-center lg:block">
            <div className="relative">
              <div className="absolute -inset-10 rounded-full bg-mint-300/40 blur-3xl" />
              <LogoMark size={260} className="relative animate-float drop-shadow-[0_30px_60px_rgba(10,90,60,0.35)]" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page relative pb-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.n} delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-mint-100 bg-paper p-6 shadow-card">
                <span className="font-display text-3xl font-semibold text-mint-300">{v.n}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page relative py-16">
        <Reveal>
          <div className="overflow-hidden rounded-[2.5rem] border border-mint-100 bg-ink p-8 sm:p-12">
            <div className="grid items-center gap-8 sm:grid-cols-[1fr_auto]">
              <div>
                <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  Published under <span className="text-mint-300">{site.playConsole}</span> on Google Play.
                </h2>
                <p className="mt-3 max-w-lg text-white/60">
                  {apps.filter((a) => a.status === "live").length} apps live and more on the way.
                  Follow the studio to catch new releases first.
                </p>
              </div>
              <a href={site.playStoreUrl} target="_blank" rel="noreferrer" className="btn bg-mint-500 text-white shadow-soft hover:-translate-y-0.5 hover:bg-mint-400">
                View developer page
                <Glyph name="arrow" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-ink/55">
            Want to reach out?{" "}
            <Link href="/contact" className="font-semibold text-mint-700 hover:text-mint-600">
              Say hello →
            </Link>
          </p>
        </Reveal>
      </section>
    </div>
  );
}
