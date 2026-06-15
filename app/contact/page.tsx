import type { Metadata } from "next";
import Glyph from "@/components/Glyph";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with the ${site.name} team — feedback, support, or partnership.`,
};

const reasons = [
  { icon: "heart", title: "Feedback & ideas", body: "Tell us what you love, what's missing, or what you'd build next." },
  { icon: "shield", title: "Support & privacy", body: "Questions about an app, your data, or a deletion request." },
  { icon: "sparkles", title: "Press & partnerships", body: "Writing about us or want to collaborate? We'd love to talk." },
];

export default function ContactPage() {
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent("Hello MobileMint")}`;

  return (
    <div className="grain relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-mesh opacity-70" />
      <div className="container-page relative py-20 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow mx-auto">
              <Glyph name="mail" className="h-3.5 w-3.5" />
              Contact
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">
              Let&rsquo;s talk.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-lg leading-relaxed text-ink/60">
              The fastest way to reach us is email — a real person reads every message, usually
              within a couple of days.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <a href={mailto} className="btn-primary mt-8 text-base">
              <Glyph name="mail" className="h-5 w-5" />
              {site.email}
            </a>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-mint-100 bg-paper p-6 text-center shadow-card">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-mint-50 text-mint-700">
                  <Glyph name={r.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-12 max-w-xl text-center text-sm text-ink/45">
            Prefer Google Play?{" "}
            <a href={site.playStoreUrl} target="_blank" rel="noreferrer" className="font-medium text-mint-700 hover:text-mint-600">
              Find every app on our developer page
            </a>{" "}
            and leave a review.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
