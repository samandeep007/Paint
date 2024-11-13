/** @type {import('tailwindcss').Config} */
import tailwind3dtransforms from "@xpd/tailwind-3dtransforms";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwind3dtransforms
  ],
}
