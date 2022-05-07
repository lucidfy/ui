const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
module.exports = {
  plugins: [
    // (process.env.NODE_ENV === 'production') ? null : require('postcss-import'),
    // require('tailwindcss/nesting'),
    tailwindcss(),
    autoprefixer,
  ],
}
