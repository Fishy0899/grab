/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkslategray: "#005339",
      },
      fontFamily: {
        "grab-community-solid-en": "'Grab Community Solid EN'",
      },
      padding: {
        xl: "20px",
        "91xl": "110px",
        "12xs": "1px",
        "319xl": "338px",
        "5xl-9": "24.9px",
        "12xs-8": "0.8px",
        "11xs-8": "1.8px",
        "4xl-4": "23.4px",
        "75xl": "94px",
      },
    },
    fontSize: {
      sm: "14px",
      xl: "20px",
      "21xl": "40px",
      "43xl": "62px",
      base: "16px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
