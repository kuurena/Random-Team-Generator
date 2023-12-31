/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        space: "url(/public/spaceBg.svg)",
      },
      colors: {
        threeDs: {
          bg: "rgb(253,227,212)",
          darkPink: "rgb(248,164,179)",
          darkPinkShadow: "rgb(238,105,88)",
          darkYellow: "rgb(254,238,205)",
          darkYellowShadow: "rgb(252,119,114)",
          lightPink: "rgb(254,224,243)",
          lightPinkShadow: "rgb(250,209,173)",
          cream: "rgb(254,237,229)",
          creamShadow: "rgb(251,202,157)",
          lightYellow: "rgb(253,244,239)",
          white: "rgb(243,246,251)",
          whiteShadow: "rgb(221,235,236)",
        },
        bits: {
          bg: "rgb(25,30,40)",
          border: "rgb(250,236,85)",
          text: "rgb(248,251,253)",
          divBg: "rgb(13,14,71)",
          buttonGreen: "rgb(0,199,46)",
          fillDullBlue: "rgb(147,164,217)",
          deepBlue: "rgb(0,117,255)",
        },
      },
      fontFamily: {
        bits2: ["VT323", "monospace"],
      },
    },
  },
  plugins: [],
};
