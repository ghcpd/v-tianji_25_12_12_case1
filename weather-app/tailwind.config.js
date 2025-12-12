module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        secondary: '#1E293B',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
