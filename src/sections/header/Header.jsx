import './header.css'
import data from './data'
import profile from '../../assets/header/profile-1.jpg'
 
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header__profile">
          <img src={profile} alt="profile" />
        </div>
        <h3>Simegnew Tizazu</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="header__cta">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              target="_blanck"
              href={item.link}
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header