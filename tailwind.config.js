const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or false
  theme: {
    colors: {
      ...defaultTheme.colors,
      primary: 'var(--primary)',
      accent: 'var(--accent)',
      select: 'var(--select)',
      bgselect: 'var(--bg-select)'
    },
    fontFamily: {
      'sans': ['"DM Sans"', 'sans-serif']
    },
    extend: {}
  },
  variants: {
    extend: {}
  }
}