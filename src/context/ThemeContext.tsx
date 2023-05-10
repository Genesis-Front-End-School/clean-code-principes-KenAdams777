import { ReactNode, createContext, useLayoutEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { TIME_TO_LIVE } from '../constants/TTL';

type Props = {
  children: ReactNode;
};

type ThemeContext = {
  darkTheme: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext({} as ThemeContext);

export function ThemeProvider(props: Props) {
  const { children } = props;
  const body = document.querySelector('body');
  const [darkTheme, setDarkTheme] = useLocalStorage('dark-theme', false, TIME_TO_LIVE.darkTheme);

  useLayoutEffect(() => {
    if (body && darkTheme) {
      body.classList.add('dark');
    }
  }, []);

  function toggleTheme() {
    if (body) {
      body.classList.toggle('dark');
      setDarkTheme(!darkTheme);
    }
  }

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>{children}</ThemeContext.Provider>
  );
}
