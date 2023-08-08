/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        overpassMedium: "overpassMedium",
        overpassSemiBold: "overpassSemiBold",
      },
      colors: {
        primaryColor: "#47BFDF",
        secondaryColor: "#4A91FF",
        cardColor: "#ffffff30",
        textDark: "#444E72",
      },
    },
  },
  plugins: [],
};
