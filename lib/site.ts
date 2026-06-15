export const site = {
  name: "MobileMint",
  legalName: "MobileMint",
  tagline: "A small studio crafting apps people actually keep.",
  description:
    "MobileMint is an independent mobile app studio building thoughtful, privacy-respecting apps for Android — document scanning, the Holy Quran and prayer times, document reading and more.",
  email: "mobilemint.dev@gmail.com",
  domain: "mobilemint.dev",
  url: "https://mobilemint.dev",
  playConsole: "MobileMint",
  // Public Google Play developer page (placeholder until the real id is live)
  playStoreUrl: "https://play.google.com/store/apps/dev?id=MobileMint",
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
