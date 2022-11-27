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
      keyframes: {
        'slide-left': {
          '0%': { opacity: 0, transform: 'translateX(15px)' },
          '20%': { opacity: 1, transform: 'translateX(0px)' },
          '80%': { opacity: 1, transform: 'translateX(-9px)' },
          '100%': { opacity: 0, transform: 'translateX(-15px)' },
        },
        'slide-right': {
          '0%': { opacity: 0, transform: 'translateX(-15px)' },
          '20%': { opacity: 1, transform: 'translateX(-0px)' },
          '80%': { opacity: 1, transform: 'translateX(9px)' },
          '100%': { opacity: 0, transform: 'translateX(15px)' },
        },
        blink: {
          '0%': { color: 'transparent' },
          '50%': { color: 'white' },
          '100%': { color: 'transparent' },
        },
      },
      animation: {
        'slide-arrow-left': 'slide-left 2s linear infinite',
        'slide-arrow-right': 'slide-right 2s linear infinite',
        blink: 'blink 1s step-end infinite',
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
  },
};
