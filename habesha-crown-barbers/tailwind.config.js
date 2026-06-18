/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#C5A059',
          dark: '#0F0F0F',
          light: '#FFFFFF',
          green: '#1E4E3B',
          gray: '#A3A3A3',
          card: '#151515'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero/hero-banner.png')",
      }
    },
  },
  plugins: [],
}
