const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  purge: ['src/app.html', 'src/**/*.svelte'],
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
  daisyui: {},
}
