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

function H({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-12 font-display text-xl font-semibold text-ink">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 leading-relaxed text-ink/70">{children}</p>;
}

/**
 * Renders a plain-language Terms of Service for a single app, driven by the
 * app's structured `terms` metadata. Written to satisfy store and platform
 * (YouTube / Meta) review requirements for a Terms of Service URL.
 */
export default function Terms({ app }: { app: App }) {
  const t = app.terms!;
  const platforms = t.platforms ?? [];
  const platformList =
    platforms.length === 2
      ? `${platforms[0]} and ${platforms[1]}`
      : platforms.join(", ");
  const accountRequired = app.privacy.accountRequired;

  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-3xl border border-mint-200 bg-mint-50/60 p-6 sm:p-8">
        <div className="flex items-center gap-2 text-mint-700">
          <Glyph name="doc" className="h-5 w-5" />
          <span className="text-sm font-semibold uppercase tracking-[0.16em]">In short</span>
        </div>
        <p className="mt-3 leading-relaxed text-ink/75">{t.summary}</p>
      </div>

      <div className="prose-none mt-2">
        <P>
          These Terms of Service (&ldquo;Terms&rdquo;) are an agreement between you and{" "}
          <strong>{site.legalName}</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;) and govern your use
          of the <strong>{app.name}</strong> mobile application (the &ldquo;App&rdquo;). By
          downloading, installing, or using the App, you agree to these Terms. If you do not agree,
          please do not use the App.
        </P>

        <H>1. The service</H>
        <P>
          {app.name} is a tool that lets you broadcast your camera or screen to your own accounts on{" "}
          {platformList || "the streaming platforms you connect"}. The App acts as a conduit: it
          starts and sends the streams you initiate to those platforms. We do not host, store, or
          re-broadcast your streams, and your video is delivered directly to the platforms you
          choose.
        </P>

        <H>2. Eligibility &amp; your accounts</H>
        <P>
          You must be at least 13 years old (or the minimum age of digital consent in your country)
          to use the App.{" "}
          {accountRequired
            ? "To broadcast, you connect your own third-party accounts using their official sign-in. You are responsible for keeping those accounts secure and for all activity that occurs through them via the App."
            : "You are responsible for all activity that occurs through the App on your device."}
        </P>

        {platforms.length > 0 && (
          <>
            <H>3. Third-party platforms</H>
            <P>
              When you stream to {platformList}, your use of those services is governed by their own
              terms and policies, in addition to these Terms. You are responsible for complying with
              them, including{" "}
              <a href="https://www.youtube.com/t/terms" target="_blank" rel="noreferrer" className="font-medium text-mint-700 hover:text-mint-600">
                YouTube&rsquo;s Terms of Service ↗
              </a>{" "}
              and{" "}
              <a href="https://www.facebook.com/terms.php" target="_blank" rel="noreferrer" className="font-medium text-mint-700 hover:text-mint-600">
                Facebook&rsquo;s Terms of Service ↗
              </a>
              . We are not affiliated with, endorsed by, or responsible for these platforms, and they
              may change, limit, or end their streaming services at any time.
            </P>
          </>
        )}

        <H>4. Your content &amp; conduct</H>
        <P>
          You are solely responsible for everything you broadcast through the App. You retain all
          rights to your content; we claim no ownership of it. By using the App you represent that
          you own or have the necessary rights and permissions to stream your content and that it
          does not infringe anyone else&rsquo;s rights.
        </P>
        <P>You agree not to use the App to stream or do anything that:</P>
        <ul className="mt-4 space-y-2">
          {[
            "is unlawful, infringing, defamatory, obscene, hateful, or harassing;",
            "violates the rights of others, including intellectual-property or privacy rights;",
            "contains content you do not have the rights to broadcast;",
            "attempts to disrupt, reverse-engineer, or circumvent the App or its security;",
            "violates the terms of the platforms you stream to.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 rounded-2xl border border-mint-100 bg-paper p-3.5">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ink/5 text-ink/40">
                <Glyph name="lock" className="h-3 w-3" strokeWidth={2.4} />
              </span>
              <span className="text-sm leading-relaxed text-ink/75">{item}</span>
            </li>
          ))}
        </ul>

        <H>{platforms.length > 0 ? "5" : "4"}. Fees &amp; advertising</H>
        <P>
          {t.adSupported
            ? "The App is free to download and use, and is supported by advertising. We may show ads within the App. Note that broadcasting uses mobile data and battery, and your carrier's data charges may apply."
            : "Any fees for the App, if applicable, are described at the point of purchase. Broadcasting uses mobile data and battery, and your carrier's data charges may apply."}
        </P>

        <H>{platforms.length > 0 ? "6" : "5"}. Disclaimer of warranties</H>
        <P>
          The App is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties
          of any kind, whether express or implied. We do not warrant that the App will be
          uninterrupted, error-free, or that streams will always connect or complete successfully.
          Streaming reliability depends on your device, your network, and the third-party platforms,
          which are outside our control.
        </P>

        <H>{platforms.length > 0 ? "7" : "6"}. Limitation of liability</H>
        <P>
          To the maximum extent permitted by law, {site.legalName} will not be liable for any
          indirect, incidental, special, or consequential damages, or for any loss of data, revenue,
          or missed broadcasts, arising out of or related to your use of the App. Our total liability
          for any claim relating to the App will not exceed the amount you paid us for it (which, for
          a free app, is zero).
        </P>

        <H>{platforms.length > 0 ? "8" : "7"}. Indemnity</H>
        <P>
          You agree to indemnify and hold {site.legalName} harmless from any claims, damages, or
          expenses arising from the content you broadcast or your violation of these Terms or of a
          third-party platform&rsquo;s terms.
        </P>

        <H>{platforms.length > 0 ? "9" : "8"}. Termination</H>
        <P>
          You may stop using the App at any time by disconnecting your accounts and uninstalling it.
          We may suspend or discontinue the App, or your access to it, if you violate these Terms or
          if we discontinue the product. Sections that by their nature should survive termination
          (such as disclaimers, limitation of liability, and indemnity) will continue to apply.
        </P>

        <H>{platforms.length > 0 ? "10" : "9"}. Changes to these Terms</H>
        <P>
          We may update these Terms as the App evolves. When we make material changes, we will update
          the effective date below and, where appropriate, notify you in the App. Continued use after
          an update means you accept the revised Terms.
        </P>

        <H>{platforms.length > 0 ? "11" : "10"}. Contact us</H>
        <P>
          Questions about these Terms? Email us at{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-mint-700 hover:text-mint-600">
            {site.email}
          </a>
          .
        </P>

        <p className="mt-12 border-t border-mint-100 pt-6 text-sm text-ink/45">
          Effective {formatDate(t.effectiveDate)} · {site.legalName} · {app.name} {app.version}
        </p>
      </div>
    </div>
  );
}
