module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'bgcolor':'#020624',
        'bgcolor-main':'#070417',
        'bgNavBar':'#171525',
        'bgGroupDevice':'#5F5F5F',
        'theamButton':'#1B143F',
        'theamButton-hover':'#4533a1',
        'Logo-l':'#C69DFF',
        'Logo-r':'#4F76FF',
        'color-line':'#00C300',
        'color-line-hover': '#00E000',
        'color-red': '#D92525',
  
      },
      fontFamily: {
        Prompt: [
          'Prompt',
          'sans-serif'
        ]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
