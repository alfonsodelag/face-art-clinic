/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#1f2937",
        cocoa: "#6b5c58",
        rose: "#d6a4a4",
        sage: "#8da99b",
        cream: "#faf7f4",
        shell: "#f3ebe6",
        lavender: "#9f7aea"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(70, 56, 50, 0.12)"
      }
    }
  },
  plugins: []
};
