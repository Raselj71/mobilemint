import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Glyph from "@/components/Glyph";
import AppIcon from "@/components/AppIcon";
import Terms from "@/components/Terms";
import { getApp, getTermsSlugs } from "@/lib/apps";

export function generateStaticParams() {
  return getTermsSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const app = getApp(params.slug);
  if (!app || !app.terms) return {};
  return {
    title: `${app.name} Terms of Service`,
    description: `The terms that govern your use of ${app.name}.`,
  };
}

export default function AppTermsPage({ params }: { params: { slug: string } }) {
  const app = getApp(params.slug);
  if (!app || !app.terms) notFound();

  return (
    <div className="grain relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-mesh opacity-70" />
      <div className="container-page relative py-14 lg:py-20">
        <Link href={`/apps/${app.slug}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/55 transition-colors hover:text-mint-700">
          <Glyph name="arrow" className="h-4 w-4 rotate-180" />
          Back to {app.name}
        </Link>

        <div className="mt-8 flex items-center gap-4">
          <AppIcon app={app} size={64} />
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-mint-700">Terms of Service</p>
            <h1 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">{app.name}</h1>
          </div>
        </div>

        <div className="mt-12">
          <Terms app={app} />
        </div>
      </div>
    </div>
  );
}
