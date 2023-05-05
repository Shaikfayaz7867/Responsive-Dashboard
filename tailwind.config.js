/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f5f5f5",
        cornflowerblue: "#6972c3",
        icon: "#999",
        dimgray: "#666",
        "light-green": "#9bdd7c",
        black: "#000",
        mistyrose: "#efdada",
        lavender: "#dee0ef",
        oldlace: "#f4ecdd",
        honeydew: "#ddefe0",
        white: "#fff",
        "secondary-text": "#858585",
        "field-color-darker": "#eaeaea",
        link: "#346bd4",
      },
      fontFamily: {
        lato: "Lato",
        montserrat: "Montserrat",
        "open-sans": "'Open Sans'",
      },
      borderRadius: {
        sm: "14px",
        "smi-3": "12.3px",
        "sm-8": "13.8px",
        "sm-7": "13.7px",
        "3xl": "22px",
        "3xs-2": "9.2px",
        "lg-3": "18.3px",
        "3xs": "10px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      lg: "18px",
      "base-8": "16.8px",
      "3xs-8": "9.8px",
      "mini-8": "14.8px",
      "4xs-6": "8.6px",
      "base-6": "16.6px",
      "3xs-7": "9.7px",
      "base-4": "16.4px",
      "3xs-6": "9.6px",
      "3xs": "10px",
      "17xl": "36px",
      "mini-7": "14.7px",
    },
    screens: {
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
