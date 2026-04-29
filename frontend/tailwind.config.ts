import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          900: "#0B2B5A"
        },
        ink: {
          900: "#0F172A",
          700: "#334155",
          600: "#475569",
          500: "#64748B"
        },
        line: "#E2E8F0",
        footer: "#071A33"
      },
      boxShadow: {
        card: "0 18px 45px rgba(15, 23, 42, 0.08)",
        soft: "0 10px 30px rgba(37, 99, 235, 0.10)"
      },
      borderRadius: {
        card: "8px"
      },
      backgroundImage: {
        "grid-blue":
          "linear-gradient(rgba(37,99,235,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.07) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;

