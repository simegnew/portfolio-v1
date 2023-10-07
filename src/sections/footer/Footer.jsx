import data from '../navBar/data'
import './footer.css'
import SocialIcon from '../../components/SocialIcon';
import footerData from './footerData';

const Footer = () => {
  return (
    <footer >
      <div className="container">
        <div className=" footer__content">
          {data.map((data) => (
            <li key={data.id}>
              <a href={data.link}>{data.title}</a>
            </li>
          ))}
        </div>
        <div className=" footer__container">
          {footerData.map((social) => (
            <SocialIcon key={social.id} classsName="footer__container">
              <a className="footer__link" href={social.link} target="_blank" >
                {social.icon}
              </a>
            </SocialIcon>
          ))}
        </div>
          <p className='footer__right'> 2021 -  {new Date().getFullYear()}, All rights Reserved To Simegnew Tizazu.</p>
      </div>
    </footer>
  );
}
   
export default Footer