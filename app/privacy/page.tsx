import type { Metadata } from "next";
import Link from "next/link";
import Glyph from "@/components/Glyph";
import { apps } from "@/lib/apps";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${site.name} handles data across this website and our apps.`,
};

function H({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-12 font-display text-xl font-semibold text-ink">{children}</h2>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 leading-relaxed text-ink/70">{children}</p>;
}

export default function SitePrivacyPage() {
  return (
    <div className="grain relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-mesh opacity-70" />
      <div className="container-page relative py-14 lg:py-20">
        <span className="eyebrow">
          <Glyph name="shield" className="h-3.5 w-3.5" />
          Privacy
        </span>
        <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">
          Your privacy, plainly explained.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/60">
          This page covers the <strong>{site.domain}</strong> website. Each app has its own policy
          describing exactly what that app does with data.
        </p>

        <div className="mt-10 max-w-3xl">
          <div className="rounded-3xl border border-mint-200 bg-mint-50/60 p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold text-ink">Per-app privacy policies</h2>
            <p className="mt-2 text-sm text-ink/65">
              Looking for the policy for a specific app? Choose it below.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {apps.map((a) => (
                <Link
                  key={a.slug}
                  href={`/apps/${a.slug}/privacy`}
                  className="inline-flex items-center gap-2 rounded-full border border-mint-200 bg-paper px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:border-mint-400 hover:text-mint-700"
                >
                  {a.name}
                  <Glyph name="arrow" className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>

          <H>The short version</H>
          <P>
            This is a static marketing website. We don&rsquo;t run ads here, we don&rsquo;t sell
            data, and you don&rsquo;t need an account. We collect only privacy-friendly, aggregated
            analytics to understand which pages are useful.
          </P>

          <H>Information this website collects</H>
          <P>
            When you visit {site.domain}, our hosting provider and analytics may automatically log
            standard technical information — such as your approximate region, browser type, the
            pages you view, and the referring site. This is used in aggregate to keep the site fast
            and understand traffic. It is not used to identify you personally.
          </P>

          <H>Cookies</H>
          <P>
            We keep cookies to a minimum. We do not use advertising or cross-site tracking cookies
            on this website. Any analytics we use is configured to be privacy-respecting and
            aggregate.
          </P>

          <H>Contacting us by email</H>
          <P>
            If you email us at{" "}
            <a href={`mailto:${site.email}`} className="font-medium text-mint-700 hover:text-mint-600">
              {site.email}
            </a>
            , we receive your email address and whatever you choose to share, and we use it only to
            reply and follow up. We don&rsquo;t add you to any marketing list.
          </P>

          <H>Third-party links</H>
          <P>
            This site links to Google Play and to our service providers&rsquo; policies. Those
            services have their own privacy practices, which we don&rsquo;t control.
          </P>

          <H>Your rights</H>
          <P>
            Depending on your location, you may have rights to access, correct, or delete personal
            information we hold about you. Because this website collects so little, this usually
            relates only to email correspondence. Email us and we&rsquo;ll help.
          </P>

          <H>Changes</H>
          <P>
            We&rsquo;ll update this page if our practices change, and revise the date below.
          </P>

          <H>Contact</H>
          <P>
            Questions? Email{" "}
            <a href={`mailto:${site.email}`} className="font-medium text-mint-700 hover:text-mint-600">
              {site.email}
            </a>
            .
          </P>

          <p className="mt-12 border-t border-mint-100 pt-6 text-sm text-ink/45">
            Last updated June 14, 2026 · {site.legalName}
          </p>
        </div>
      </div>
    </div>
  );
}
