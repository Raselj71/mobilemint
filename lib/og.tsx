import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import { ogSize } from "@/lib/seo";
import { site } from "@/lib/site";

const MIME: Record<string, string> = {
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

/** Inline a file from /public as a data URI so the build needs no network access. */
function publicImage(publicPath: string): string {
  const ext = path.extname(publicPath);
  const data = fs.readFileSync(path.join(process.cwd(), "public", publicPath));
  return `data:${MIME[ext] ?? "image/png"};base64,${data.toString("base64")}`;
}

type OgImageInput = {
  eyebrow: string;
  title: string;
  /** public path of an app icon to feature (e.g. "/apps/deen/icon.png") */
  iconSrc?: string;
};

/** Branded 1200x630 share card: deep ink background, mint glow, title, and app icon. */
export function renderOgImage({ eyebrow, title, iconSrc }: OgImageInput) {
  const fontSize = title.length > 70 ? 54 : title.length > 45 ? 62 : 72;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          color: "#FFFFFF",
          backgroundColor: "#08231A",
          backgroundImage:
            "radial-gradient(circle at 100% 0%, rgba(52,203,140,0.35) 0%, rgba(8,35,26,0) 55%), radial-gradient(circle at 0% 100%, rgba(31,174,118,0.28) 0%, rgba(8,35,26,0) 55%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={publicImage("/brand/mobilemint-icon-512-square.png")} width={56} height={56} alt="" style={{ borderRadius: 16 }} />
          <div style={{ display: "flex", fontSize: 32, fontWeight: 700, letterSpacing: -0.5 }}>
            <span>Mobile</span>
            <span style={{ color: "#4FE0A6" }}>Mint</span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 56 }}>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div
              style={{
                display: "flex",
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: 5,
                textTransform: "uppercase",
                color: "#7AE3B0",
              }}
            >
              {eyebrow}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 24,
                fontSize,
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: -1.5,
              }}
            >
              {title}
            </div>
          </div>
          {iconSrc && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={publicImage(iconSrc)} width={220} height={220} alt="" style={{ borderRadius: 60 }} />
          )}
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "rgba(255,255,255,0.55)" }}>{site.domain}</div>
      </div>
    ),
    { ...ogSize },
  );
}
