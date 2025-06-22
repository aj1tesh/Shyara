module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',      // blue-600
        background: '#0D1117',   // Rich Black
        surface: '#161B22',      // Dark Charcoal
        'text-primary': '#E6EDF3', // Light Gray
        'text-secondary': '#8B949E', // Medium Gray
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};