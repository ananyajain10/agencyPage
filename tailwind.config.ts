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
      keyframes: {
        colorChange: {
          '0%': { backgroundColor: '#4F46E5' }, // Start color
          '50%': { backgroundColor: '#FA9E0D' }, // Mid color
          '100%': { backgroundColor: '#38BDF8' }, // End color
        },
      },
    },
  },
  plugins: [],
};


export default config;
