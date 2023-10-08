import {useEffect} from 'react'
import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import Faq from "./sections/faqs/Faq";
import Footer from "./sections/footer/Footer";
import Header from "./sections/header/Header";
import NavBar from "./sections/navBar/NavBar";
import Portfolio from "./sections/portfiolio/Portfolio";
import Services from "./sections/services/Services";
import Testimonials from "./sections/testimonials/Testimonials";
import "./index.css";

function App() {

    useEffect(() => {
      const currentThemeColor = localStorage.getItem("color");
      setPrimaryTheme(currentThemeColor);
      // console.log(currentThemeColor);
    }, []);
  
   const setPrimaryTheme = (color) => {
     document.documentElement.style.setProperty("--color-primary", color);
  };
  
  

  return (
    <>
      <NavBar setPrimaryTheme={setPrimaryTheme} />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
