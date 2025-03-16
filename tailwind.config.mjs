/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",   // Include all JS/TS/JSX/TSX files in src folder
      "./pages/**/*.{js,ts,jsx,tsx}", // Include pages folder
      "./components/**/*.{js,ts,jsx,tsx}", // Include components folder
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  