import Link from "next/link";
import Logo from "./Logo";
import Glyph from "./Glyph";
import { site } from "@/lib/site";
import { apps } from "@/lib/apps";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-mint-100 bg-paper">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-60" />
      <div className="container-page relative py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-ink/60">{site.tagline}</p>
            <a href={`mailto:${site.email}`} className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-mint-700 hover:text-mint-600">
              <Glyph name="mail" className="h-4 w-4" />
              {site.email}
            </a>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/40">Apps</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {apps.map((a) => (
                <li key={a.slug}>
                  <Link href={`/apps/${a.slug}`} className="text-ink/70 transition-colors hover:text-mint-700">
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/40">Studio</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/about" className="text-ink/70 hover:text-mint-700">About</Link></li>
              <li><Link href="/privacy" className="text-ink/70 hover:text-mint-700">Privacy</Link></li>
              <li><Link href="/contact" className="text-ink/70 hover:text-mint-700">Contact</Link></li>
              <li>
                <a href={site.playStoreUrl} target="_blank" rel="noreferrer" className="text-ink/70 hover:text-mint-700">
                  Google Play
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-mint-100 pt-6 text-xs text-ink/50 sm:flex-row sm:items-center">
          <p>© {year} {site.legalName}. Made with care.</p>
          <p className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-mint-500" />
            Privacy-respecting by design
          </p>
        </div>
      </div>
    </footer>
  );
}
