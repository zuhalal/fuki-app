module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        backgroundColor: theme => ({

          ...theme('colors'),
  
          'primary': '#3490dc',
  
          'secondary': '#ffed4a',
  
          'danger': '#e3342f',

          'biru-fuki': '#7BBACF',

          'hijau-fuki': '#9BBA47',

          'putih-fuki': '#F1F3F6',

          'hitam-fuki': '#424242',


        }),

        textColor: {

          'biru-fuki': '#7BBACF',

          'hijau-fuki': '#9BBA47',
        },

        fontFamily: {

            
            DMSans : ['DM Sans'],


          }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
