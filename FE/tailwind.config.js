/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#589E4B',
        'secondary': '#2B8249',
        'light': '#88C14F',
        'dark': '#007250',
        'yellow': '#ffde55',
        'clr4': '#fff',
        'clr5': '#000',
      },
    },
  },
  plugins: [],
}