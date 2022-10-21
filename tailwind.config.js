/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cgreen': '#64ffda',
        'light-cgreen': '#112240',
        'light-text': '#a8b2d1',
        'green-tint': 'rgba(100,255,218,0.1)',
        'navy':'#0a192f'
      },
      zIndex: {
        '-3':'-3'
      }
    },
  },
  plugins: [],
}
