import React, { useState } from "react";
import "./navbar.css";
import data from "./data";
import logo from "../../assets/logo/logo.png";
import { IoIosColorPalette } from "react-icons/io";
import {FaBars} from 'react-icons/fa'
import { AiFillCloseCircle } from "react-icons/ai";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <nav>
      <div  className="container nav__container">
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
        <button id="theme__icon">
          <IoIosColorPalette />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
