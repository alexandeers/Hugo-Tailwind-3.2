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
        'lato': 'Lato'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}