import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1730",
          50: "#F0F4FA",
          100: "#DCE5F3",
          200: "#B8CBE7",
          300: "#8FAEDB",
          400: "#5D8BC9",
          500: "#3262A2",
          600: "#244B80", // Secondary Steel Blue
          700: "#1B3B66",
          800: "#132747",
          900: "#0B1730", // Primary Navy Blue
          950: "#060D1B",
        },
        steel: {
          DEFAULT: "#244B80",
          50: "#EFF4FA",
          100: "#DFEAF5",
          200: "#BED5EC",
          300: "#92BCE0",
          400: "#5A9ACF",
          500: "#387DBA",
          600: "#244B80", // Secondary Steel Blue
          700: "#1E3F6D",
          800: "#1A355A",
          900: "#162B48",
          950: "#0D192C",
        },
        surface: {
          DEFAULT: "#F2F5FA",
          subtle: "#F8FAFD",
          card: "#FFFFFF",
          border: "#E2E8F0",
        },
        body: {
          DEFAULT: "#45546A",
          muted: "#64748B",
          dark: "#1E293B",
        },
        energy: {
          cyan: "#0284C7",
          teal: "#0D9488",
          amber: "#D97706",
          emerald: "#059669",
        }
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(11, 23, 48, 0.05), 0 4px 6px -2px rgba(11, 23, 48, 0.02)',
        'card': '0 4px 20px -2px rgba(11, 23, 48, 0.06), 0 2px 4px -1px rgba(11, 23, 48, 0.03)',
        'card-hover': '0 12px 30px -4px rgba(11, 23, 48, 0.12), 0 4px 6px -2px rgba(11, 23, 48, 0.04)',
        'premium': '0 20px 40px -15px rgba(11, 23, 48, 0.2)',
      },
    },
  },
  plugins: [],
};

export default config;

