import './navbar.css'
import data from './data'
import logo from '../../assets/logo/logo.png'
import {IoIosColorPalette} from 'react-icons/io'
 
const NavBar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className='nav__logo'>
          <img
            src={logo}
            alt="logo"
          />
        </a>
        <ul className="nav__menu">
          {
            data.map((data) => (
            <li key={data.id}>
              <a href={data.link}>{data.title}</a>
            </li>
            ))
          }
        </ul>
        <button id='theme__icon'> <IoIosColorPalette /></button>
      </div>
    </nav>
  );
}

export default NavBar