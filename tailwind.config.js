/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['"Rubik"', 'sans-serif'],
      },
      colors: {
        primary: '#4a7206',
        secondary: '#91e40e',
        lightYellow: '#f4f9ec',
        lightGreen: '#e7f4eb',
        transparent: "transparent",
        black: {
          500: "#4F5665",
          600: "#0B132A",
        },
        gray: {
          300: "#F8F8F8",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}