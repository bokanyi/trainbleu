/** @type {import('tailwindcss').Config} */

export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      fontFamily: {
        'sans': ['Poltawski Nowy', 'sans-serif'],
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
      },
      maxWidth: {
        's': '300px',
      },
      keyframes: {
        slide: {
          '0%': {width: '0%'  },
          '100%': {  width: '100%' },
        },
        back: {
          '0%': {backgroundSize: '0 200%' },
        },
        text: {
          '50%': {backgroundPosition: '0 -100%,0 0' },
        },
         
        },
          animation: {
            'back': 'back .7s infinite steps(1)',
            'text': 'text calc(var(--n)*.3s) steps(var(--n)) forwards;',
            'slide': 'slide 3.5s   steps(30, end) infinite',
          },
          backgroundSize: {
            'calc': 'calc(var(--n)*1ch) 200%',
          }
        
        
    },
  },
  plugins: [],
}

