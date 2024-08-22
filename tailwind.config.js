//tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontSize: {
      title1: 50,
      title2: 36,
      title3: 30,
      body1: 25,
      body2: 20,
      body3: 16,
      tiny: 14
    },
    colors: {
      main: "#FF9900",
      opacityMain: "rgba(255, 153, 0, 0.15)",
      red: "#EA2E33",
      gray700: "#505050",
      gray600: "#7C7C7C",
      gray500: "#929292",
      gray400: "#A7A7A7",
      gray300: "#BEBEBE",
      white: "#ffffff",
      border: "#BEBEBE",
    },
    fontFamily: {
      pretendard: ['Pretendard']
    },
    width: {
      landingButton: 250,
    },
    height: {
      borderY: 640,
      input: 60,
      landingButton: 60,
    },
  },
  plugins: [],
  mode: "jit",
}