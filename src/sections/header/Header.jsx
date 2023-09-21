import './header.css'
import data from './data'
// import headerProfile from '../../assets/header/logo.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header__profile">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkc4LWWF44R2wHmBu4z9ZEvp2-M0xkgMdqbw23I-XMk8gSrAZDAkWatBtHINGhFjSODN0&usqp=CAU"
            alt="profile"
          />
        </div>
        <h3>Simegnew Tizazu</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="header__cta">
          <a href="#contact">Let's Talk</a>
          <a href="#portfolio">My Work</a>
        </div>
        <div className='header__socials' >
          {
            data.map(item => (
              <a key={item.id} target='_blanck' href={item.link} rel='noopener noreferrer'>{ item.icon }</a>
            ))
          }
        </div>
      </div>
    </header>
  );
}

export default Header