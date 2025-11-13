import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nyu: ["'NYU Perstare'", "sans-serif"],
        "nyu-bold": ["'NYU Perstare Bold'", "sans-serif"],
        "nyu-thin": ["'NYU Perstare Thin'", "sans-serif"],
        "nyu-italic": ["'NYU Perstare Italic'", "sans-serif"],
        "nyu-ultra": ["'NYU Perstare Ultra'", "sans-serif"],
        "nyu-condensed": ["'NYU Perstare Condensed'", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
