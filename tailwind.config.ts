import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        onyx: {
          DEFAULT: "#080808",
          800: "#121212",
          700: "#1A1A1A",
          600: "#222222",
          500: "#2A2A2A",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E5C378",
          amber: "#B37D3E",
          walnut: "#8C5828",
          deep: "#6B4118",
        },
        ivory: {
          DEFAULT: "#F4F4F6",
          muted: "#A1A1AA",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-gold":
          "linear-gradient(135deg, #8C5828 0%, #D4AF37 40%, #E5C378 60%, #D4AF37 80%, #B37D3E 100%)",
        "gradient-gold-radial":
          "radial-gradient(ellipse at center, #E5C378 0%, #D4AF37 40%, #8C5828 100%)",
        "gradient-dark":
          "linear-gradient(180deg, #080808 0%, #121212 50%, #080808 100%)",
        "gradient-cta":
          "linear-gradient(135deg, #080808 0%, #1A0E00 50%, #3D2B0A 100%)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "pulse-gold": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.2)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        shimmer: "shimmer 3s linear infinite",
        "pulse-gold": "pulse-gold 2s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
      },
      screens: {
        xs: "480px",
        "3xl": "1920px",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "100": "25rem",
        "112": "28rem",
        "128": "32rem",
      },
    },
  },
  plugins: [],
};

export default config;
