import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Blog — MobileMint",
  description: "Read detailed blog posts about every MobileMint app — features, privacy, and how they stay on your device.",
};

const blogPosts = [
  {
    slug: "pocket-scanner",
    title: "Pocket Scanner: Scan, Edit, and Sign PDFs — Right from Your Pocket",
    description: "Discover how Pocket Scanner turns your phone into a powerful document scanner and PDF editor. Fully offline, ad-supported, with OCR and all document tools working completely on-device.",
  },
  {
    slug: "deen",
    title: "Deen: Prayer Times, Quran, and Qibla — Bangla-First and Offline",
    description: "Learn about Deen, the ad-light prayer companion with accurate prayer times, Quran reading, and qibla compass. Built in Bangla, offline-first, with minimal data collection.",
  },
  {
    slug: "all-document-reader",
    title: "All Document Reader: Open Any Document — PDF, Word, Excel, and More",
    description: "Discover All Document Reader, a lightweight app that opens PDF, Word, Excel, PowerPoint, and text files. Fast, local-only, with ads and optional in-app purchases.",
  },
  {
    slug: "voice-recorder",
    title: "AI Voice Recorder: Record On-Device, Never Upload",
    description: "Learn about AI Voice Recorder, the app that captures audio entirely on your device with on-device transcription, markers, and full privacy. Free with ads, Pro unlocks extra features.",
  },
  {
    slug: "golive-studio",
    title: "GoLive Studio: Multistream to YouTube and Facebook at Once",
    description: "Learn how GoLive Studio turns your phone into a multistreaming studio. Broadcast live to YouTube and Facebook simultaneously without a computer.",
  },
  {
    slug: "metro-buddy",
    title: "Metro Buddy: Tap Your Dhaka Metro Card, See Your Balance Instantly",
    description: "Discover Metro Buddy, the 100% offline MRT and Rapid Pass balance and trip tracker. No ads, no account, no internet required.",
  },
  {
    slug: "japan-train-card-balance-check",
    title: "Japan Train Card Balance Check: Suica, PASMO, ICOCA — Read Your Card in One Tap",
    description: "Learn how to check your Japanese transit card balance and ride history. Your card data never leaves your phone. Free with ads, with history that outlasts the card.",
  },
  {
    slug: "tmoney-balance",
    title: "Korea Card Balance for T-money: Check Your Balance in Your Own Currency",
    description: "Learn how to check your T-money, Cashbee, or Rail Plus card balance in won and your home currency. Travel guide, 9 languages, and offline card reading.",
  },
  {
    slug: "sg-card-balance",
    title: "Singapore MRT Bus Card Balance: EZ-Link and NETS FlashPay in One Tap",
    description: "Discover Singapore MRT Bus Card Balance — check your EZ-Link or NETS FlashPay card balance, trip history, spending, and card expiry. Free with ads, with CSV export and 4 languages.",
  },
];

export default function BlogPage() {
  return (
    <div className="grain relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-mesh opacity-80" />

      <div className="container-page relative py-16 lg:py-24">
        <Reveal>
          <span className="eyebrow">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-mint-500" />
            The collection
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">
            Every MobileMint app, in one place — Blog
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/60">
            A growing collection of detailed posts about each MobileMint app, including features, privacy details, and how they stay on your device.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <div>
                <h2 className="font-display text-base font-medium text-mint-600 hover:text-mint-50 transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-ink/60 line-clamp-2">
                  {post.description}
                </p>
                <span className="mt-3 inline-block text-mint-500 underline underline-opacity-50 hover:text-mint-600 transition-colors">
                  Read blog post
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {blogPosts.length > 0 && (
          <div className="mt-16 text-center">
            <p className="text-ink/60">
              {" "}
              <Link href="/apps" className="font-medium text-mint-600 hover:text-mint-700 transition-colors">
                Browse all apps →
              </Link>{" "}
              or view{' '}
              <Link href="/" className="font-medium text-mint-600 hover:text-mint-700 transition-colors">
                the homepage
              </Link>
              {" "}
              for more.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}