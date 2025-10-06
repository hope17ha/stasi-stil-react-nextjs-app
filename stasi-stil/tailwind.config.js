/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./app/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#b91c60",      // тъмно розово
          secondary: "#fce7f3",    // светлорозов фон
          accent: "#fbbf24",       // златист акцент
          dark: "#2e2e2e",         // неутрално черно/сиво
          light: "#fafafa",        // светъл фон
        },
        fontFamily: {
          sans: ["Poppins", "sans-serif"],
          serif: ["Playfair Display", "serif"],
        },
        boxShadow: {
          glow: "0 0 15px rgba(249, 168, 212, 0.4)",
        },
        backgroundImage: {
          "hero-pattern": "url('/background.jpg')",
          "gradient-pink": "linear-gradient(135deg, #b91c60 0%, #fbbf24 100%)",
        },
      },
    },
    plugins: [],
  };
  