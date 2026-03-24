/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bubblegum: '#ff7eb6',
        peach: '#ffd7ba',
        sunshine: '#ffe57a',
        mint: '#b8f2e6',
        sky: '#a0e7ff',
        lavender: '#cdb4ff',
      },
      boxShadow: {
        playful: '0 18px 45px rgba(149, 157, 165, 0.18)',
      },
      fontFamily: {
        display: ['"Trebuchet MS"', '"Comic Sans MS"', 'sans-serif'],
        tracing: ['"Raleway Dots"', 'cursive'],
      },
      backgroundImage: {
        confetti:
          'radial-gradient(circle at top left, rgba(255,255,255,0.9), transparent 22%), radial-gradient(circle at bottom right, rgba(255,255,255,0.5), transparent 20%)',
      },
    },
  },
  plugins: [],
};
