import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import Faq from "./sections/faqs/Faq";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import Footer from "./sections/footer/Footer";
import Header from "./sections/header/Header";
import NavBar from "./sections/navBar/NavBar";
import Portfolio from "./sections/portfiolio/Portfolio";
import Services from "./sections/services/Services";
import Testimonials from "./sections/testimonials/Testimonials";

function App() {
  return (
    <>
      <main>
        <NavBar />
        <Header />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Faq />
        <Contact />
        <Footer />
        <FloatingNav />
      </main>
    </>
  );
}

export default App;
