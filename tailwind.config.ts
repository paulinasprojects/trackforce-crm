import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    extend: {
      fontFamily: {
        inter: ['"Inter"', "sans-serif"] 
      },
      colors: {},
  },
    // container: {
    //   center: true,
    //   padding: {
    //     DEFAULT: "1rem",
    //     md: "2rem",
    //   },
    // },
 
  },
  plugins: [],
};
export default config;
