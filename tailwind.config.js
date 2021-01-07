module.exports = {
  purge: {
    enabled: true,
    content: ['./src/site/**/*.njk'],
  },
  theme: {
    fontFamily: {
      serif: ['"Della Respira"', 'serif'],
    },
    extend: {
      gridTemplateColumns: {
        '00': 'repeat(auto-fit, minmax(200px, 1fr))'
      },
      // backgroundImage: theme => ({
      //   'quotes-bg': "url('/static/assets/reading-order-guide.jpg')",
      //  })
    },
  },
}