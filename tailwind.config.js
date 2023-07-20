/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    extend: {
      opacity: ['group-hover', 'group-focus', 'focus-within'],
      pointerEvents: ['group-hover', 'group-focus', 'focus-within'],
    },
  },
  theme: {
    extend: {
      colors: {
        'emerald-750': '#047857',
      },
      boxShadow: {
        'radial-lg': '0 0 15px 3px rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        'sans': ['Be Vietnam Pro', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
