/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './pages/**/*.{vue,js}',
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}', // Add Nuxt config files for purging
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
