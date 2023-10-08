import React from 'react'
import Colors from './Colors'
import BackColors from "./BackgroundColors";

import FontTheme from "./FontTheme";
import BackGrountTheme from './BackGrountTheme'

const Theme = () => {
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
                <FontTheme />
              ))}
            </div>
          </div>
          <div>
            <h5 className="Theme__text">Background Color</h5>
            <div className="theme__background">
              {BackColors.map((color, index) => (
                <BackGrountTheme />
              ))}
            </div>
          </div>

         </div>
      </div>
    </>
  );
}

export default Theme