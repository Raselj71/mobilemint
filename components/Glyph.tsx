import type { SVGProps } from "react";

type GlyphProps = SVGProps<SVGSVGElement> & { name: string };

const paths: Record<string, JSX.Element> = {
  leaf: (
    <>
      <path d="M5 20c0-7 5-13 14-14 0 9-5 15-14 14Z" />
      <path d="M5 20C9 14 13 11 17 9" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </>
  ),
  bell: (
    <>
      <path d="M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" />
      <path d="M10 20a2 2 0 0 0 4 0" />
    </>
  ),
  wave: (
    <>
      <path d="M3 12h2M7 8v8M11 4v16M15 7v10M19 10v4M22 12h-1" />
    </>
  ),
  heart: <path d="M12 20s-7-4.6-7-9.5A3.8 3.8 0 0 1 12 7a3.8 3.8 0 0 1 7 3.5C19 15.4 12 20 12 20Z" />,
  moon: <path d="M20 14.5A8 8 0 1 1 9.5 4 6.5 6.5 0 0 0 20 14.5Z" />,
  bolt: <path d="M13 3 5 13h6l-1 8 8-10h-6l1-8Z" />,
  split: (
    <>
      <path d="M4 6h7M4 12h16M4 18h11" />
      <circle cx="17" cy="6" r="2" />
      <circle cx="19" cy="18" r="2" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0M16 5.5a3 3 0 0 1 0 5.5M21 20a5.5 5.5 0 0 0-3.5-5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.7 3 2.7 15 0 18M12 3c-2.7 3-2.7 15 0 18" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M5 12.5 10 17 19 7" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  star: <path d="m12 3 2.7 5.7 6.3.8-4.6 4.3 1.2 6.2L12 17.8 6.4 20l1.2-6.2L3 9.5l6.3-.8L12 3Z" />,
  shield: (
    <>
      <path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z" />
      <path d="M9 12.5 11 14.5 15 10" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3v4M12 17v4M5 12H1M23 12h-4" />
      <path d="m6 6 2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
    </>
  ),
  scan: (
    <>
      <path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2" />
      <path d="M4 12h16" />
    </>
  ),
  doc: (
    <>
      <path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v4h4M9 13h6M9 16.5h6" />
    </>
  ),
  folder: (
    <path d="M3 7a2 2 0 0 1 2-2h3.6a2 2 0 0 1 1.4.6L12 7h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
  ),
  book: (
    <>
      <path d="M12 6C9.6 4.4 6.7 4.4 4 5.2v13c2.7-.8 5.6-.8 8 .8 2.4-1.6 5.3-1.6 8-.8v-13C17.3 4.4 14.4 4.4 12 6Z" />
      <path d="M12 6v13" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15 9-2 4-4 2 2-4 4-2Z" />
    </>
  ),
  share: (
    <>
      <circle cx="6" cy="12" r="2.4" />
      <circle cx="17.5" cy="6" r="2.4" />
      <circle cx="17.5" cy="18" r="2.4" />
      <path d="m8.2 11 7-3.8M8.2 13l7 3.8" />
    </>
  ),
  crescent: (
    <>
      <path d="M16.5 4.2a8 8 0 1 0 3.3 11.4A6.5 6.5 0 0 1 16.5 4.2Z" />
      <path d="m18.6 3 .7 1.8 1.9.2-1.4 1.3.4 1.9-1.6-1-1.6 1 .4-1.9-1.4-1.3 1.9-.2Z" />
    </>
  ),
};

export default function Glyph({ name, ...props }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name] ?? paths.spark}
    </svg>
  );
}
