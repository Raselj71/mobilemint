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
  /**
   * Optional data-deletion instructions. When present, the policy renders a
   * dedicated "Data deletion" section anchored at #data-deletion — the URL to
   * submit as the Data Deletion Instructions URL for platforms like Meta.
   */
  dataDeletion?: {
    summary: string;
    steps: string[];
  };
};

export type TermsData = {
  /** ISO date the terms take effect */
  effectiveDate: string;
  /** Short plain-language summary shown at the top of the terms */
  summary: string;
  /** Third-party platforms the user streams to / signs into, referenced in the ToS */
  platforms?: string[];
  /** Whether the app is free and ad-supported (drives the fees/ads clause) */
  adSupported?: boolean;
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
  /** Optional terms of service. When present, /apps/[slug]/terms is generated. */
  terms?: TermsData;
};

export const apps: App[] = [
  {
    slug: "pocket-scanner",
    name: "Pocket Scanner",
    tagline: "Scan, edit, and sign PDFs — right from your pocket.",
    category: "Productivity",
    status: "live",
    platforms: ["Android"],
    accent: { from: "#F6577A", to: "#E11748", ink: "#3A0714" },
    glyph: "scan",
    iconSrc: "/apps/pocket-scanner/icon.png",
    screenshots: [
      "/apps/pocket-scanner/screens/01-home.png",
      "/apps/pocket-scanner/screens/02-tools.png",
      "/apps/pocket-scanner/screens/03-reader.png",
      "/apps/pocket-scanner/screens/04-sign.png",
      "/apps/pocket-scanner/screens/05-watermark.png",
      "/apps/pocket-scanner/screens/06-compress.png",
      "/apps/pocket-scanner/screens/07-crop.png",
      "/apps/pocket-scanner/screens/08-reorder.png",
    ],
    version: "1.0.0",
    updated: "2026-07-19",
    storeUrl: "https://play.google.com/store/apps/details?id=com.mobilemint.pocketscanner",
    short:
      "Scan documents, edit and sign PDFs, and open any file — fast, private, and fully offline.",
    description: [
      "Pocket Scanner turns your phone into a document scanner and a complete PDF editor. Point your camera to capture receipts, IDs, notes, or whiteboards — automatic page detection gives you crisp, clean scans, and built-in OCR makes every page searchable and copyable.",
      "It's a whole document toolkit in one app: merge, split, reorder, and compress PDFs, sign contracts with a saved signature, annotate and redact, and open PDF, Word, Excel, PowerPoint, and EPUB files in a beautiful reader. Everything works fully offline — your files never leave your device, and no account is required.",
    ],
    features: [
      { icon: "scan", title: "Scan with OCR", body: "Capture documents, receipts, and IDs with automatic page detection — every scan is searchable." },
      { icon: "doc", title: "Full PDF toolkit", body: "Merge, split, reorder, rotate, and compress PDFs, then add page numbers or extract text." },
      { icon: "shield", title: "Sign & protect", body: "Sign contracts, add watermarks, password-protect files, and redact private information." },
      { icon: "folder", title: "Open any format", body: "Read PDF, Word, Excel, PowerPoint, EPUB, and text files in a clean viewer with dark mode." },
    ],
    screens: [
      { kind: "scan", title: "Scan" },
      { kind: "docs", title: "My Documents" },
      { kind: "reader", title: "Contract.pdf" },
    ],
    privacy: {
      lastUpdated: "2026-07-19",
      summary:
        "Pocket Scanner works entirely on your device — your scans and documents never leave your phone, and no account is required. The app is free and supported by ads, but it does not share your data with third parties.",
      collectsPersonalData: false,
      accountRequired: false,
      showsAds: true,
      usesAnalytics: false,
      sharesWithThirdParties: false,
      childDirected: false,
      dataPoints: [
        { type: "Camera", purpose: "Used only while scanning to capture pages. Images are processed on your device." },
        { type: "Documents & files", purpose: "The scans and files you open are stored locally on your device. We never upload or see them." },
        { type: "Advertising ID", purpose: "Used by our ad partner to display ads. It is not linked to your identity or your documents." },
      ],
      thirdParties: [
        { name: "Google AdMob", purpose: "Advertising", policyUrl: "https://support.google.com/admob/answer/6128543" },
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
  {
    slug: "golive-studio",
    name: "GoLive Studio",
    tagline: "Go live to YouTube and Facebook at the same time.",
    category: "Video",
    status: "coming-soon",
    platforms: ["Android"],
    accent: { from: "#FF7A5A", to: "#E01E4F", ink: "#3A0714" },
    glyph: "wave",
    iconSrc: "/apps/golive-studio/icon.svg",
    version: "1.0.0",
    updated: "2026-07-03",
    short:
      "Broadcast your camera or screen live to YouTube and Facebook at once — no computer needed.",
    description: [
      "GoLive Studio turns your phone into a multistreaming studio. Point your camera or share your screen and broadcast to YouTube and Facebook Live simultaneously — no laptop, capture card, or encoder required.",
      "Sign in with your own YouTube and Facebook accounts, pick where to go live, and start streaming in a couple of taps. You stay in control of your channels and pages; GoLive Studio only sends the stream you start, when you start it.",
    ],
    features: [
      { icon: "wave", title: "Multistream at once", body: "One tap sends your broadcast to YouTube and Facebook together." },
      { icon: "split", title: "Camera or screen", body: "Go live from your camera or share whatever's on your screen." },
      { icon: "users", title: "Your own accounts", body: "Connect your channels and pages securely — you keep full control." },
      { icon: "bolt", title: "No computer needed", body: "A complete streaming setup that lives entirely on your phone." },
    ],
    screens: [
      { kind: "player", title: "Live" },
      { kind: "split", title: "Destinations" },
      { kind: "stat", title: "Viewers" },
    ],
    privacy: {
      lastUpdated: "2026-07-03",
      summary:
        "GoLive Studio streams to the YouTube and Facebook accounts you connect. We use those platforms' official sign-in to get permission to start streams on your behalf — we never see or store your passwords, and we only broadcast the streams you start. Your video is sent directly to the platforms you choose, not to us.",
      collectsPersonalData: true,
      accountRequired: true,
      showsAds: true,
      usesAnalytics: true,
      sharesWithThirdParties: true,
      childDirected: false,
      dataPoints: [
        { type: "Google / YouTube account", purpose: "Used via Google sign-in (OAuth) only to create and start live streams on your YouTube channel. We never receive your password." },
        { type: "Facebook account", purpose: "Used via Facebook Login only to publish live videos to the pages or profile you choose. We never receive your password." },
        { type: "Camera & microphone", purpose: "Captured only while you are live to send your audio and video to the platforms you selected. The stream is not stored by us." },
        { type: "Screen recording", purpose: "Captured only when you choose to share your screen, and only while you are live." },
        { type: "Advertising ID", purpose: "Used by our ad partner to show ads and limit repetition." },
        { type: "Anonymous app diagnostics", purpose: "Crash logs and aggregated usage to improve the app.", optional: true },
      ],
      thirdParties: [
        { name: "Google / YouTube (YouTube Live Streaming API)", purpose: "Sign-in and live streaming to your YouTube channel", policyUrl: "https://policies.google.com/privacy" },
        { name: "Meta / Facebook (Facebook Login & Live API)", purpose: "Sign-in and live streaming to your Facebook pages", policyUrl: "https://www.facebook.com/policy.php" },
        { name: "Google AdMob", purpose: "Advertising", policyUrl: "https://support.google.com/admob/answer/6128543" },
        { name: "Google Firebase Analytics", purpose: "Aggregated usage analytics", policyUrl: "https://firebase.google.com/support/privacy" },
      ],
      dataDeletion: {
        summary:
          "GoLive Studio does not keep a server-side profile of you. The only account data it holds are the secure access tokens you grant when you connect YouTube or Facebook, which let the app start streams on your behalf. You can revoke these and delete all associated data at any time using the steps below.",
        steps: [
          "In GoLive Studio, open Settings → Connected accounts and tap Disconnect next to YouTube and/or Facebook. This deletes the stored access tokens from your device and requests deletion on our side.",
          "To fully revoke Facebook access, open Facebook → Settings & privacy → Settings → Apps and websites, select \"GoLive Studio\", and tap Remove.",
          "To fully revoke Google/YouTube access, visit https://myaccount.google.com/permissions, select \"GoLive Studio\", and tap Remove access.",
          "Uninstalling the app removes all remaining data stored on your device.",
          "To request deletion of any data associated with your account directly, email rasel.dev.cse@gmail.com with the subject \"Delete my data\". We will confirm and complete the deletion within 30 days.",
        ],
      },
    },
    terms: {
      effectiveDate: "2026-07-04",
      summary:
        "GoLive Studio is a tool that lets you broadcast to your own YouTube and Facebook accounts. You are responsible for the content you stream and must follow YouTube's and Facebook's own terms. The app is provided as-is and free with ads.",
      platforms: ["YouTube", "Facebook"],
      adSupported: true,
    },
  },
];

export function getApp(slug: string): App | undefined {
  return apps.find((a) => a.slug === slug);
}

export function getAppSlugs(): string[] {
  return apps.map((a) => a.slug);
}

export function getTermsSlugs(): string[] {
  return apps.filter((a) => a.terms).map((a) => a.slug);
}
