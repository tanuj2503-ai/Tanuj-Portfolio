/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Using 'Inter' as a modern, clean alternative to San Francisco
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Dark theme with a neon accent color
        'primary-dark': '#0a0a0a',
        'secondary-dark': '#1a1a1a',
        'accent': '#00ff99',
      },
    },
  },
  plugins: [],
}