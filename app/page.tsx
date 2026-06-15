import Link from "next/link";
import Glyph from "@/components/Glyph";
import Reveal from "@/components/Reveal";
import AppCard from "@/components/AppCard";
import PhoneMockup from "@/components/PhoneMockup";
import { SectionHeading } from "@/components/Section";
import StoreButton from "@/components/StoreButton";
import { apps } from "@/lib/apps";
import { site } from "@/lib/site";

const principles = [
  { icon: "shield", title: "Privacy by default", body: "Local-first wherever possible. We collect the least we can, name every partner, and never sell your data." },
  { icon: "bolt", title: "Fast & light", body: "Apps that open instantly and sip battery. Performance is a feature, not an afterthought." },
  { icon: "sparkles", title: "Designed with care", body: "Calm interfaces, thoughtful details, and motion that guides rather than distracts." },
  { icon: "heart", title: "Built to keep", body: "We make apps people return to — maintained, listened to, and improved over years." },
];

const stats = [
  { value: "1.5M+", label: "Installs" },
  { value: "4.7★", label: "Avg. rating" },
  { value: `${apps.length}`, label: "Apps & counting" },
];

export default function Home() {
  const featured = apps;

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="grain relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-mesh" />
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-40 mask-fade-b" />

        <div className="container-page relative grid items-center gap-12 pb-16 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24 lg:pt-24">
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-mint-500" />
                Independent app studio · est. {site.foundedYear}
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-6 font-display text-[2.7rem] font-semibold leading-[1.03] tracking-tight text-ink sm:text-6xl">
                Apps people
                <br />
                actually <span className="text-gradient">keep</span>.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/65">
                {site.name} is a small studio crafting calm, fast and privacy-respecting
                apps for Android — from document scanning to prayer times.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/apps" className="btn-primary">
                  Explore the apps
                  <Glyph name="arrow" className="h-4 w-4" />
                </Link>
                <a href={site.playStoreUrl} target="_blank" rel="noreferrer" className="btn-ghost">
                  <Glyph name="shield" className="h-4 w-4 text-mint-600" />
                  View on Google Play
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <dl className="mt-12 flex gap-10">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-3xl font-semibold text-ink">{s.value}</dt>
                    <dd className="mt-1 text-sm text-ink/50">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* floating phones */}
          <div className="relative hidden h-[520px] items-center justify-center lg:flex">
            <div
              className="absolute h-[440px] w-[440px] rounded-full opacity-70 blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(79,224,166,0.45), transparent 70%)" }}
            />
            <div className="animate-float [animation-delay:-1.5s]">
              <PhoneMockup
                accent={apps[1].accent}
                screen={apps[1].screens[0]}
                className="-rotate-6"
              />
            </div>
            <div className="animate-float">
              <PhoneMockup
                accent={apps[0].accent}
                screen={apps[0].screens[0]}
                className="-mb-10 ml-[-60px] mt-10 rotate-3 scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FEATURED APPS ---------- */}
      <section className="container-page py-16 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="The collection"
            title={<>Small catalog,<br className="hidden sm:block" /> big attention to detail.</>}
            intro="Every MobileMint app earns its place on your home screen. Here's what we're building."
          />
          <Reveal delay={0.1}>
            <Link href="/apps" className="hidden items-center gap-1.5 text-sm font-semibold text-mint-700 hover:text-mint-600 sm:inline-flex">
              All apps
              <Glyph name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((app, i) => (
            <Reveal key={app.slug} delay={i * 0.08}>
              <AppCard app={app} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- PRINCIPLES ---------- */}
      <section className="relative overflow-hidden bg-ink py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(rgba(79,224,166,0.9) 1px, transparent 1px)", backgroundSize: "26px 26px" }} />
        <div
          className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #1FAE76, transparent 70%)" }}
        />
        <div className="container-page relative">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-mint-700/40 bg-mint-900/40 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-mint-300">
              How we build
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Four things we refuse to compromise on.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="h-full">
                <div className="flex h-full flex-col bg-ink p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mint-900/60 text-mint-300">
                    <Glyph name={p.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="container-page py-20 lg:py-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-mint-200 bg-gradient-to-br from-mint-400 via-mint-500 to-mint-700 px-8 py-16 text-center shadow-glow sm:px-16">
            <div className="grain absolute inset-0 opacity-40" />
            <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)", backgroundSize: "24px 24px", opacity: 0.3 }} />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Got an app idea, or just want to say hi?
              </h2>
              <p className="mt-4 text-lg text-white/85">
                We love hearing from people who use our apps. Feedback shapes everything we ship.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link href="/contact" className="btn bg-white text-mint-700 shadow-soft hover:-translate-y-0.5 hover:bg-mint-50">
                  Get in touch
                  <Glyph name="mail" className="h-4 w-4" />
                </Link>
                <Link href="/apps" className="btn border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20">
                  Browse apps
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
