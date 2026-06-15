import Image from "next/image";
import Glyph from "./Glyph";
import type { App, Screen } from "@/lib/apps";

type Accent = App["accent"];

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-3 text-[9px] font-semibold text-ink/60">
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink/40" />
        <span className="inline-block h-1.5 w-3 rounded-[2px] bg-ink/40" />
      </span>
    </div>
  );
}

function Bar({ w, c }: { w: string; c?: string }) {
  return <span className="block h-2 rounded-full" style={{ width: w, background: c ?? "rgba(8,35,26,0.10)" }} />;
}

function ListScreen({ accent, title }: { accent: Accent; title: string }) {
  const rows = [
    { name: "Morning walk", done: true },
    { name: "Read 10 pages", done: true },
    { name: "Drink water", done: false },
    { name: "No phone after 10", done: false },
  ];
  return (
    <div className="px-5">
      <h4 className="font-display text-lg font-semibold text-ink">{title}</h4>
      <p className="mt-0.5 text-[10px] text-ink/50">Tuesday · 2 of 4 done</p>
      <div className="mt-4 space-y-2.5">
        {rows.map((r, i) => (
          <div key={i} className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-[0_6px_18px_-12px_rgba(10,90,60,0.4)]">
            <span
              className="grid h-7 w-7 place-items-center rounded-full text-white"
              style={{ background: r.done ? `linear-gradient(140deg, ${accent.from}, ${accent.to})` : "rgba(8,35,26,0.08)" }}
            >
              {r.done && <Glyph name="check" className="h-3.5 w-3.5" strokeWidth={2.4} />}
            </span>
            <span className={`flex-1 text-xs ${r.done ? "text-ink/40 line-through" : "text-ink/80"}`}>{r.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatScreen({ accent, title }: { accent: Accent; title: string }) {
  const bars = [40, 65, 50, 80, 72, 95, 60];
  return (
    <div className="px-5">
      <h4 className="font-display text-lg font-semibold text-ink">{title}</h4>
      <div className="mt-3 rounded-2xl bg-white p-4 shadow-[0_6px_18px_-12px_rgba(10,90,60,0.4)]">
        <p className="text-[10px] text-ink/50">This week</p>
        <p className="font-display text-2xl font-semibold" style={{ color: accent.to }}>
          86%
        </p>
        <div className="mt-3 flex h-20 items-end gap-1.5">
          {bars.map((b, i) => (
            <span
              key={i}
              className="flex-1 rounded-t-md"
              style={{ height: `${b}%`, background: `linear-gradient(180deg, ${accent.from}, ${accent.to})`, opacity: i === 5 ? 1 : 0.5 }}
            />
          ))}
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2.5">
        {["Best streak", "Total done"].map((l, i) => (
          <div key={i} className="rounded-2xl bg-white p-3 shadow-[0_6px_18px_-12px_rgba(10,90,60,0.4)]">
            <p className="text-[9px] text-ink/50">{l}</p>
            <p className="font-display text-base font-semibold text-ink">{i ? "248" : "31 days"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlayerScreen({ accent, title }: { accent: Accent; title: string }) {
  return (
    <div className="px-5">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-ink/40">{title}</p>
      <div
        className="mt-3 grid aspect-square place-items-center rounded-3xl text-white"
        style={{ background: `linear-gradient(150deg, ${accent.from}, ${accent.to})` }}
      >
        <Glyph name="wave" className="h-16 w-16" strokeWidth={1.4} />
      </div>
      <h4 className="mt-4 font-display text-base font-semibold text-ink">City Jazz FM</h4>
      <p className="text-[10px] text-ink/50">Live · 98.4 MHz</p>
      <div className="mt-3 h-1 rounded-full bg-ink/10">
        <span className="block h-1 w-2/3 rounded-full" style={{ background: accent.to }} />
      </div>
      <div className="mt-4 flex items-center justify-center gap-6 text-ink/70">
        <Glyph name="heart" className="h-5 w-5" />
        <span className="grid h-12 w-12 place-items-center rounded-full text-white" style={{ background: accent.to }}>
          <span className="flex gap-1">
            <span className="h-4 w-1 rounded bg-white" />
            <span className="h-4 w-1 rounded bg-white" />
          </span>
        </span>
        <Glyph name="moon" className="h-5 w-5" />
      </div>
    </div>
  );
}

function CalendarScreen({ accent, title }: { accent: Accent; title: string }) {
  return (
    <div className="px-5">
      <h4 className="font-display text-lg font-semibold text-ink">{title}</h4>
      <p className="mt-0.5 text-[10px] text-ink/50">June 2026</p>
      <div className="mt-3 grid grid-cols-7 gap-1.5">
        {Array.from({ length: 35 }).map((_, i) => {
          const active = [2, 3, 5, 8, 9, 10, 12, 15, 16, 19, 22, 23, 24, 26, 29].includes(i);
          const strong = [9, 10, 16, 23, 24].includes(i);
          return (
            <span
              key={i}
              className="aspect-square rounded-lg"
              style={{
                background: active
                  ? `linear-gradient(140deg, ${accent.from}, ${accent.to})`
                  : "rgba(8,35,26,0.05)",
                opacity: active ? (strong ? 1 : 0.55) : 1,
              }}
            />
          );
        })}
      </div>
      <div className="mt-4 rounded-2xl bg-white p-3 shadow-[0_6px_18px_-12px_rgba(10,90,60,0.4)]">
        <p className="text-[10px] text-ink/50">Consistency</p>
        <Bar w="78%" c={accent.to} />
      </div>
    </div>
  );
}

function SplitScreen({ accent, title }: { accent: Accent; title: string }) {
  const people = [
    { n: "You", v: "+ $42.50", up: true },
    { n: "Maya", v: "− $18.00", up: false },
    { n: "Theo", v: "− $24.50", up: false },
  ];
  return (
    <div className="px-5">
      <h4 className="font-display text-lg font-semibold text-ink">{title}</h4>
      <p className="mt-0.5 text-[10px] text-ink/50">Lisbon trip · 3 people</p>
      <div
        className="mt-3 rounded-2xl p-4 text-white"
        style={{ background: `linear-gradient(140deg, ${accent.from}, ${accent.to})` }}
      >
        <p className="text-[10px] opacity-80">You are owed</p>
        <p className="font-display text-2xl font-semibold">$42.50</p>
      </div>
      <div className="mt-3 space-y-2">
        {people.map((p, i) => (
          <div key={i} className="flex items-center justify-between rounded-2xl bg-white p-3 shadow-[0_6px_18px_-12px_rgba(10,90,60,0.4)]">
            <span className="flex items-center gap-2.5">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-mint-100 text-[10px] font-semibold text-mint-700">
                {p.n[0]}
              </span>
              <span className="text-xs text-ink/80">{p.n}</span>
            </span>
            <span className="text-xs font-semibold" style={{ color: p.up ? accent.to : "#C2410C" }}>
              {p.v}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScanScreen({ accent, title }: { accent: Accent; title: string }) {
  return (
    <div className="px-5">
      <h4 className="font-display text-lg font-semibold text-ink">{title}</h4>
      <p className="mt-0.5 text-[10px] text-ink/50">Auto-detecting edges…</p>
      <div className="mt-3 grid aspect-[3/4] place-items-center rounded-2xl bg-ink/90 p-3">
        <div className="relative h-full w-full rounded-lg" style={{ background: "linear-gradient(160deg,#fafdfb,#e7f6ee)" }}>
          {["left-1 top-1 border-l-2 border-t-2", "right-1 top-1 border-r-2 border-t-2", "left-1 bottom-1 border-l-2 border-b-2", "right-1 bottom-1 border-r-2 border-b-2"].map((c, i) => (
            <span key={i} className={`absolute h-5 w-5 rounded-[2px] ${c}`} style={{ borderColor: accent.from }} />
          ))}
          <div className="space-y-1.5 p-4 pt-6">
            <Bar w="68%" /><Bar w="90%" /><Bar w="80%" /><Bar w="58%" /><Bar w="74%" />
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-center">
        <span className="grid h-12 w-12 place-items-center rounded-full text-white ring-4 ring-mint-100" style={{ background: accent.to }}>
          <Glyph name="scan" className="h-5 w-5" strokeWidth={2} />
        </span>
      </div>
    </div>
  );
}

function DocsScreen({ title }: { title: string }) {
  const files = [
    { n: "Invoice_March.pdf", t: "PDF", c: "#E0524B", s: "1.2" },
    { n: "Project plan.docx", t: "DOC", c: "#3B82C4", s: "0.8" },
    { n: "Budget 2026.xlsx", t: "XLS", c: "#1FAE76", s: "0.4" },
    { n: "Scan_0142.jpg", t: "JPG", c: "#B07CD6", s: "2.6" },
  ];
  return (
    <div className="px-5">
      <h4 className="font-display text-lg font-semibold text-ink">{title}</h4>
      <div className="mt-3 flex items-center gap-2 rounded-full bg-white px-3.5 py-2 shadow-[0_6px_18px_-12px_rgba(10,90,60,0.4)]">
        <span className="h-1.5 w-1.5 rounded-full bg-ink/30" />
        <span className="text-[10px] text-ink/40">Search files</span>
      </div>
      <div className="mt-3 space-y-2.5">
        {files.map((f, i) => (
          <div key={i} className="flex items-center gap-3 rounded-2xl bg-white p-2.5 shadow-[0_6px_18px_-12px_rgba(10,90,60,0.4)]">
            <span className="grid h-9 w-9 place-items-center rounded-lg text-[8px] font-bold text-white" style={{ background: f.c }}>
              {f.t}
            </span>
            <span className="flex-1 overflow-hidden">
              <span className="block truncate text-xs font-medium text-ink/80">{f.n}</span>
              <span className="block text-[9px] text-ink/40">{f.s}MB · today</span>
            </span>
            <span className="text-ink/30">···</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReaderScreen({ accent, title }: { accent: Accent; title: string }) {
  return (
    <div className="px-5">
      <div className="flex items-center justify-between gap-2">
        <h4 className="truncate font-display text-sm font-semibold text-ink">{title}</h4>
        <Glyph name="share" className="h-4 w-4 shrink-0 text-ink/40" />
      </div>
      <div className="mt-3 rounded-xl bg-white p-4 shadow-[0_10px_30px_-14px_rgba(10,90,60,0.5)]">
        <span className="block h-2.5 w-2/3 rounded bg-ink/15" />
        <div className="mt-3 space-y-1.5">
          {["100%", "96%", "90%", "98%", "72%", "94%", "86%"].map((w, i) => (
            <Bar key={i} w={w} />
          ))}
        </div>
        <span className="mt-4 block h-2 w-1/3 rounded" style={{ background: accent.from }} />
        <div className="mt-2 space-y-1.5">
          {["92%", "84%", "96%", "60%"].map((w, i) => (
            <Bar key={i} w={w} />
          ))}
        </div>
      </div>
      <p className="mt-3 text-center text-[10px] text-ink/45">Page 1 of 12</p>
    </div>
  );
}

function PrayerScreen({ accent, title }: { accent: Accent; title: string }) {
  const prayers = [
    { en: "Fajr", bn: "ফজর", t: "4:42", done: true },
    { en: "Dhuhr", bn: "যোহর", t: "12:08", done: true },
    { en: "Asr", bn: "আসর", t: "4:31", now: true },
    { en: "Maghrib", bn: "মাগরিব", t: "6:51" },
    { en: "Isha", bn: "এশা", t: "8:14" },
  ];
  return (
    <div className="px-5">
      <h4 className="font-display text-lg font-semibold text-ink">{title}</h4>
      <p className="mt-0.5 text-[10px] text-ink/50">12 Dhul-Hijjah · Dhaka</p>
      <div className="mt-3 rounded-2xl p-4 text-white" style={{ background: `linear-gradient(140deg, ${accent.from}, ${accent.to})` }}>
        <p className="text-[10px] opacity-80">Next · Asr</p>
        <p className="font-display text-2xl font-semibold">in 1h 12m</p>
      </div>
      <div className="mt-3 space-y-2">
        {prayers.map((p, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-2xl p-2.5 shadow-[0_6px_18px_-12px_rgba(10,90,60,0.4)]"
            style={{ background: p.now ? `${accent.from}26` : "#fff" }}
          >
            <span className="flex items-center gap-2.5">
              <span
                className="grid h-7 w-7 place-items-center rounded-full text-white"
                style={{ background: p.now ? accent.to : "rgba(8,35,26,0.08)" }}
              >
                <Glyph name={p.done ? "check" : "moon"} className="h-3.5 w-3.5" strokeWidth={2.2} />
              </span>
              <span className="text-xs text-ink/80">
                {p.en} <span className="text-ink/40">· {p.bn}</span>
              </span>
            </span>
            <span className="text-xs font-semibold text-ink/70">{p.t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenBody({ accent, screen }: { accent: Accent; screen: Screen }) {
  switch (screen.kind) {
    case "list":
      return <ListScreen accent={accent} title={screen.title} />;
    case "stat":
      return <StatScreen accent={accent} title={screen.title} />;
    case "player":
      return <PlayerScreen accent={accent} title={screen.title} />;
    case "calendar":
      return <CalendarScreen accent={accent} title={screen.title} />;
    case "split":
      return <SplitScreen accent={accent} title={screen.title} />;
    case "scan":
      return <ScanScreen accent={accent} title={screen.title} />;
    case "docs":
      return <DocsScreen title={screen.title} />;
    case "reader":
      return <ReaderScreen accent={accent} title={screen.title} />;
    case "prayer":
      return <PrayerScreen accent={accent} title={screen.title} />;
  }
}

export default function PhoneMockup({
  accent,
  screen,
  image,
  alt,
  className,
}: {
  accent: Accent;
  screen?: Screen;
  /** real screenshot (public path); takes priority over the mock screen */
  image?: string;
  alt?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative w-[230px] shrink-0 rounded-[2.6rem] border border-white/60 bg-ink/90 p-2.5 shadow-[0_40px_80px_-30px_rgba(10,90,60,0.55)] ${className ?? ""}`}
    >
      {image ? (
        <div className="relative overflow-hidden rounded-[2.1rem] bg-canvas">
          <Image
            src={image}
            alt={alt ?? "App screenshot"}
            width={230}
            height={409}
            className="block h-auto w-full object-cover"
          />
        </div>
      ) : (
        <div className="relative overflow-hidden rounded-[2.1rem] bg-canvas pb-6">
          {/* notch */}
          <div className="absolute left-1/2 top-2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-ink/90" />
          <StatusBar />
          <div className="mt-3">{screen && <ScreenBody accent={accent} screen={screen} />}</div>
        </div>
      )}
    </div>
  );
}
