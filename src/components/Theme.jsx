import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

function Theme() {
  const [theme, setTheme] = useState(() => {
    // Initialize theme from localStorage, default to 'light' if not set
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, [theme]);

  return (
    <div>
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1 w-16 h-8 shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        <div
          className={`bg-white dark:bg-indigo-500 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
            theme === 'dark' ? 'translate-x-8' : 'translate-x-0'
          } flex items-center justify-center`}
        >
          
            {theme === 'dark' ? (
             <FontAwesomeIcon icon={faMoon} />
            ) : (
            <FontAwesomeIcon icon={faSun} />
            )}
         
        </div>
        <span className="sr-only">{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
      </button>
    </div>
  );
}

export default Theme;