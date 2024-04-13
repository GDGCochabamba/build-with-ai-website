/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: { gray: "#626c75" },
      backgroundImage: {
        'desktop-about-section': "url('/src/assets/images/bg-about-us-desktop.svg')",
        'mobile-about-section': "url('/src/assets/images/bg-about-us-mobile.svg')",
      }
    },
  },
  plugins: [],
};
