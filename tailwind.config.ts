import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      maxWidth: {
        1100: `${1100 / 15}rem`,
        800: `${800 / 16}rem`,
        708: `${708 / 16}rem`,
        358: `${358 / 16}rem`,
      },
      boxShadow: {
        default: "0 14px 21px 0 rgba(30, 30, 30, 0.05)",
      },
      textColor: {
        primary: "#0f1826",
        gray: "#607987",
        gren: '#7cd1ac'
      },
      borderColor: {
        light: '#607987',
        orange: "#f18f35",
      },
      backgroundColor: {
        orange: "#BA8D5B",
        lightgraysh: "#F1F0EE",
        light: '#F9F8F7'
      },
      colors: {
        orange: "#BA8D5B",
        dark: "#2D4162",
        lightGray: "#F2F4F7",
        light: "#959FB0",
       
      },
      backgroundImage: {
        main: "url('')",
      },
    },
  },
  plugins: [],
};
export default config;
