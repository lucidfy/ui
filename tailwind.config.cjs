const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  theme: {
    extend: {},
    ...defaultTheme,
  },
  safelist: [
    {
      pattern: /btn-.+/,
    },
    {
      pattern: /opacity-.+/,
    },
    "list-none",
  ],
  daisyui: {
    themes: ['cmyk', 'dark'],
  },
}
