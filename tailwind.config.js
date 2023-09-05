/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      minWidth: {
        game: 'calc((100dvh*1512)/680)',
      },
      minHeight: {
        game: '100dvh',
      },
      transition: {
        scale: '.3s ease-in-out',
      },
    },
  },
  plugins: [],
};
