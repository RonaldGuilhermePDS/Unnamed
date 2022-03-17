module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        main: '#211540',
        white: '#FFFFFF',
        black: '#000000',
      },
    },
  },
  plugins: [],
};
