import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  // Separate useEffect for OS theme-based favicon
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateFavicon = (isDarkMode) => {
      const favicon = document.querySelector('link[rel="icon"]');
      if (favicon) {
        favicon.href = isDarkMode
          ? "/assets/favicon-light.svg"
          : "/assets/favicon-dark.svg";
      }
    };

    // Initial favicon set
    updateFavicon(mediaQuery.matches);

    // Listen for OS theme changes
    const handleChange = (e) => updateFavicon(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []); // Empty dependency array as this only depends on OS theme

  // Separate useEffect for theme toggle
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
