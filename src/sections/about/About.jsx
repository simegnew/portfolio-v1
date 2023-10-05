import './about.css'
import aboutImage from '../../assets/header/profile-1.jpg'
import cv from '../../assets/Abebe.pdf'
import { BiSolidDownload } from 'react-icons/bi'
import data from './data'
import Card from '../../components/Card'

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={aboutImage} alt="about Image" />
          </div>
        </div>

        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} classsName="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a href={cv} download className="btn primary">
            Download CV <BiSolidDownload />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About