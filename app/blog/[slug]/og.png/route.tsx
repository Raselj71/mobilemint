import { getApp } from "@/lib/apps";
import { getPost, getPostSlugs } from "@/lib/blog";
import { renderOgImage } from "@/lib/og";

// Route handler (not the opengraph-image file convention): Next 14.2 can't statically
// export convention images inside dynamic segments, but it can export route handlers.
export const dynamic = "force-static";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export function GET(_request: Request, { params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  return renderOgImage({
    eyebrow: "The blog",
    title: post?.title ?? "MobileMint Blog",
    iconSrc: getApp(params.slug)?.iconSrc,
  });
}
