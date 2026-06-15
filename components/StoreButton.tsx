type StoreButtonProps = {
  href?: string;
  comingSoon?: boolean;
  className?: string;
};

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path d="M3.6 2.3 13.4 12 3.6 21.7c-.3-.2-.6-.6-.6-1.2V3.5c0-.6.3-1 .6-1.2Z" fill="#4FE0A6" />
      <path d="M16.8 8.6 13.4 12l3.4 3.4 3.3-1.9c1-.6 1-2 0-2.6l-3.3-1.9Z" fill="#fff" opacity="0.9" />
      <path d="m3.6 2.3 9.8 9.7 3.4-3.4L5.6 2.4c-.7-.4-1.4-.4-2-.1Z" fill="#D2F6E4" opacity="0.85" />
      <path d="m3.6 21.7 9.8-9.7 3.4 3.4-11.2 6.4c-.6.3-1.3.3-2-.1Z" fill="#7AE3B0" />
    </svg>
  );
}

export default function StoreButton({ href, comingSoon, className }: StoreButtonProps) {
  if (comingSoon || !href) {
    return (
      <span
        className={`inline-flex items-center gap-3 rounded-2xl border border-mint-200 bg-mint-50/60 px-5 py-3 text-left text-ink/50 ${className ?? ""}`}
      >
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/70">
          <span className="h-2 w-2 animate-pulse rounded-full bg-mint-500" />
        </span>
        <span className="leading-tight">
          <span className="block text-[0.62rem] uppercase tracking-widest">Coming soon to</span>
          <span className="block text-sm font-semibold text-ink/70">Google Play</span>
        </span>
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center gap-3 rounded-2xl bg-ink px-5 py-3 text-left text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-mint-700 ${className ?? ""}`}
    >
      <PlayGlyph />
      <span className="leading-tight">
        <span className="block text-[0.62rem] uppercase tracking-widest text-mint-200">Get it on</span>
        <span className="block text-base font-semibold">Google Play</span>
      </span>
    </a>
  );
}
