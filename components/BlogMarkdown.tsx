import Link from "next/link";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

const linkClass = "font-medium text-mint-700 underline decoration-mint-300 underline-offset-4 transition-colors hover:text-mint-600";

// Typography mirrors the long-form pages (see PrivacyPolicy.tsx). The page header
// already renders the post title as the <h1>, so a `#` heading inside the markdown
// body is demoted to an <h2> to keep a single <h1> per page.
const components: Components = {
  h1: ({ children }) => (
    <h2 className="mt-2 font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">{children}</h2>
  ),
  h2: ({ children }) => <h2 className="mt-12 font-display text-xl font-semibold text-ink">{children}</h2>,
  h3: ({ children }) => <h3 className="mt-8 font-display text-lg font-semibold text-ink">{children}</h3>,
  p: ({ children }) => <p className="mt-3 leading-relaxed text-ink/70">{children}</p>,
  strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
  ul: ({ children }) => (
    <ul className="mt-4 list-disc space-y-2.5 pl-6 leading-relaxed text-ink/70 marker:text-mint-500">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-4 list-decimal space-y-2.5 pl-6 leading-relaxed text-ink/70 marker:font-semibold marker:text-mint-600">
      {children}
    </ol>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mt-6 rounded-3xl border border-mint-200 bg-mint-50/60 p-5 sm:p-6 [&>p]:mt-0 [&>p]:text-ink/75">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="mt-12 border-mint-100" />,
  a: ({ href = "", children }) => {
    if (/^https?:\/\//.test(href)) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {children}
        </a>
      );
    }
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={linkClass}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={linkClass}>
        {children}
      </a>
    );
  },
  table: ({ children }) => (
    <div className="mt-4 overflow-x-auto rounded-2xl border border-mint-100">
      <table className="w-full text-left text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-mint-50 text-ink">{children}</thead>,
  tbody: ({ children }) => <tbody className="divide-y divide-mint-100">{children}</tbody>,
  th: ({ children }) => <th className="px-4 py-3 font-semibold">{children}</th>,
  td: ({ children }) => <td className="px-4 py-3 align-top text-ink/65">{children}</td>,
};

export default function BlogMarkdown({ content }: { content: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  );
}
