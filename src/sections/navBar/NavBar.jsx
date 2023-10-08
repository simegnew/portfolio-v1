import React, { useState } from "react";
import "./navbar.css";
import data from "./data";
import logo from "../../assets/logo/logo.png";
import { IoIosColorPalette } from "react-icons/io";
import {FaBars} from 'react-icons/fa'
import { AiFillCloseCircle } from "react-icons/ai";
import Theme from "../../themes/Theme";

const NavBar = ({ setPrimaryTheme }) => {
  let _themeSwitcher = null;

  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  const handleTheme = () => {
    setTheme(!theme);
  };

  if (theme) {
    _themeSwitcher = <Theme setPrimaryTheme={setPrimaryTheme} />;
  }

  return (
    <nav>
      <div className="container nav__container">
        <a href="/" className="nav__logo">
          <img src={logo} alt="logo" />
        </a>
        <div className="toggler__icons">
          {toggle ? (
            <a toggle={toggle} onClick={handleToggle} className="close">
              <AiFillCloseCircle />
            </a>
          ) : (
            <a toggle={toggle} onClick={handleToggle} className="toggler">
              <FaBars />
            </a>
          )}
        </div>
        <ul
          toggle={toggle}
          onClick={handleToggle}
          className={`nav__menu ${toggle ? "open" : " "}`}
        >
          {data.map((data) => (
            <li key={data.id}>
              <a href={data.link}>{data.title}</a>
            </li>
          ))}
        </ul>
        <button onClick={handleTheme} id="theme__icon">
          <IoIosColorPalette />
        </button>
        {_themeSwitcher}
      </div>
    </nav>
  );
};

export default NavBar;
