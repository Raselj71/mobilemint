import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mint brand ramp (from the MobileMint logo)
        mint: {
          50: "#EAFBF3",
          100: "#D2F6E4",
          200: "#A8EDCB",
          300: "#7AE3B0",
          400: "#4FE0A6",
          500: "#34CB8C",
          600: "#1FAE76",
          700: "#13865B",
          800: "#0A5A3C",
          900: "#073D29",
        },
        // Deep green-black ink
        ink: {
          DEFAULT: "#08231A",
          soft: "#2C4A3D",
          faint: "#6E8479",
        },
        canvas: "#F6FBF8",
        paper: "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        squircle: "30%",
      },
      boxShadow: {
        soft: "0 18px 50px -24px rgba(10, 90, 60, 0.35)",
        card: "0 24px 60px -28px rgba(10, 90, 60, 0.28)",
        glow: "0 0 0 1px rgba(31,174,118,0.12), 0 30px 80px -30px rgba(31,174,118,0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        float: "float 7s ease-in-out infinite",
        "spin-slow": "spin-slow 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
