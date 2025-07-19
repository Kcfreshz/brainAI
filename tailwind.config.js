// tailwind.config.js
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust to your file structure
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bg-primary": "var(--color-bg-primary)",
        "bg-sidebar": "var(--color-bg-sidebar)",
        "border-hr": "var(--color-border-hr)",
        "gradient-blue-purple": "var(--gradient-blue-purple)", // need custom plugin or via util class
      },
    },
  },
  plugins: [typography], // ✅ enable the typography plugin
};
