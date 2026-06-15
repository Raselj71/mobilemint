import Image from "next/image";
import Glyph from "./Glyph";
import type { App } from "@/lib/apps";

type AppIconProps = {
  app: Pick<App, "name" | "glyph" | "accent" | "iconSrc">;
  size?: number;
  className?: string;
};

export default function AppIcon({ app, size = 64, className }: AppIconProps) {
  // Real app icon (square art) — render it in a squircle mask.
  if (app.iconSrc) {
    return (
      <span
        className={`relative inline-block squircle overflow-hidden ${className ?? ""}`}
        style={{
          width: size,
          height: size,
          boxShadow: `inset 0 0 0 1px rgba(8,35,26,0.06), 0 14px 30px -12px ${app.accent.to}aa`,
        }}
      >
        <Image
          src={app.iconSrc}
          alt={`${app.name} icon`}
          width={size}
          height={size}
          className="h-full w-full object-cover"
        />
      </span>
    );
  }

  // Generated fallback icon: mint gradient squircle + glyph.
  return (
    <span
      className={`relative inline-grid place-items-center squircle ${className ?? ""}`}
      style={{
        width: size,
        height: size,
        background: `linear-gradient(150deg, ${app.accent.from}, ${app.accent.to})`,
        boxShadow: `inset 0 2px 6px rgba(255,255,255,0.45), 0 14px 30px -12px ${app.accent.to}aa`,
      }}
      aria-hidden="true"
    >
      <span
        className="absolute inset-0 squircle"
        style={{
          background:
            "radial-gradient(120% 90% at 30% 12%, rgba(255,255,255,0.4), transparent 55%)",
        }}
      />
      <Glyph
        name={app.glyph}
        style={{ width: size * 0.5, height: size * 0.5 }}
        className="relative text-white"
        strokeWidth={1.9}
      />
    </span>
  );
}
