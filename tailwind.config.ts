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
          50: "#f0f2f9",
          100: "#d8ddf0",
          500: "#2a3f8f",
          700: "#1a2d6e",
          900: "#0F1B4C",
          950: "#090f2a",
        },
        accent: {
          green: "#16a34a",
          "green-bg": "#f0fdf4",
          "green-border": "#bbf7d0",
        },
        surface: "#F8FAFC",
      },
      fontFamily: {
        sans: [
          "Inter",
          "Hiragino Sans",
          "Hiragino Kaku Gothic ProN",
          "Noto Sans JP",
          "sans-serif",
        ],
      },
      letterSpacing: {
        japanese: "0.05em",
      },
    },
  },
  plugins: [],
};

export default config;
