/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  variants: {
    extend: {
      animation: ['group-hover', 'group-focus'],
    },
  },
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(0deg) scale(1.1)' },
          '25%': { transform: 'rotate(-3deg) scale(1.1)' },
          '75%': { transform: 'rotate(3deg) scale(1.1)' },
          '100%': { transform: 'rotate(0deg) scale(1.1)' },
        },
        shake: {
          '0%': {
            transform: 'translateX(0)',
          },
          '6.5%': {
            transform: 'translateX(-6px) rotateY(-9deg)',
          },
          '18.5%': {
            transform: 'translateX(5px) rotateY(7deg)',
          },
          '31.5%': {
            transform: 'translateX(-3px) rotateY(-5deg)',
          },
          '43.5%': {
            transform: 'translateX(2px) rotateY(3deg)',
          },
          '50%': {
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 1s linear infinite',
        shake: 'shake 1s ease-in-out infinite',
      },
      colors: {
        'emerald-750': '#047857',
        'slate-750': '#293548',
        'slate-850': '#172033',
      },
      boxShadow: {
        'radial-lg': '0 0 15px 3px rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        sans: [
          "Inter var, sans-serif",
          {
            fontFeatureSettings: '"cv11", "cv02", "cv03", "cv04"',
            fontVariationSettings: '"opsz" 32'
          }, ...defaultTheme.fontFamily.sans
        ],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
  ],
}
