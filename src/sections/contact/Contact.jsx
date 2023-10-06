import './contact.css'
import data from './data';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>Shoot me a message via any of the links below.</p>
      <div className="container contact__container">
        {data.map((item) => (
          <a
            className="contact__link"
            href={item.link}
            target="_blank"
          >
            {item.icon}
          </a>
        ))}
        {/* <a href="#" className="btn primary contact__link">
          messsage
        </a>
        <a href="#" className="btn primary contact__link">
          messsage
        </a>
        <a href="#" className="btn primary contact__link">
          messsage
        </a> */}
      </div>
    </section>
  );
}

export default Contact