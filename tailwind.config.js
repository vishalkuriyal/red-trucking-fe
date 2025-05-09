/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F20003",
        secondary: "#0B0B0B"
      },
      keyframes: {
        'dot-path': {
          '0%': { top: '-6px', left: '6px' },
          '25%': { top: '-6px', left: '97%' },
          '50%': { top: '97%', left: '97%' },
          '75%': { top: '97%', left: '-6px' },
          '100%': { top: '-6px', left: '-6px' },
        },
      },
      fontFamily: {
        "kindsans-regular": ["kind-sans-regular"],
        "kindsans-medium": ["kind-sans-medium"],
        "kindsans-semibold": ["kind-sans-semibold"],
        "kindsans-bold": ["kind-sans-bold"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        'dot-path': 'dot-path 6s linear infinite',
      },
      backgroundImage: {
        bg1: "url('../src/assets/images/homeWhoWeAreBg.png')",
        bg2: "url('../src/assets/images/transportationPartnerBg.png')",
        bg3: "url('../src/assets/images/transportServiceimg.png')",
      },
    },
    
  },
  plugins: [],
};
