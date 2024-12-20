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
        background: "var(--background)", // Deep gray for the background
        foreground: "var(--foreground)", // Neutral text
        accent: "#B2665D", // Reddish-orange for the main title
        subtitle: "#5FABE9", // Light blue for subtitles
        yellowAccent: "#E5BF7A", // Warm yellow for body or highlights
        purpleAccent: "#A267B6", // Lavender purple for headers
        greenAccent: "#6A9955", // Light green for metadata
      },
    },
  },
  plugins: [],
} satisfies Config;
