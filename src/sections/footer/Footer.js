import data from '../navBar/data'
import './footer.css'
import SocialIcon from '../../components/SocialIcon';
import footerData from './footerData';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className=" footer__content">
          {data.map((data) => (
            <li key={data.id}>
              <a href={data.link}>{data.title}</a>
            </li>
          ))}
        </div>
        <div >
          {footerData.map((social) => (
            <SocialIcon key={social.id} classsName="footer__container">
                 <a className="footer__link" href={data.link}>
                  {social.icon}
                </a>
               
            </SocialIcon>
          ))}
        </div>
      </div>
    </footer>
  );
}
   
export default Footer