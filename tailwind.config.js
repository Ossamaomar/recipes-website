/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom: "auto 1fr", // Custom template with specific column sizes
      },
    },
  },
  plugins: [],
};
