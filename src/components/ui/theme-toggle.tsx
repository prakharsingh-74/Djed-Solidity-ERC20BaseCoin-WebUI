'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative inline-flex h-8 w-14 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:scale-105",
        isDark 
          ? "bg-slate-800" // Dark mode track color - darker blue
          : "bg-orange-100", // Light mode track color - light orange
        className
      )}
      aria-label="Toggle theme"
    >
      {/* Track background */}
      <div className="absolute inset-0 rounded-full" />
      
      {/* Thumb */}
      <div
        className={cn(
          "relative inline-block h-6 w-6 transform rounded-full transition-all duration-300 shadow-md",
          isDark 
            ? "translate-x-7 bg-blue-500" // Dark mode: bright blue thumb on right
            : "translate-x-1 bg-orange-400" // Light mode: bright orange thumb on left
        )}
      >
        {/* Icon inside thumb */}
        <div className="flex h-full w-full items-center justify-center">
          {isDark ? (
            <Moon className="h-3 w-3 text-white" />
          ) : (
            <Sun className="h-3 w-3 text-white" />
          )}
        </div>
      </div>
    </button>
  );
}
