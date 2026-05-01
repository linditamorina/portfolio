import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", 
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Lidhja direkte me variablat CSS
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          green: "#10b981",
          blue: "#0ea5e9",
          dark: "#0f172a",
          darker: "#020617",
        }
      },
      backgroundImage: {
        // Gradientët tani përshtaten sipas temës
        'glass-gradient': 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4))',
        'glass-gradient-dark': 'linear-gradient(to right bottom, rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.3))',
      }
    },
  },
  plugins: [],
};
export default config;