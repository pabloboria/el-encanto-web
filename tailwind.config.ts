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
        background: "var(--background)",
        foreground: "var(--foreground)",
        campo: {
          DEFAULT: "#6B8E4E",
          dark: "#4A5D3A",
        },
        yema: {
          DEFAULT: "#F2B84B",
          dark: "#E8A33D",
        },
        tierra: {
          DEFAULT: "#8B5A2B",
          dark: "#6B4226",
        },
        crema: {
          DEFAULT: "#FAF3E6",
          dark: "#F5EBD9",
        },
        ladrillo: "#B0492E",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
      },
      borderRadius: {
        blob: "63% 37% 54% 46% / 55% 45% 55% 45%",
        organic: "2rem 1rem 2rem 1rem / 1rem 2rem 1rem 2rem",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
