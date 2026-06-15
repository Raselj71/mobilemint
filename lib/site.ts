export const site = {
  name: "MobileMint",
  legalName: "MobileMint",
  tagline: "A small studio crafting apps people actually keep.",
  description:
    "MobileMint is an independent mobile app studio building thoughtful, privacy-respecting apps for Android — document scanning, the Holy Quran and prayer times, document reading and more.",
  email: "mobilemint.dev@gmail.com",
  // Canonical host — update to your custom domain (e.g. mobilemint.dev) once it's live.
  domain: "mobilemint.vercel.app",
  url: "https://mobilemint.vercel.app",
  playConsole: "MobileMint",
  // Public Google Play developer page
  playStoreUrl: "https://play.google.com/store/apps/dev?id=6941996920045495645",
  social: {
    github: "https://github.com/mobilemint",
    x: "https://x.com/mobilemint",
  },
  foundedYear: 2024,
} as const;

export const nav = [
  { label: "Apps", href: "/apps" },
  { label: "About", href: "/about" },
  { label: "Hire", href: "/hire" },
  { label: "Contact", href: "/contact" },
] as const;
