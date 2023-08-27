/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'roll-text': {
          '0%': {
            marginBottom: '-11.5rem',
          },
          '20%': {
            marginBottom: '-6.3rem',
            opacity: 1,
          },
          '23%': {
            marginBottom: '-6.8rem',
          },
          '35%': {
            opacity: 0.2,
          },
          '43%': {},
          '50%': {
            marginBottom: '0.4rem',
            opacity: 1,
          },
          '55%': {
            marginBottom: '-0.1rem',
          },
          '64%': {
            opacity: 0.2,
          },
          '70%': {
            opacity: 1,
          },
          '80%': {
            marginBottom: '7.4rem',
          },
          '85%': {
            marginBottom: '6.6rem',
            opacity: 1,
          },
          '90%': {
            opacity: 0.2,
          },

          '100%': {
            marginBottom: '10rem',
          },
        },
      },
      animation: {
        'roll-text': 'roll-text 6s infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
