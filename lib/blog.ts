import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "app", "blog");

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
  /** The app this post is about, when its slug is not the app's own (shows that app's card and Play button). */
  app?: string;
  /** Search keywords for the page's meta tags and structured data. */
  keywords: string[];
};

function readPost(file: string): BlogPost | null {
  const { data, content } = matter(fs.readFileSync(path.join(BLOG_DIR, file), "utf8"));
  // Files without a slug (e.g. the index.md stub) are not posts.
  if (!data.slug || !data.title) return null;
  return {
    slug: String(data.slug),
    title: String(data.title),
    description: String(data.description ?? ""),
    // YAML parses an unquoted `date: 2026-07-19` into a Date object.
    date: data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date ?? ""),
    content,
    app: data.app ? String(data.app) : undefined,
    keywords: Array.isArray(data.keywords) ? data.keywords.map(String) : [],
  };
}

export function getAllPosts(): BlogPost[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map(readPost)
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getPostSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}

/** The `count` posts that follow `slug` in date order, wrapping around to the newest. */
export function getMorePosts(slug: string, count = 3): BlogPost[] {
  const posts = getAllPosts();
  const index = posts.findIndex((post) => post.slug === slug);
  if (index === -1) return posts.slice(0, count);
  const others = [...posts.slice(index + 1), ...posts.slice(0, index)];
  return others.slice(0, count);
}

export function formatPostDate(date: string): string {
  const parsed = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
