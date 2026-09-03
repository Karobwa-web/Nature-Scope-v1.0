/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nature: {
          50: '#f2f9f3',
          100: '#e1f2e5',
          500: '#2e7d32',
          600: '#256729',
          700: '#1b5e20',
          800: '#154819',
          900: '#0d3010',
        },
        warm: {
          50: '#faf8f5',
          100: '#f5f0e8',
          500: '#c29d59',
          600: '#a88340',
        }
      }
    },
  },
  plugins: [],
}
