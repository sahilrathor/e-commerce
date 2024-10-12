/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#589E4B',
        'secondary': '#2B8249',
        'light': '#88C14F',
        'dark': '#007250',
        'my-yellow': '#ffde55',
        'my-white': '#eeeeee',
        'my-black': '#252525',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
        },
      },
    },
  },
  plugins: [],
}