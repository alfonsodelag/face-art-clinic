/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Core brand palette
        ink: "#51473B",      // brown — headings, nav, footer bg
        cocoa: "#7A6E61",    // muted text — body copy, descriptions
        sage: "#AA800F",     // gold — eyebrow labels, highlights, CTA
        rose: "#D7BD7A",     // soft gold — selection, focus rings, subtle accents
        cream: "#FAF4EC",    // light cream — section backgrounds
        shell: "#F3E7D9",    // warm cream — warmer section backgrounds
        // Extended palette
        ivory: "#FCFEFB",    // clean ivory — cards, forms, navbar
        gold: "#AA800F",     // explicit gold alias
        deepBrown: "#332C25", // very dark brown — footer
        softGold: "#D7BD7A", // soft gold alias
        borderSoft: "#E4D6C5" // soft border color
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(70, 56, 50, 0.10)",
        card: "0 4px 24px rgba(81, 71, 59, 0.08)"
      }
    }
  },
  plugins: []
};
