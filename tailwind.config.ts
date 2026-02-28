import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  "#f0f2f9",
          100: "#d8ddf0",
          200: "#b0bae0",
          500: "#2a3f8f",
          700: "#1a2d6e",
          900: "#0F1B4C",
          950: "#090f2a",
        },
        accent: {
          green:        "#16a34a",
          "green-bg":   "#f0fdf4",
          "green-border":"#bbf7d0",
          "green-dark": "#15803d",
        },
        surface: "#F8FAFC",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Hiragino Sans",
          "Hiragino Kaku Gothic ProN",
          "Noto Sans JP",
          "sans-serif",
        ],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.04)",
        "card-hover": "0 4px 16px 0 rgb(0 0 0 / 0.08), 0 1px 3px -1px rgb(0 0 0 / 0.04)",
        "modal": "0 24px 64px -8px rgb(0 0 0 / 0.22)",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
