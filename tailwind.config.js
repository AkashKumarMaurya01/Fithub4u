/** @type {import('tailwindcss').Config} */
module.exports =
{
  content: ["*"],theme:
  {
    extend:{
      backgroundImage: {
        'backgroundimage': "url('/assets1/background1.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily:
      {
      mullish:["Mulish" , "sans-serif"],
      },
      colors:
      {
        deepBlue:"#02042a",
        lightBlue:"#2b84ea",
        lightBlue300:"#4b94ed",
        lightBlue500:"#0b72e7",
        greenLight:"#61cea6",
        grayBlue:"#344a6c",
        deepBlueHead:"#162f56",
        lightGray:"#e2e2e2",
        gray2:"#525a76",
        grayText:"#818597",

      },
    },
  },
  plugins: [],
}

