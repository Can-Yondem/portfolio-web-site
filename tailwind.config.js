module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    height: {
      "250": "250px",
      "260": "260px",
      "280": "280px",
      "400": "400px",
      "600": "600px"
     },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
