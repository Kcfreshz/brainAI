/*
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [isThemeDark, setIsThemeDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return savedTheme === "dark" || (!savedTheme && prefersDark);
  });

  // Set the theme class on <html> on first render and when theme changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isThemeDark);
    localStorage.setItem("theme", isThemeDark ? "dark" : "light");
  }, [isThemeDark]);

  const toggleTheme = () => {
    setIsThemeDark((prev) => !prev);
  };

  return (
    <button onClick={toggleTheme}>
      {isThemeDark ? (
        <Sun className="text-amber-300 w-6 h-6" />
      ) : (
        <Moon className="text-gray-400 w-6 h-6" />
      )}
    </button>
  );
}

export default ThemeToggle;
*/
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
