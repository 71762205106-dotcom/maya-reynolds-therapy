import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { ink: "#24333B", sage: "#718A78", "sage-dark": "#4F6958", sand: "#F3EEE6", cream: "#FAF8F4", clay: "#B98772", mist: "#E7EEE8" },
      fontFamily: { sans: ["var(--font-inter)", "Arial", "sans-serif"], serif: ["var(--font-cormorant)", "Georgia", "serif"] },
      boxShadow: { soft: "0 20px 60px rgba(36, 51, 59, 0.10)" }
    }
  },
  plugins: []
};
export default config;