/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#222a38",
          "200": "#161c28",
          "300": "#191a15",
        },
        darkgray: {
          "100": "#a9a7b6",
          "200": "#a6a6a6",
        },
        mediumaquamarine: {
          "100": "#85dab9",
          "200": "#6bc2a1",
          "300": "#54be96",
          "400": "#54bd95",
          "500": "#52bd94",
          "600": "#52a687",
        },
        seagreen: {
          "100": "#3ba37a",
          "200": "#38a37a",
        },
        whitesmoke: {
          "100": "#f9fafb",
          "200": "#f8f8fa",
          "300": "#f5fafa",
          "400": "#eee",
        },
        gainsboro: "#e6e6e6",
        ghostwhite: "#f9f8fe",
        aliceblue: {
          "100": "#eff2f7",
          "200": "#e9effc",
        },
        lavender: "#dbe5fa",
        black: "#000",
        cornflowerblue: "#0f8ce9",
        slateblue: "#4535af",
        mistyrose: "#ffd5d5",
        lightseagreen: "#52bdaa",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "51xl": "70px",
        xl: "20px",
        "3xs": "10px",
        "10xs": "3px",
        "21xl": "40px",
      },
    },
    fontSize: {
      lg: "1.125rem",
      "31xl": "3.125rem",
      "11xl": "1.875rem",
      "21xl": "2.5rem",
      sm: "0.875rem",
      base: "1rem",
      "5xl": "1.5rem",
      xs: "0.75rem",
      "9xl": "1.75rem",
      "3xl": "1.375rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
