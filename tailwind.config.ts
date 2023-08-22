import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
    "./module/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      screens: {
        xmd: "830px",
      },

      animation: {
        pulseOnce: "pulseOnce 0.8s ease-in-out",
        translateY: "translateY 0.4s cubic-bezier(0, 0, 0.58, 1)",
        translateYSlow: "translateYSlow 0.6s cubic-bezier(0, 0, 0.58, 1)",
      },

      keyframes: {
        pulseOnce: {
          "0%": { opacity: "0" },
          "50%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
        translateY: {
          "0%": { opacity: "0", transform: "translateY(60px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
        translateYSlow: {
          "0%": { opacity: "0", transform: "translateY(80px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
