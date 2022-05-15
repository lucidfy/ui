// const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  purge: [
    './src/*.html',
    './src/**/*.html',
    './src/**/*.svelte',
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  theme: {
    extend: {
      typography: {
        default: {
          css: {
            pre: false,
            code: false,
            'pre code': false,
            'code::before': false,
            'code::after': false
          },
        },
      },
    },
    // ...defaultTheme,
  },
  safelist: [
    {
      pattern: /btn-.+/,
    },
    {
      pattern: /opacity-.+/,
    },
    'list-none',
  ],
  daisyui: {},
}
