/** @type {import('tailwindcss').Config} */
export default {
  // CRITICAL: Tells Tailwind where to look for your classes!
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Defining a custom primary blue palette
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          500: "#2563eb",
        },
        positive: "#16a34a",
        negative: "#dc2626",
      },
    },
  },
  plugins: [],
}