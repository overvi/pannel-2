import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface Props {
  darkMode: string;
  setDarkMode: (mode: string) => void;
}

const ThemeContext = createContext<Props>({} as Props);

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedPreference = localStorage.getItem("dark-mode");
    return storedPreference ? JSON.parse(storedPreference) : false;
  });

  useEffect(() => {
    if (darkMode == "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("dark-mode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
