module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightText: '#c8c8cf',
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