/** @type {import('tailwindcss').Config} */
export const darkMode = "class";
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      'lightgray': '#CCCCCC', // Light Gray Background
      'darkgray': '#1A237E', // Dark Gray Text
    },
  },
};
export const plugins = [];
