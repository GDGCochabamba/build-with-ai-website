/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: { gray: '#626c75' },
      backgroundImage: {
        'hero-section': "url('/src/assets/images/black-lines.svg')",
        'desktop-about-section':
          "url('/src/assets/images/bg-about-us-desktop.svg')",
        'mobile-about-section':
          "url('/src/assets/images/bg-about-us-mobile.svg')",
      },
      minHeight: {
        800: '800px',
      },
    },
  },
  plugins: [],
};
