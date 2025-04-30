import { FiMoon, FiSun } from 'react-icons/fi';
import React, { useState, useEffect } from 'react';

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Add the 'dark' class to the document root element
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div>
      {/* Dark Mode Toggle Button for Desktop */}
      <button
        onClick={toggleDarkMode}
        className="text-white text-[30px] hover:text-yellow-300"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? <FiSun /> : <FiMoon />}
      </button>

      {/* Dark Mode Toggle Button for Mobile */}
      <button
        onClick={toggleDarkMode}
        className="text-white text-[30px] hover:text-yellow-300 block md:hidden"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? <FiSun /> : <FiMoon />}
      </button>
    </div>
  );
}

export default DarkMode;
