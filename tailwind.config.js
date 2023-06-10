/** @type {import('tailwindcss').Config} */

export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        // Roboto: ['Roboto', 'sans-serif']
      },
      dropShadow: {
        'md': '2px 2px 0px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],
       
      },
      boxShadow: {
        'inner': 'inset 100vw 0 0 0 #7dd3fc',
        'none': 'inset 0 0 0 0 #7dd3fc',
      },
      width:{
        '88': '22rem',
      },
      height: {
        '88': '22rem',
        '128': '32rem',
      },
      transitionProperty: {
        'rounded': 'rounded',
      }
    },
  },
  plugins: [],
}

