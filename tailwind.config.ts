import type { Config } from "tailwindcss";
import plugin from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#151419",
        secondary: "#95979e",
        terciary: "#e9eaec",
        sections: "#1B1B1E",
        titles: "#FBFBFB",
        borders: "#e5e7eb",
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slidetop: {
          "0%": {
            opacity: "0",
            top: "0px",
          },
          "100%": {
            opacity: "1",
            top: "10px",
          },
        },
      },
      animation: {
        appear: "appear 0.3s ease-in",
        // slidetop: "slidetop 0.3s ease-in",
      },
    },
  },
  plugins: [],
};
export default config;
