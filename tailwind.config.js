/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

// module.exports = {
//   content: ['./*/*.html'],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: [
//           '"Inter var", sans-serif',
//           {
//             fontFeatureSettings: '"cv11", "ss01"',
//             fontVariationSettings: '"opsz" 32'
//           },
//         ],
//       },  
//   },
//   },
//   plugins: [],
// }
