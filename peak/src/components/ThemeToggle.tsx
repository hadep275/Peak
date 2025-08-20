'use client';

import { useTheme } from './ThemeProvider';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function ThemeToggle() {
  const { theme, setTheme, actualTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'system') {
      setTheme(actualTheme === 'dark' ? 'light' : 'dark');
    } else {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-coffee-100 hover:bg-coffee-200 dark:bg-coffee-800 dark:hover:bg-coffee-700 transition-colors"
      aria-label="Toggle theme"
    >
      {actualTheme === 'dark' ? (
        <SunIcon className="w-5 h-5 text-coffee-600 dark:text-coffee-300" />
      ) : (
        <MoonIcon className="w-5 h-5 text-coffee-600 dark:text-coffee-300" />
      )}
    </button>
  );
}
