import { Sun, Moon } from "lucide-react";

function ThemeToggle({ theme }) {
  return (
    <button className="cursor-pointer">
      {theme === "dark" ? (
        <Sun className="text-white w-6 h-6" />
      ) : (
        <Moon className="text-gray-800 w-6 h-6" />
      )}
    </button>
  );
}
export default ThemeToggle;
// This component now receives `theme` and `setTheme` as props from App.jsx
