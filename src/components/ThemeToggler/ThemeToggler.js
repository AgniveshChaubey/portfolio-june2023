import React, { useState } from "react";
import './ThemeToggler.css';
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const ThemeToggler = () => {
  const {theme} = useContext(ThemeContext)
  const [isDark, setIsDark] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`toggle-container ${isDark ? "slide" : ""}`} style={isDark ? { backgroundColor: theme.primary } : { backgroundColor: '#8a8884' }}>
      <label htmlFor="sliding-mode-toggle">
        <input
          id="sliding-mode-toggle"
          type="checkbox"
          checked={isDark}
          onChange={handleToggle}
        />
        <div className="toggle-slider"></div>
      </label>
    </div>
  );
};

export default ThemeToggler;
