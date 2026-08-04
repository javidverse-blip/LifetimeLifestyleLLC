import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: { blue: "#05698E", teal: "#05698E", yellow: "#FECA05", ink: "#05698E" },
      },
      fontFamily: {
        display: ["var(--font-nunito)", "Nunito", "sans-serif"],
        body: ["var(--font-roboto)", "Roboto", "sans-serif"],
        accent: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(3, 105, 142, 0.16)",
        "card-hover": "0 22px 45px -18px rgba(3, 105, 142, 0.28)",
        soft: "0 7px 20px -10px rgba(0, 0, 0, 0.25)",
      },
      borderRadius: { "4xl": "2rem" },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out both",
        "fade-in": "fadeIn 0.5s ease-out both",
        "soft-bounce": "softBounce 2.2s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: { "0%": { opacity: "0", transform: "translateY(24px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        softBounce: { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } },
      },
    },
  },
  plugins: [],
};

export default config;
