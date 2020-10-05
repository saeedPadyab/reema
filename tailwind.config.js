module.exports = {
  purge: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      phone: { max: "37.5em" },
      "tab-port": { max: "56.25em" },
      "tab-land": { max: "75em" },
      large: { max: "112.5em" },
    },
    extend: {
      fontFamily: {
        sans: [
          "Lato",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        "primary-color": "#48bb78",
        "secondary-color": "#ed8936",
      },
    },
  },
  variants: {},
  plugins: [],
};
