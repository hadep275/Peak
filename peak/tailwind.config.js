/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Coffee/Chocolate Brown Palette
        coffee: {
          50: "#faf7f2",
          100: "#f4ede0",
          200: "#e8d7c0",
          300: "#d9bc96",
          400: "#c89d6a",
          500: "#bc844a",
          600: "#af6f3e",
          700: "#925735",
          800: "#764730",
          900: "#603c2a",
          950: "#331f15",
        },
        chocolate: {
          50: "#faf8f5",
          100: "#f3ede6",
          200: "#e6d7c7",
          300: "#d4bba0",
          400: "#c09876",
          500: "#b17d56",
          600: "#a3694a",
          700: "#87543f",
          800: "#6e4537",
          900: "#593a2f",
          950: "#2f1d17",
        },
        espresso: {
          50: "#f7f6f4",
          100: "#ede9e4",
          200: "#dbd2c8",
          300: "#c2b4a4",
          400: "#a6927e",
          500: "#947a64",
          600: "#876b58",
          700: "#71574a",
          800: "#5d4940",
          900: "#4c3d35",
          950: "#28201c",
        },
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
