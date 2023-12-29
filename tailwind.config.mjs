/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "dark-primary": "hsl(var(--color-rich-black-primary) / <alpha-value>)",
        "dark-secondary":
          "hsl(var(--color-rich-black-secondary) / <alpha-value>)",
        "ghost-white": "hsl(var(--color-ghost-white) / <alpha-value>)",
        "levender-white": "hsl(var(--color-levender) / <alpha-value>)",
      },
      animation: {
        tilt: "tilt 10s infinite linear",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(1deg)",
          },
          "75%": {
            transform: "rotate(-1deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
