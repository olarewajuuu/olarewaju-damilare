import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light"; // Default to light mode
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full transition-all duration-300 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
    >
      {theme === "dark" ? <FaSun className="text-yellow-400" /> : <FaMoon />}
    </button>
  );
};

export default ThemeSwitcher;
