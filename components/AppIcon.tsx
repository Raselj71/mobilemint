import Glyph from "./Glyph";
import type { App } from "@/lib/apps";

type AppIconProps = {
  app: Pick<App, "name" | "glyph" | "accent">;
  size?: number;
  className?: string;
};

export default function AppIcon({ app, size = 64, className }: AppIconProps) {
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
