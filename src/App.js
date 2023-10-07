
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

  return (
    <>
      <main>
      
        <NavBar  />
        <Header />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Faq />
        <Contact />
        <Footer />
        
      </main>
    </>
  );
}

export default App;
