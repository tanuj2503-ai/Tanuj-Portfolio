/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Sora"', 'sans-serif'],
        display: ['"Orbitron"', 'sans-serif'],
      },
      colors: {
        canvas: '#060812',
        panel: '#11182c',
        edge: '#2a3d78',
        cyan: '#27e5ff',
        lime: '#baff46',
        coral: '#ff6b7d',
        'text-main': '#f7fbff',
        'text-soft': '#98a7c8',
      },
    },
  },
  plugins: [],
}
