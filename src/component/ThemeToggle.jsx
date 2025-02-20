import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './styles/ThemeToggle.css';

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.body.setAttribute('data-theme', savedTheme);
    } else {
      const defaultTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setIsDarkMode(defaultTheme === 'dark');
      document.body.setAttribute('data-theme', defaultTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const uniqueId = `theme-toggle-checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="theme-toggle">
      <input
        type="checkbox"
        id={uniqueId}
        onChange={toggleTheme}
        checked={isDarkMode}
      />
      <label htmlFor={uniqueId}>
        <span className="icon sun"><FaMoon size={20} color="#7074b9" /></span>
        <span className="icon moon"><FaSun size={20} color="#f59e0b" /></span>
      </label>
    </div>
  );
}

export default ThemeToggle;
