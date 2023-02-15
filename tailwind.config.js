const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": {
              content: ''
            },
            "code::after": {
              content: ''
            }
          }
        }
      },
      fontFamily: {
        'lato': 'Lato',
        'montalt': 'Montserrat Alternates',
      },
      backgroundImage: {
        'light-gradient': "linear-gradient(-45deg, #00d2ff 0%, #3a47d5 100%)",
        'dark-gradient': "linear-gradient(-45deg, #d53369 0%, #daae51 100%);",
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}