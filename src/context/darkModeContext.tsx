import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type DarkModeContextType = {
  isDark: boolean;
  toggleDarkMode: () => void;
};

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

export function DarkModeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(prefersDark);
  if( prefersDark ) document.documentElement.classList.toggle('dark', isDark);
  const toggleDarkMode = () => setIsDark((prev) => !prev);
  return (
    <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used inside a DarkModeProvider");
  }
  return context;
}

