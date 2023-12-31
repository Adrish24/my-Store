/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '3xs':{'min':'360px', 'max':'414px'},
      '2xs': {'min': '415px', 'max': '519px'},
      'xs': {'min':'520px', 'max':'639px'},
      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px', 'max' : '1791px'},
      // => @media (min-width: 1536px) { ... }
      '3xl': {'min': '1792px'}
    },
    extend: {
      fontFamily:{
        'montserrat': ['Montserrat', 'sans-serif']
      },
      fontSize:{
        '2xs':'0.5rem',
        '3xs': '0.25rem'
      }
    },
  },
  plugins: [],
}

