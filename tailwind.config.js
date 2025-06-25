module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A259F7',      // Vibrant Purple
        secondary: '#6D28D9',    // Deep Purple
        accent: '#C084FC',       // Light Purple
        background: '#09090B',   // True Black
        surface: '#18181B',      // Near Black
        'text-primary': '#F4F4F5', // Off-white
        'text-secondary': '#D1D5DB', // Brighter Gray for body text
        'purple-glow': '#B983FF', // Neon Purple for 3D effects
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};