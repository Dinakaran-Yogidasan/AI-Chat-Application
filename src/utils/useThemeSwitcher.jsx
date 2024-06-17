import { useState, useEffect } from "react";

const useThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    // Determine initial theme from local storage and system preference
    const storedTheme = localStorage.getItem("hs_theme");
    if (storedTheme) {
      return storedTheme;
    }
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    const html = document.querySelector("html");
    // Apply the theme to the HTML element
    if (theme === "dark") {
      html.classList.add("dark");
      html.classList.remove("light");
    } else {
      html.classList.add("light");
      html.classList.remove("dark");
    }
    // Save theme to local storage
    localStorage.setItem("hs_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    // Toggle between 'dark' and 'light' themes
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return {
    theme,
    toggleTheme,
  };
};

export default useThemeSwitcher;
