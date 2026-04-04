import { createContext, useState, useEffect } from 'react';
import { getThemeFromStorage, saveThemeToStorage, prefersDarkMode } from '@/utils/helpers';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Initialize theme from localStorage or system preference
    const savedTheme = getThemeFromStorage();
    if (savedTheme) return savedTheme;
    return prefersDarkMode() ? 'dark' : 'light';
  });

  useEffect(() => {
    // Apply theme class to document
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Save to localStorage
    saveThemeToStorage(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
