import React, { useEffect, useState } from 'react'
import Colors from './Colors'
import BackColors from "./BackgroundColors";
import './theme.css'
import FontTheme from "./FontTheme";
import BackGrountTheme from './BackGrountTheme'

const Theme = ({ setPrimaryTheme, theme }) => {
  const setBackgroundTheme = (color) => {
    document.documentElement.style.setProperty("--color-white", color);
    document.documentElement.style.setProperty("--color-light", "#010101");
    document.documentElement.style.setProperty("--color-black", "#D7D7D8");
  };

  const setColor = (e) => {
    const currentColor = e.target.style.getPropertyValue("--color-primary");
    setPrimaryTheme(currentColor);
    localStorage.setItem("color", currentColor);
  };

  const setBackGroundColor = (e) => {
    const currentBackgroundColor =
      e.target.style.getPropertyValue("--color-white");
    setBackgroundTheme(currentBackgroundColor);
    localStorage.setItem("backgroundColor", currentBackgroundColor);
    // document.documentElement.style.setProperty("--color-light", "#B9BBB6");
    // document.documentElement.style.setProperty("--color-black", "#ffffff");
    // document.documentElement.style.setProperty("--color-white", "#010101");
  };
  return (
    <>
      <div className={`theme__container ${theme ? "isOpen " : ""} `}>
        <h4 className="theme_text">Customize Your Theme</h4>
        <p className="theme_text">
          Chenge the theme primary and background color to your preference.
        </p>
        <div className="themes">
          <div>
            <h5 className="Theme__text">Primary Color</h5>
            <div className="theme__primary">
              {Colors.map((color, index) => (
                <FontTheme key={index} setColor={setColor} color={color} />
              ))}
            </div>
          </div>
          <div>
            <h5 className="Theme__text">Background Color</h5>
            <div className="theme__background">
              {BackColors.map((color, index) => (
                <BackGrountTheme
                  key={index}
                  setBackGroundColor={setBackGroundColor}
                  color={color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Theme