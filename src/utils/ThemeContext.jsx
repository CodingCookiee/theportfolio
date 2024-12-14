import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  const updateFavicon = useCallback((isDarkMode) => {
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.href = isDarkMode
        ? "/assets/favicon-light.svg"
        : "/assets/favicon-dark.svg";
    }
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    updateFavicon(mediaQuery.matches);

    const handleChange = (e) => updateFavicon(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [updateFavicon]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateFavicon(isDark);
  }, [isDark, updateFavicon]);

  const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
