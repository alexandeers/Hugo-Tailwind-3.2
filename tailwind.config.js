module.exports = {
  darkMode: 'class',
  content: ['./layouts/**/*.html', './content/**/*.md'],
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
        'icons': 'Material Icons',
      },
      backgroundImage: {
        'light-gradient': "linear-gradient(-45deg, #00d2ff 0%, #3a47d5 100%)",
        'dark-gradient': "linear-gradient(-45deg, #d53369 0%, #daae51 100%);",
        'seamless': "url(/seamless_pattern.png)",
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss/colors')
  ],
}