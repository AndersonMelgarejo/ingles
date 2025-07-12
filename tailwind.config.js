/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenpastel: {
          50: '#f3fdf6',
          100: '#e0faea',
          200: '#b6f3d2',
          300: '#8beabb',
          400: '#5edfa2',
          500: '#36d48b',
          600: '#1dbb72',
          700: '#15915a',
          800: '#106b43',
          900: '#0a472d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}