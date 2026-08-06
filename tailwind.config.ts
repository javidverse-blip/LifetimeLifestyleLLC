import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#148691",
          teal: "#148691",
          light: "#148691",
          yellow: "#e4ad35",
          gold: "#d19f3c",
          green: "#148691",
          ink: "#148691",
        },
      },
      fontFamily: {
        display: ["var(--font-nunito)", "Nunito", "sans-serif"],
        body: ["var(--font-roboto)", "Roboto", "sans-serif"],
        accent: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(20, 134, 145, 0.18)",
        "card-hover": "0 22px 45px -18px rgba(20, 134, 145, 0.28)",
        soft: "0 7px 20px -10px rgba(0, 0, 0, 0.25)",
      },
      borderRadius: { "4xl": "2rem" },
    },
  },
  plugins: [],
};

export default config;
