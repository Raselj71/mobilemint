import Glyph from "./Glyph";
import { site } from "@/lib/site";
import type { App } from "@/lib/apps";

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function Fact({ on, label }: { on: boolean; label: string }) {
  return (
    <li className="flex items-center gap-3 rounded-2xl border border-mint-100 bg-paper p-3.5">
      <span
        className={`grid h-7 w-7 shrink-0 place-items-center rounded-full ${
          on ? "bg-mint-100 text-mint-700" : "bg-ink/5 text-ink/40"
        }`}
      >
        <Glyph name={on ? "check" : "lock"} className="h-4 w-4" strokeWidth={2.2} />
      </span>
      <span className="text-sm text-ink/75">{label}</span>
    </li>
  );
}

function H({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-12 font-display text-xl font-semibold text-ink">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 leading-relaxed text-ink/70">{children}</p>;
}

/**
 * Renders a Google Play / GDPR-aligned privacy policy for a single app,
 * driven entirely by the app's structured privacy metadata.
 */
export default function PrivacyPolicy({ app }: { app: App }) {
  const p = app.privacy;

  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-3xl border border-mint-200 bg-mint-50/60 p-6 sm:p-8">
        <div className="flex items-center gap-2 text-mint-700">
          <Glyph name="shield" className="h-5 w-5" />
          <span className="text-sm font-semibold uppercase tracking-[0.16em]">At a glance</span>
        </div>
        <p className="mt-3 leading-relaxed text-ink/75">{p.summary}</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          <Fact on={!p.collectsPersonalData} label="No personal data required to use the app" />
          <Fact on={!p.accountRequired} label="No account needed" />
          <Fact on={!p.showsAds} label={p.showsAds ? "Contains ads" : "No ads"} />
          <Fact on={!p.sharesWithThirdParties} label={p.sharesWithThirdParties ? "Limited sharing with named partners" : "We don't sell or share your data"} />
        </ul>
      </div>

      <div className="prose-none mt-2">
        <P>
          This Privacy Policy explains how <strong>{site.legalName}</strong> (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;) handles information in connection with the <strong>{app.name}</strong>{" "}
          mobile application (the &ldquo;App&rdquo;). It applies to the App only. By using the App,
          you agree to the practices described here.
        </P>

        <H>Information we collect</H>
        <P>
          We are deliberately minimal about data. The App collects only what is described below,
          and nothing more:
        </P>
        <div className="mt-4 overflow-hidden rounded-2xl border border-mint-100">
          <table className="w-full text-left text-sm">
            <thead className="bg-mint-50 text-ink">
              <tr>
                <th className="px-4 py-3 font-semibold">Data</th>
                <th className="px-4 py-3 font-semibold">Why &amp; how</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-mint-100">
              {p.dataPoints.map((d, i) => (
                <tr key={i} className="align-top">
                  <td className="px-4 py-3 font-medium text-ink/85">
                    {d.type}
                    {d.optional && (
                      <span className="ml-2 rounded-full bg-mint-100 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wider text-mint-700">
                        Optional
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-ink/65">{d.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H>How we use information</H>
        <P>
          We use the information above solely to operate, maintain, and improve the App — for
          example, to provide its core features, keep it stable by diagnosing crashes, and
          understand which features are useful in aggregate. We do not use your information for
          profiling unrelated to the App, and we never sell it.
        </P>

        {p.usesAnalytics && (
          <>
            <H>Analytics</H>
            <P>
              The App uses privacy-conscious analytics to collect aggregated, anonymous information
              about usage and stability. This helps us fix bugs and decide what to build next. These
              analytics are not used to identify you personally.
            </P>
          </>
        )}

        {p.showsAds && (
          <>
            <H>Advertising</H>
            <P>
              The App is free and supported by advertising. Our advertising partner may use your
              device&rsquo;s advertising identifier to show ads and limit how often you see the same
              ad. You can reset or limit this identifier at any time in your device settings under{" "}
              <em>Settings → Privacy → Ads</em>. We do not share your name, email, or contacts with
              advertisers.
            </P>
          </>
        )}

        {p.thirdParties.length > 0 && (
          <>
            <H>Third-party services</H>
            <P>
              We rely on a small number of trusted service providers. Each processes data only as
              needed for the purpose listed and under their own privacy policy:
            </P>
            <ul className="mt-4 space-y-3">
              {p.thirdParties.map((t, i) => (
                <li key={i} className="flex flex-wrap items-center gap-x-2 rounded-2xl border border-mint-100 bg-paper p-4">
                  <span className="font-semibold text-ink">{t.name}</span>
                  <span className="text-ink/50">— {t.purpose}.</span>
                  <a href={t.policyUrl} target="_blank" rel="noreferrer" className="font-medium text-mint-700 hover:text-mint-600">
                    Privacy policy ↗
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}

        <H>Data storage &amp; security</H>
        <P>
          {p.collectsPersonalData
            ? "Where data is stored on our servers, it is transmitted over encrypted connections (HTTPS) and protected with industry-standard safeguards. "
            : "Your in-app content is stored locally on your device by default. "}
          No method of transmission or storage is ever 100% secure, but we take reasonable measures
          to protect your information against unauthorised access, alteration, or loss.
        </P>

        <H>Children&rsquo;s privacy</H>
        <P>
          {p.childDirected
            ? "The App is designed for a general audience and complies with applicable requirements for child-directed services."
            : "The App is not directed to children under 13, and we do not knowingly collect personal information from children. If you believe a child has provided us information, contact us and we will delete it."}
        </P>

        <H>Your rights &amp; choices</H>
        <P>
          Depending on where you live (including under the GDPR and CCPA), you may have the right to
          access, correct, export, or delete your personal information, and to object to or restrict
          certain processing.{" "}
          {p.accountRequired || p.collectsPersonalData
            ? "You can delete your account and associated data from within the App, or by emailing us. "
            : "Because the App stores your content on your device, you can remove it at any time by clearing the App's data or uninstalling it. "}
          To exercise any right, email us at the address below and we will respond within 30 days.
        </P>

        <H>Data retention</H>
        <P>
          We keep personal information only as long as needed to provide the App and for legitimate
          legal or operational reasons. Anonymous, aggregated analytics may be retained to
          understand long-term trends. When you delete your data, we remove it from active systems
          promptly and from backups within a reasonable period.
        </P>

        <H>Changes to this policy</H>
        <P>
          We may update this policy as the App evolves. When we make material changes, we will
          update the date below and, where appropriate, notify you in the App. Continued use after
          an update means you accept the revised policy.
        </P>

        <H>Contact us</H>
        <P>
          Questions about this policy or your data? Email us at{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-mint-700 hover:text-mint-600">
            {site.email}
          </a>
          . We read every message.
        </P>

        <p className="mt-12 border-t border-mint-100 pt-6 text-sm text-ink/45">
          Last updated {formatDate(p.lastUpdated)} · {site.legalName} · {app.name} {app.version}
        </p>
      </div>
    </div>
  );
}
