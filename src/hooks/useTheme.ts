import { createContext, useContext } from 'react';

export const ThemeContext = createContext<{
  isDark: boolean;
  toggle: () => void;
}>({
  isDark: true,
  toggle: () => {},
});

export const useTheme = () => useContext(ThemeContext);
