type LogoProps = {
  withWordmark?: boolean;
  className?: string;
  size?: number;
};

/** The MobileMint mark: mint squircle, white "M", sprouting leaf. */
export function LogoMark({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      className={className}
      role="img"
      aria-label="MobileMint"
    >
      <defs>
        <linearGradient id="mm-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4FE0A6" />
          <stop offset="0.55" stopColor="#34CB8C" />
          <stop offset="1" stopColor="#1FAE76" />
        </linearGradient>
        <linearGradient id="mm-leaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#DBFBEE" />
        </linearGradient>
        <radialGradient id="mm-sheen" cx="0.32" cy="0.22" r="0.9">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.28" />
          <stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="512" height="512" rx="116" fill="url(#mm-bg)" />
      <rect x="0" y="0" width="512" height="512" rx="116" fill="url(#mm-sheen)" />
      <path
        d="M150,382 L150,168 L256,300 L362,168 L362,382"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="46"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M256,304 C 304,266 308,206 256,176 C 204,206 208,266 256,304 Z"
        fill="url(#mm-leaf)"
      />
      <path d="M256,300 C 256,260 256,220 256,182" fill="none" stroke="#27C083" strokeWidth="7" strokeLinecap="round" />
      <path d="M256,238 C 274,232 286,226 296,214" fill="none" stroke="#27C083" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M256,262 C 238,256 226,250 216,238" fill="none" stroke="#27C083" strokeWidth="5.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({ withWordmark = true, className, size = 36 }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark size={size} className="drop-shadow-[0_6px_14px_rgba(10,90,60,0.28)]" />
      {withWordmark && (
        <span className="font-display text-[1.35rem] font-semibold leading-none tracking-tight text-ink">
          Mobile<span className="text-mint-600">Mint</span>
        </span>
      )}
    </span>
  );
}
