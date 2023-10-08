import React, { useEffect } from 'react'
import Colors from './Colors'
import BackColors from "./BackgroundColors";

import FontTheme from "./FontTheme";
import BackGrountTheme from './BackGrountTheme'

const Theme = ({ setPrimaryTheme }) => {
 

  const setBackgroundTheme = (color) => {
    document.documentElement.style.setProperty("--color-white", color);
  };

  const setColor = (e) => {
    const currentColor = e.target.style.getPropertyValue("--color-primary");
    setPrimaryTheme(currentColor);
    localStorage.setItem("color", currentColor);
  };

  const setBackGroundColor = (e) => {
    const currentBackgroundColor =
      e.target.style.getPropertyValue("--color-white");
    // console.log(currentBackgroundColor, " current back color");
    setBackgroundTheme(currentBackgroundColor);
    localStorage.setItem("backgroundColor", currentBackgroundColor);
  };
  return (
    <>
      <div className="theme__container">
        <h4>Customize Your Theme</h4>
        <p>Chenge the theme primary and background color to your preference.</p>
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