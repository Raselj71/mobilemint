import type { Metadata } from "next";
import Link from "next/link";
import Glyph from "@/components/Glyph";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hire us",
  description: `Work with ${site.name} — we design and build calm, fast, privacy-respecting mobile apps for Android, from idea to Play Store launch.`,
};

const services = [
  { icon: "sparkles", title: "Product & UX design", body: "Wireframes to polished UI. We shape your idea into something people will actually want to keep." },
  { icon: "bolt", title: "App development", body: "Native-quality Android & cross-platform apps, built fast and engineered to stay light." },
  { icon: "scan", title: "Play Store launch", body: "Store listing, screenshots, privacy policy, and a clean release — we handle the whole ramp." },
  { icon: "chart", title: "Growth & maintenance", body: "Updates, analytics, and iteration after launch. We stick around and keep things sharp." },
];

const steps = [
  { n: "01", title: "Discovery", body: "A short call to understand your idea, users, and goals. We scope honestly and tell you what's worth building." },
  { n: "02", title: "Design", body: "Flows and a clickable UI you can react to early — so we build the right thing, not just a thing." },
  { n: "03", title: "Build", body: "Tight, focused development with regular check-ins. You see real progress, not just status updates." },
  { n: "04", title: "Launch", body: "We ship to Google Play, set up analytics, and plan the first improvements together." },
];

const promises = [
  "Privacy-respecting by default",
  "Fast, lightweight, accessible apps",
  "Clear communication, no jargon",
  "You own all the code and assets",
];

export default function HirePage() {
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent("Project enquiry — MobileMint")}`;

  return (
    <div className="grain relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-mesh opacity-80" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-dots opacity-40 mask-fade-b" />

      {/* hero */}
      <section className="container-page relative py-16 lg:py-24">
        <Reveal>
          <span className="eyebrow">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-mint-500" />
            Work with the studio
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-6 max-w-3xl font-display text-[2.6rem] font-semibold leading-[1.04] tracking-tight text-ink sm:text-6xl">
            Have an app idea?
            <br />
            Let&rsquo;s <span className="text-gradient">build</span> it together.
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/65">
            {site.name} takes on a small number of client projects each year. The same care that
            goes into our own apps goes into yours — from first sketch to a polished Play Store
            launch.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={mailto} className="btn-primary">
              <Glyph name="mail" className="h-4 w-4" />
              Start a project
            </a>
            <Link href="/apps" className="btn-ghost">
              See our work
              <Glyph name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* services */}
      <section className="container-page relative py-8 lg:py-12">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">What we do</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} y={28} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-mint-100 bg-paper p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-glow">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mint-50 text-mint-700">
                  <Glyph name={s.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* process */}
      <section className="container-page relative py-16 lg:py-24">
        <Reveal>
          <span className="eyebrow">How it works</span>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            A calm, predictable process.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1} y={28}>
              <div className="relative">
                <span className="font-display text-4xl font-semibold text-mint-300">{s.n}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA + promises */}
      <section className="container-page relative pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-mint-200 bg-ink px-8 py-14 shadow-glow sm:px-14">
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-40 blur-3xl"
              style={{ background: "radial-gradient(circle, #1FAE76, transparent 70%)" }}
            />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Tell us what you&rsquo;re dreaming up.
                </h2>
                <p className="mt-4 max-w-md text-white/65">
                  Email a few lines about your idea and timeline. We reply to every serious enquiry,
                  usually within a couple of days.
                </p>
                <a href={mailto} className="btn mt-8 bg-mint-500 text-white shadow-soft hover:-translate-y-0.5 hover:bg-mint-400">
                  <Glyph name="mail" className="h-5 w-5" />
                  {site.email}
                </a>
              </div>
              <ul className="grid gap-3">
                {promises.map((p) => (
                  <li key={p} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 text-sm text-white/80">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-mint-500/20 text-mint-300">
                      <Glyph name="check" className="h-4 w-4" strokeWidth={2.4} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
