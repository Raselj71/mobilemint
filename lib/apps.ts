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
  kind: "list" | "stat" | "player" | "calendar" | "split";
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
  /** glyph drawn inside the squircle icon */
  glyph: string;
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
    slug: "sprout",
    name: "Sprout",
    tagline: "Build better days, one habit at a time.",
    category: "Productivity",
    status: "live",
    platforms: ["Android"],
    accent: { from: "#4FE0A6", to: "#1FAE76", ink: "#073D29" },
    glyph: "leaf",
    version: "1.4.0",
    updated: "2026-05-28",
    rating: 4.8,
    installs: "50k+",
    storeUrl: "https://play.google.com/store/apps/details?id=dev.mobilemint.sprout",
    short:
      "A calm, local-first habit tracker that grows with you — no streak guilt, no clutter.",
    description: [
      "Sprout helps you build the routines that matter without the pressure of broken streaks or noisy notifications. Add a habit, pick a rhythm, and watch your week quietly take shape.",
      "Everything lives on your device by default. There is no account to create and nothing to sign in to — just open the app and start. When you want a deeper look, Sprout turns your history into gentle insights instead of judgmental stats.",
    ],
    features: [
      { icon: "leaf", title: "Local-first", body: "Your habits stay on your phone. No account, no cloud required." },
      { icon: "spark", title: "Flexible rhythms", body: "Daily, weekly, or custom — habits that bend instead of break." },
      { icon: "chart", title: "Gentle insights", body: "See trends and momentum without streak shaming." },
      { icon: "bell", title: "Quiet reminders", body: "Smart nudges you can fully tune, or turn off entirely." },
    ],
    screens: [
      { kind: "list", title: "Today" },
      { kind: "stat", title: "Momentum" },
      { kind: "calendar", title: "History" },
    ],
    privacy: {
      lastUpdated: "2026-05-28",
      summary:
        "Sprout is local-first. Your habit data never leaves your device unless you export it yourself. We collect only anonymous, aggregated usage analytics to fix crashes and improve the app.",
      collectsPersonalData: false,
      accountRequired: false,
      showsAds: false,
      usesAnalytics: true,
      sharesWithThirdParties: false,
      childDirected: false,
      dataPoints: [
        { type: "Habit & routine data", purpose: "Stored locally on your device to power the app. Never transmitted to us." },
        { type: "Anonymous app diagnostics", purpose: "Crash logs and aggregated usage to improve stability.", optional: true },
      ],
      thirdParties: [
        {
          name: "Google Firebase Crashlytics",
          purpose: "Anonymous crash reporting",
          policyUrl: "https://firebase.google.com/support/privacy",
        },
      ],
    },
  },
  {
    slug: "airwave",
    name: "Airwave",
    tagline: "Your city's stations, anywhere you go.",
    category: "Music & Audio",
    status: "live",
    platforms: ["Android"],
    accent: { from: "#34CB8C", to: "#13865B", ink: "#073D29" },
    glyph: "wave",
    version: "2.1.3",
    updated: "2026-06-04",
    rating: 4.6,
    installs: "100k+",
    storeUrl: "https://play.google.com/store/apps/details?id=dev.mobilemint.airwave",
    short:
      "Stream live radio from hundreds of stations with a buttery, battery-friendly player.",
    description: [
      "Airwave brings live radio into one clean, fast player. Browse by country, genre, or language, mark your favourites, and pick up exactly where you left off.",
      "A lightweight background player keeps the music going while you do everything else, with a rich notification and lock-screen controls. Airwave is free and supported by unobtrusive ads.",
    ],
    features: [
      { icon: "wave", title: "Hundreds of stations", body: "Browse live radio by country, genre, and language." },
      { icon: "heart", title: "Favourites", body: "One tap to save stations and jump back instantly." },
      { icon: "moon", title: "Sleep timer", body: "Drift off — Airwave fades out and stops on schedule." },
      { icon: "bolt", title: "Battery-friendly", body: "An efficient background player that sips power." },
    ],
    screens: [
      { kind: "player", title: "Now Playing" },
      { kind: "list", title: "Stations" },
      { kind: "stat", title: "Favourites" },
    ],
    privacy: {
      lastUpdated: "2026-06-04",
      summary:
        "Airwave is free and ad-supported. It does not require an account. To serve ads and measure performance, our advertising partner may process your device's advertising identifier.",
      collectsPersonalData: false,
      accountRequired: false,
      showsAds: true,
      usesAnalytics: true,
      sharesWithThirdParties: true,
      childDirected: false,
      dataPoints: [
        { type: "Advertising ID", purpose: "Used by our ad partner to show relevant ads and limit repetition." },
        { type: "Approximate usage analytics", purpose: "Which features and stations are used, in aggregate." },
        { type: "Favourites & settings", purpose: "Stored locally on your device." },
      ],
      thirdParties: [
        {
          name: "Google AdMob",
          purpose: "Advertising",
          policyUrl: "https://support.google.com/admob/answer/6128543",
        },
        {
          name: "Google Firebase Analytics",
          purpose: "Aggregated usage analytics",
          policyUrl: "https://firebase.google.com/support/privacy",
        },
      ],
    },
  },
  {
    slug: "splitly",
    name: "Splitly",
    tagline: "Split bills without the awkward math.",
    category: "Finance",
    status: "coming-soon",
    platforms: ["Android"],
    accent: { from: "#7AE3B0", to: "#1FAE76", ink: "#073D29" },
    glyph: "split",
    version: "1.0.0",
    updated: "2026-06-10",
    short:
      "Track shared expenses with friends and settle up in a tap. Currently in development.",
    description: [
      "Splitly makes shared spending painless. Start a group for a trip, a flat, or a dinner, add expenses as they happen, and let Splitly work out who owes whom — minimised to the fewest possible payments.",
      "An optional account lets you sync groups across devices and invite friends. Prefer to keep it private? Use Splitly entirely offline. Splitly is launching soon — join the list to hear first.",
    ],
    features: [
      { icon: "split", title: "Smart settle-up", body: "Fewest transactions to clear every balance." },
      { icon: "users", title: "Shared groups", body: "Trips, flats, dinners — keep them separate and tidy." },
      { icon: "globe", title: "Multi-currency", body: "Mix currencies in one group with live conversion." },
      { icon: "lock", title: "Yours to keep", body: "Use offline, or sign in to sync. Your call." },
    ],
    screens: [
      { kind: "split", title: "Balances" },
      { kind: "list", title: "Expenses" },
      { kind: "stat", title: "Summary" },
    ],
    privacy: {
      lastUpdated: "2026-06-10",
      summary:
        "Splitly works offline with no account. If you choose to create an account to sync and share groups, we store your email address and your group data securely to provide that feature.",
      collectsPersonalData: true,
      accountRequired: false,
      showsAds: false,
      usesAnalytics: true,
      sharesWithThirdParties: false,
      childDirected: false,
      dataPoints: [
        { type: "Email address", purpose: "Account creation and sync. Only if you sign up.", optional: true },
        { type: "Expense & group data", purpose: "Stored locally; synced to your account only if you sign in.", optional: true },
        { type: "Anonymous app diagnostics", purpose: "Crash logs and aggregated usage to improve the app.", optional: true },
      ],
      thirdParties: [
        {
          name: "Google Firebase",
          purpose: "Authentication, sync, and crash reporting",
          policyUrl: "https://firebase.google.com/support/privacy",
        },
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
