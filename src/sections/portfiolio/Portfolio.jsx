import { useState } from 'react';
import Card from '../../components/Card';
import data from './data';
import './portfolio.css'
// import portimg from "../../assets/portfolio-1.jpeg";


const Portfolio = () => { 

  const [isPressed, setIsPressed] = useState(null);

  
  const handleBtnPressed = (category) => {
    setIsPressed(category);
  }
  
  return (
    <section id="portfolio">
      <h2>portfolio</h2>
      <p>
        Check Out some of the projects i recently worked on for my clients. use
        the button s to toggle the different categories.
      </p>
      <div className=" container">
        <div className="portfolio__items">
          <button
            className={`btn ${isPressed === "All" ? "active" : "light"}`}
            onClick={() => handleBtnPressed("All")}
          >
            All
          </button>
          <button
            className={`btn ${isPressed === "front" ? "active" : "light"}`}
            onClick={() => handleBtnPressed("front")}
          >
            Frontend
          </button>
          <button
            className={`btn ${isPressed === "back" ? "active" : "light"}`}
            onClick={() => handleBtnPressed("back")}
          >
            Backend
          </button>
        </div>

        <div className="portfolio__items-1">
          {isPressed === 'All' ?
          (  data.map((item) => (
              <Card classsName="single__portfolio" key={item.id}>
                <div className="portfolio__img">
                  <img src={item.image} alt="myproject- images" />
                </div>
                <span>{item.title}</span>
                <small>{item.desc}</small>
                <div className="portfolio_cta">
                  <a className="btn light btn_portfolio" href={item.demo}>
                    Demo
                  </a>
                  <a className="btn primary" href={item.prolink}>
                    Github
                  </a>
                </div>
              </Card>
          ))) : (
              <div>hello</div>
            )
          }
        </div>
      </div>
    </section>
  );
}

export default Portfolio