/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFF8EA',
        secondary: '#F37878',
        third: '#E94560',
        background: '#242424',
        dimWhite: 'rgba(255, 255, 255, 0.8)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '6xl': '4.632rem',
        '7xl': '5.232rem',
        '8xl': '6.132rem',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(1,.4,.7,1.54)',
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
};
