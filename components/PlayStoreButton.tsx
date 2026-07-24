import { site } from "@/lib/site";

/**
 * Floating button linking to the MobileMint Google Play developer profile.
 * White circle with the multicolour Google Play triangle. Pure link.
 */
export default function PlayStoreButton() {
  return (
    <a
      href={site.playStoreUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="MobileMint on Google Play"
      className="group flex items-center"
    >
      {/* label that expands leftward on hover (desktop) */}
      <span className="pointer-events-none mr-0 max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold text-ink opacity-0 transition-all duration-300 group-hover:mr-3 group-hover:max-w-[14rem] group-hover:opacity-100 max-sm:hidden">
        <span className="rounded-full bg-paper px-4 py-2 shadow-card ring-1 ring-mint-100">
          Our apps on Google Play
        </span>
      </span>

      <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_14px_30px_-10px_rgba(10,90,60,0.5)] ring-1 ring-mint-100 transition-transform duration-300 group-hover:scale-105 group-active:scale-95">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
          <polygon points="4,2.8 4,12 14.1,8.2" fill="#00A0FF" />
          <polygon points="4,12 14.1,8.2 21,12" fill="#FF3D3D" />
          <polygon points="4,12 21,12 14.1,15.8" fill="#FFCE00" />
          <polygon points="4,12 4,21.2 14.1,15.8" fill="#00D267" />
        </svg>
      </span>
    </a>
  );
}
