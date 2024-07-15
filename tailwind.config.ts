import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#D9D9D9",
        hover: "#924DBF",
        regalNightshade: {
          500: "#9E72C3",
          600: "#924DBF",
          700: "#7338A0",
          800: "#4A2574",
          900: "#0F0529"
        }
      },
      fontSize: {
        xs: "0.675rem",
        sm: "0.80rem",
      },
      borderRadius: {
        md: "0.275rem",
      },
    },
  },
  plugins: [],
};
export default config;
