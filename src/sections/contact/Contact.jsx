import SocialIcon from '../../components/SocialIcon';
import './contact.css'
import data from './data';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p className='contact__description'>Shoot me a message via any of the links below.</p>
      <div className="container contact__container ">
        {data.map((item) => (
          <SocialIcon classsName="contact__container">
            <a className="contact__link" href={item.link} target="_blank">
              {item.icon}
            </a>
          </SocialIcon>
        ))}
      </div>
    </section>
  );
}

export default Contact