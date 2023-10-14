import React, { useEffect, useState } from 'react'
import Colors from './Colors'
import BackColors from "./BackgroundColors";
import './theme.css'
import FontTheme from "./FontTheme";
import BackGrountTheme from './BackGrountTheme'
import DarkMode from '../DarkMode/DarkMode';

const Theme = ({ setPrimaryTheme, theme, setBackgroundTheme }) => {
  // const [isDark, setIsDark] = useState(false);
   
   const setDarkMode = () => {
      document.querySelector("body").setAttribute("data-theme", "light");
      document.documentElement.style.setProperty("--color-white", "#0F0F0F");
      document.documentElement.style.setProperty("--color-light", "#1F201D");
      document.documentElement.style.setProperty("--color-black", "#D7D7D8");
   };

   const setLightMode = () => {
     document.querySelector("body").setAttribute("data-theme", "dark");
   };

   const toggleTheme = (e) => {
     if (e.target.checked) setDarkMode();
     else setLightMode();
   };
    
  
  const setColor = (e) => {
    const currentColor = e.target.style.getPropertyValue("--color-primary");
    setPrimaryTheme(currentColor);
    localStorage.setItem("color", currentColor);
  };

  // const setBackGroundColor = (e) => {

  //   const currentBackgroundColor = e.target.style.getPropertyValue("--color-white");
  //   setBackgroundTheme(currentBackgroundColor);
  //   localStorage.setItem("backgroundColor", currentBackgroundColor);
     
  // };


  //  const resetTheme = () => {
  //    setPrimaryTheme("");
  //    setBackgroundTheme("");
  //    localStorage.removeItem("color");
  //    localStorage.removeItem("backgroundColor");
  // };
  


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
              {/* {BackColors.map((color, index) => (
                <BackGrountTheme
                  key={index}
                  setBackGroundColor={setBackGroundColor}
                  color={color}
                />
              ))} */}

              {/* <p>night Mode</p> */}
              <DarkMode toggleTheme={toggleTheme} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Theme