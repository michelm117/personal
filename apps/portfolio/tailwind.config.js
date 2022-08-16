const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'my-red': '#ff4a57',
        blue: '#24263B',
        'dark-blue': '#1F2235',
      },
    },
    container: {
      // padding: {
      //   DEFAULT: '1rem',
      //   sm: '2rem',
      //   md: '200rem',
      //   lg: '10rem',
      //   xl: '5rem',
      //   '2xl': '6rem',
      // },
    },
  },
  plugins: [],
};
