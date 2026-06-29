export type Platform = "Android" | "iOS";
export type AppStatus = "live" | "coming-soon";

export type DataPoint = {
  type: string;
  purpose: string;
  optional?: boolean;
};

export type PrivacyData = {
  /** ISO date the policy was last reviewed */
  lastUpdated: string;
  /** Short plain-language summary shown at the top of the policy */
  summary: string;
  collectsPersonalData: boolean;
  accountRequired: boolean;
  showsAds: boolean;
  usesAnalytics: boolean;
  sharesWithThirdParties: boolean;
  childDirected: boolean;
  dataPoints: DataPoint[];
  /** Named third-party processors / SDKs */
  thirdParties: { name: string; purpose: string; policyUrl: string }[];
};

export type Feature = {
  title: string;
  body: string;
  /** key into the icon set in components/Glyph.tsx */
  icon: string;
};

export type Screen = {
  /** which mock screen template to render */
  kind: "list" | "stat" | "player" | "calendar" | "split" | "scan" | "docs" | "reader" | "prayer";
  title: string;
};

export type App = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  status: AppStatus;
  platforms: Platform[];
  /** brand accent for this app, used in icon + detail page */
  accent: { from: string; to: string; ink: string };
  /** glyph drawn inside the squircle icon (fallback when iconSrc is absent) */
  glyph: string;
  /** real app icon image (public path); overrides the generated glyph icon */
  iconSrc?: string;
  /** real Play Store screenshots (public paths); shown instead of mock screens */
  screenshots?: string[];
  version: string;
  updated: string;
  rating?: number;
  installs?: string;
  storeUrl?: string;
  short: string;
  description: string[];
  features: Feature[];
  screens: Screen[];
  privacy: PrivacyData;
};

export const apps: App[] = [
  {
    slug: "pocket-scanner",
    name: "PocketScanner",
    tagline: "Turn your phone into a pocket document scanner.",
    category: "Productivity",
    status: "live",
    platforms: ["Android"],
    accent: { from: "#4FE0A6", to: "#1FAE76", ink: "#073D29" },
    glyph: "scan",
    iconSrc: "/apps/pocket-scanner/icon.png",
    version: "3.2.1",
    updated: "2026-06-02",
    rating: 4.7,
    installs: "500k+",
    storeUrl: "https://play.google.com/store/apps/details?id=dev.mobilemint.pocketscanner",
    short:
      "Scan, clean up, and share documents in seconds — crisp PDFs with automatic edge detection.",
    description: [
      "PocketScanner turns any document, receipt, or whiteboard into a clean, shareable file. Point your camera, let it detect the edges automatically, and you have a perfectly cropped page in a moment.",
      "One-tap filters remove shadows and boost contrast for crisp, readable scans. Bundle pages into a single PDF, save as a high-resolution image, and share anywhere — all without creating an account. Everything is processed on your device.",
    ],
    features: [
      { icon: "scan", title: "Auto edge detection", body: "Point and shoot — PocketScanner finds the page and straightens it for you." },
      { icon: "sparkles", title: "One-tap cleanup", body: "Boost contrast and remove shadows for crisp, professional scans." },
      { icon: "doc", title: "Export to PDF", body: "Combine pages into a single PDF or high-resolution image instantly." },
      { icon: "share", title: "Share anywhere", body: "Send to email, chat, or your favourite cloud in a tap." },
    ],
    screens: [
      { kind: "scan", title: "Scan" },
      { kind: "docs", title: "My Scans" },
      { kind: "reader", title: "Scan_0142.pdf" },
    ],
    privacy: {
      lastUpdated: "2026-06-02",
      summary:
        "PocketScanner processes your scans entirely on your device — your documents are never uploaded to us. The app is free and ad-supported, so our advertising partner may process your device's advertising identifier.",
      collectsPersonalData: false,
      accountRequired: false,
      showsAds: true,
      usesAnalytics: true,
      sharesWithThirdParties: true,
      childDirected: false,
      dataPoints: [
        { type: "Camera", purpose: "Used only while scanning to capture pages. Images are processed on your device." },
        { type: "Scanned documents", purpose: "Stored locally on your device. We never upload or see them." },
        { type: "Advertising ID", purpose: "Used by our ad partner to show ads and limit repetition." },
        { type: "Anonymous app diagnostics", purpose: "Crash logs and aggregated usage to improve the app.", optional: true },
      ],
      thirdParties: [
        { name: "Google AdMob", purpose: "Advertising", policyUrl: "https://support.google.com/admob/answer/6128543" },
        { name: "Google Firebase Analytics", purpose: "Aggregated usage analytics", policyUrl: "https://firebase.google.com/support/privacy" },
      ],
    },
  },
  {
    slug: "deen",
    name: "Deen",
    tagline: "Prayer times, Quran, and qibla — beautifully simple.",
    category: "Lifestyle",
    status: "live",
    platforms: ["Android"],
    accent: { from: "#34CB8C", to: "#13865B", ink: "#073D29" },
    glyph: "crescent",
    iconSrc: "/apps/deen/icon.png",
    screenshots: [
      "/apps/deen/screens/02-prayer.png",
      "/apps/deen/screens/03-quran.png",
      "/apps/deen/screens/01-home.png",
      "/apps/deen/screens/04-quran-audio.png",
      "/apps/deen/screens/05-hadith.png",
      "/apps/deen/screens/06-dua.png",
    ],
    version: "2.0.4",
    updated: "2026-06-09",
    rating: 4.9,
    installs: "100k+",
    storeUrl: "https://play.google.com/store/apps/details?id=com.mobilemint.deen",
    short:
      "Accurate prayer times, adhan reminders, the Holy Quran, and qibla — Bangla-first and offline.",
    description: [
      "Deen is a calm, ad-light companion for daily worship, designed in Bangla from the ground up. Get accurate prayer times for your location, gentle adhan reminders, and a qibla compass that works offline.",
      "Read the Holy Quran with translation, bookmark your place, and keep everything available without a connection. Deen asks for the minimum it needs and keeps your data on your device.",
    ],
    features: [
      { icon: "bell", title: "Adhan reminders", body: "Precise prayer-time notifications with a choice of adhans." },
      { icon: "book", title: "The Holy Quran", body: "Read with translation and bookmarks — fully offline." },
      { icon: "compass", title: "Qibla finder", body: "Point toward the Kaaba with an accurate on-device compass." },
      { icon: "globe", title: "Bangla-first", body: "Crafted in Bangla, with more languages built in." },
    ],
    screens: [
      { kind: "prayer", title: "Today" },
      { kind: "reader", title: "Al-Fatihah" },
    ],
    privacy: {
      lastUpdated: "2026-06-09",
      summary:
        "Deen works offline and needs no account. It uses your approximate location only to calculate prayer times and qibla direction on your device — you can also set your city manually. The app is free and ad-supported.",
      collectsPersonalData: false,
      accountRequired: false,
      showsAds: true,
      usesAnalytics: true,
      sharesWithThirdParties: true,
      childDirected: false,
      dataPoints: [
        { type: "Approximate location", purpose: "Used on-device to compute prayer times and qibla. Optional — you can set your city manually.", optional: true },
        { type: "Notifications", purpose: "To deliver adhan and prayer-time reminders you enable." },
        { type: "Advertising ID", purpose: "Used by our ad partner to show ads and limit repetition." },
        { type: "Anonymous app diagnostics", purpose: "Crash logs and aggregated usage to improve the app.", optional: true },
      ],
      thirdParties: [
        { name: "Google AdMob", purpose: "Advertising", policyUrl: "https://support.google.com/admob/answer/6128543" },
        { name: "Google Firebase Analytics", purpose: "Aggregated usage analytics", policyUrl: "https://firebase.google.com/support/privacy" },
      ],
    },
  },
  {
    slug: "all-document-reader",
    name: "All Document Reader",
    tagline: "Open any document — PDF, Word, Excel, and more.",
    category: "Productivity",
    status: "live",
    platforms: ["Android"],
    accent: { from: "#7AE3B0", to: "#1FAE76", ink: "#073D29" },
    glyph: "folder",
    iconSrc: "/apps/all-document-reader/icon.png",
    version: "1.8.0",
    updated: "2026-05-30",
    rating: 4.6,
    installs: "1M+",
    storeUrl: "https://play.google.com/store/apps/details?id=com.mobilemint.allfilereader",
    short:
      "One fast, lightweight reader for PDF, Word, Excel, PowerPoint, and text files.",
    description: [
      "All Document Reader opens virtually any file you throw at it — PDF, Word, Excel, PowerPoint, and plain text — in a single, fast app, so you don't need a separate viewer for every format.",
      "A smart library organises your files by type and recents, large documents open instantly, and everything is read locally on your device. It's free, lightweight, and gets out of your way.",
    ],
    features: [
      { icon: "doc", title: "Every format", body: "PDF, DOC/DOCX, XLS/XLSX, PPT, and TXT — all in one place." },
      { icon: "bolt", title: "Fast & light", body: "Opens large files instantly without slowing your phone down." },
      { icon: "folder", title: "Smart library", body: "Files auto-organised by type, with quick access to recents." },
      { icon: "lock", title: "Stays on device", body: "Your files are read locally and never uploaded." },
    ],
    screens: [
      { kind: "docs", title: "Library" },
      { kind: "reader", title: "Project plan.docx" },
    ],
    privacy: {
      lastUpdated: "2026-05-30",
      summary:
        "All Document Reader opens the files you choose directly on your device — we never upload them. The app is free and ad-supported, so our advertising partner may process your device's advertising identifier.",
      collectsPersonalData: false,
      accountRequired: false,
      showsAds: true,
      usesAnalytics: true,
      sharesWithThirdParties: true,
      childDirected: false,
      dataPoints: [
        { type: "Files & storage access", purpose: "Used only to open and display the documents you choose. Files are read on your device." },
        { type: "Advertising ID", purpose: "Used by our ad partner to show ads and limit repetition." },
        { type: "Anonymous app diagnostics", purpose: "Crash logs and aggregated usage to improve the app.", optional: true },
      ],
      thirdParties: [
        { name: "Google AdMob", purpose: "Advertising", policyUrl: "https://support.google.com/admob/answer/6128543" },
        { name: "Google Firebase Analytics", purpose: "Aggregated usage analytics", policyUrl: "https://firebase.google.com/support/privacy" },
      ],
    },
  },
];

export function getApp(slug: string): App | undefined {
  return apps.find((a) => a.slug === slug);
}

export function getAppSlugs(): string[] {
  return apps.map((a) => a.slug);
}
