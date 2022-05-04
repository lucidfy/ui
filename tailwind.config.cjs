const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  purge: ['src/app.html', 'src/**/*.svelte'],
  darkMode: 'class', // or 'media' or 'class'
  content: ['./src/**/*.{svelte,js,ts}'],
  plugins: [require("@tailwindcss/typography"), require('daisyui')],
  theme: {
    ...defaultTheme,
  }
};
