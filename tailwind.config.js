/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: "#FFF8EE", dark: "#F7EAD3", deeper: "#EFDCC0" },
        terracotta: { DEFAULT: "#C2572B", dark: "#9E421F", light: "#E07A4A" },
        amberwarm: { DEFAULT: "#E8A33D", light: "#F2C069" },
        cocoa: { DEFAULT: "#3B2A20", light: "#6B5240", soft: "#8A6F5C" },
        sage: { DEFAULT: "#7A8B6F" }
      },
      fontFamily: {
        serif: ["Georgia", "'Times New Roman'", "serif"],
        sans: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"]
      },
      boxShadow: {
        warm: "0 10px 30px rgba(59, 42, 32, 0.12)",
        card: "0 4px 18px rgba(59, 42, 32, 0.08)"
      }
    }
  },
  plugins: []
};
