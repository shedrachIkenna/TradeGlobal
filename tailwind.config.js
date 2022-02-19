module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightText: '#858585',
        darkText: '#12152e',
        darkbg: '#625a63',
        primary: '#0052cc'
      },
      fontFamily: {
        inter: ['Inter']
      },
    },
  },
  plugins: [],
}