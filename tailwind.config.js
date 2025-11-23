module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
      }
    }
  },
  screens: {
    lg: '900px',    // instead of 1024px
  },
  plugins: [],
}