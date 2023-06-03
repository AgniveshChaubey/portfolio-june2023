import React, { useState } from "react";
import './ThemeToggler.css';

const ThemeToggler = () => {
  const [isSlidingMode, setIsSlidingMode] = useState(false);

  const handleToggle = () => {
    setIsSlidingMode(!isSlidingMode);
  };

  return (
    <div className={`toggle-container ${isSlidingMode ? "slide" : ""}`}>
      <label htmlFor="sliding-mode-toggle">
        <input
          id="sliding-mode-toggle"
          type="checkbox"
          checked={isSlidingMode}
          onChange={handleToggle}
        />
        <div className="toggle-slider"></div>
      </label>
    </div>
  );
};

export default ThemeToggler;
