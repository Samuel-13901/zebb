/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens:{
      'sm': '768px',
      'md': '1152px',
      'lg': '1440px',
      'xl': '1920px',
    },
    extend: {
      fontFamily:{
        'merriweather':['Merriweather'],
      },
      colors:{
        'primary-500':['#FF5678'],
        'black-btn': ['#020E35'],
        'work-bg': ['#FFEEF6']
      },
      boxShadow:{
        'team-shadow': "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
      },
      gridTemplateRows:{
        '4': 'repeat(4,minmax(0,200px))'
      },
    },
  },
  plugins: [],
}

