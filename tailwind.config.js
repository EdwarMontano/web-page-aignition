/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: false, 
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      ['sora']: ['Sora', 'sans'],
      ['sourceserif4']: ['SourceSerif4', 'serif'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    ],
}

