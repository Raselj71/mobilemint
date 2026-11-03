import { renderOgImage } from "@/lib/og";

export const dynamic = "force-static";

export function GET() {
  return renderOgImage({
    eyebrow: "The blog",
    title: "The story behind every app.",
  });
}
