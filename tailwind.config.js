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
        'roll-on': {
          '0%': {
            transform: 'translateY(-50%)',
            opacity: 0.1,
          },
          '30%': {
            transform: 'translateY(0%)',
            opacity: 1,
          },

          '55%': {
            opacity: 0.1,
          },
          '100%': {
            transform: 'translateY(150%)',
          },
        },
      },
      animation: {
        'roll-on': 'roll-on 5s infinite',
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
