/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-100': '#B4E6FE',
        'primary-200': '#83D5FD',
        'primary-300': '#52C5FB',
        'primary-400': '#2FB8FA',
        'primary-500': '#16ABF8',
        'primary-600': '#1C9EE9',
        'primary-700': '#198BD5',
        'primary-800': '#177AC1',
        'primary-900': '#177AC1',
        'gray-100': '#F0F0F0',
        'gray-200': '#E6E6E6',
        'gray-300': '#D8D8D8',
        'gray-400': '#B0B0B0',
        'gray-500': '#909090',
        'gray-600': '#888888',
        'gray-700': '#555555',
        'gray-800': '#393939',
        'gray-900': '#171717',
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
}
