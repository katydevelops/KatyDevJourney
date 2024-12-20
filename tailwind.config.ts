import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Dark background
        foreground: "var(--foreground)", // Light text
        panel: "var(--panel-bg)", // Subtle panel background
        accent: "var(--accent)", // Vibrant accent color
        muted: "var(--muted)", // Muted text color
      },
      fontFamily: {
        code: ["Fira Code", "Consolas", "Courier", "monospace"], // Code-style fonts
      },
    },
  },
  plugins: [require("@tailwindcss/typography")], // Add typography plugin
} satisfies Config;
