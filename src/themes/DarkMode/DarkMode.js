import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = ({ toggleTheme, isPressed }) => {
  const handleToggle = (e) => {
    toggleTheme(e);
  };
  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={handleToggle}
      />
      <label className="dark_mode_label" for="darkmode-toggle">
        {isPressed ? <Moon /> : <Sun />}
      </label>
    </div>
  );
};

export default DarkMode;
