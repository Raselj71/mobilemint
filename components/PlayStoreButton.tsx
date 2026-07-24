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
        <svg viewBox="0 0 512 512" aria-hidden="true" className="h-7 w-7">
          <defs>
            <linearGradient id="gp-blue" x1="261.6" y1="63.8" x2="45.7" y2="279.7" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#00A0FF" />
              <stop offset=".26" stopColor="#00BEFF" />
              <stop offset=".51" stopColor="#00D2FF" />
              <stop offset=".76" stopColor="#00DFFF" />
              <stop offset="1" stopColor="#00E3FF" />
            </linearGradient>
            <linearGradient id="gp-yellow" x1="465.7" y1="255.9" x2="20.6" y2="255.9" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#FFE000" />
              <stop offset=".41" stopColor="#FFBD00" />
              <stop offset=".78" stopColor="#FFA000" />
              <stop offset="1" stopColor="#FF9C00" />
            </linearGradient>
            <linearGradient id="gp-red" x1="300.4" y1="298.1" x2="7.7" y2="590.9" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#FF3A44" />
              <stop offset="1" stopColor="#C31162" />
            </linearGradient>
            <linearGradient id="gp-green" x1="64.5" y1="13.6" x2="195.1" y2="144.2" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#32A071" />
              <stop offset=".48" stopColor="#15CF74" />
              <stop offset=".8" stopColor="#06E775" />
              <stop offset="1" stopColor="#00F076" />
            </linearGradient>
          </defs>
          <path fill="url(#gp-blue)" d="M22.6 20.6C19.1 24.3 17 30.1 17 37.6v436.9c0 7.5 2.1 13.3 5.7 16.9l1.5 1.4 244.7-244.7v-5.8L23.9 19.2z" />
          <path fill="url(#gp-yellow)" d="M350.5 349.8L268.9 268.2v-5.8l81.6-81.6 1.8 1 96.7 54.9c27.6 15.7 27.6 41.4 0 57.1l-96.7 54.9z" />
          <path fill="url(#gp-red)" d="M352.3 348.8L268.9 265.3 22.6 491.5c9.1 9.6 24.1 10.8 41 1.2l288.7-164z" />
          <path fill="url(#gp-green)" d="M352.3 181.7L63.6 17.6C46.7 8 31.7 9.2 22.6 18.8l246.3 246.3z" />
        </svg>
      </span>
    </a>
  );
}
