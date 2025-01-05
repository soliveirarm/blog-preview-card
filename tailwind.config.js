/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: ["14px", "150%"],
      base: ["16px", "150%"],
      lg: ["24px", "150%"],
    },
    spacing: {
      50: "4px",
      100: "8px",
      150: "12px",
      300: "24px",
      400: "32px",
    },
    extend: {
      colors: {
        accent: "#F4D04E",
        "custom-gray": {
          950: "#111111",
          500: "#6B6B6B",
        },
      },
    },
  },
  plugins: [],
}
