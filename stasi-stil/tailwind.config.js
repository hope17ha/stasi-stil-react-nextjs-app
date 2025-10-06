/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./app/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#b91c60",
          secondary: "#fce7f3",
          accent: "#fbbf24",
          dark: "#2e2e2e",
          light: "#fafafa",
        },
        fontFamily: {
          sans: ["Poppins", "sans-serif"],
          serif: ["Playfair Display", "serif"],
        },
        boxShadow: {
          glow: "0 0 15px rgba(249, 168, 212, 0.4)",
        },
      },
    },
    plugins: [],
    corePlugins: {
      filter: true, 
    },
  };
  