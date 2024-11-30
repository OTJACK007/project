'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface ThemeToggleProps {
  isCollapsed?: boolean;
}

export function ThemeToggle({ isCollapsed }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (isCollapsed) {
    return (
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="w-full flex flex-col items-center space-y-2 p-2 rounded-md hover:bg-accent"
        title="Toggle theme"
      >
        <div className="relative inline-flex flex-col h-11 w-6 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
          <div
            className={`
              ${theme === 'dark' ? 'translate-y-6' : 'translate-y-1'}
              inline-flex h-4 w-4 transform items-center justify-center rounded-full bg-white transition-transform duration-200
            `}
          >
            {theme === 'dark' ? (
              <Moon className="h-3 w-3 text-gray-900" />
            ) : (
              <Sun className="h-3 w-3 text-gray-900" />
            )}
          </div>
        </div>
      </button>
    );
  }

  return (
    <div className="flex items-center justify-between w-full">
      <span className="text-sm font-medium text-foreground">Theme</span>
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        <span className="sr-only">Toggle theme</span>
        <div
          className={`
            ${theme === 'dark' ? 'translate-x-6' : 'translate-x-1'}
            inline-flex h-4 w-4 transform items-center justify-center rounded-full bg-white transition-transform duration-200
          `}
        >
          {theme === 'dark' ? (
            <Moon className="h-3 w-3 text-gray-900" />
          ) : (
            <Sun className="h-3 w-3 text-gray-900" />
          )}
        </div>
      </button>
    </div>
  );
}