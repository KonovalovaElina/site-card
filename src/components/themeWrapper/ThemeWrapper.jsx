import { useLayoutEffect } from 'react';
import './ThemeWrapper.css';

export default function ThemeWrapper({ theme, children }) {
  useLayoutEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme ? 'light' : 'dark');
  }, [theme]);

  return children;
}
