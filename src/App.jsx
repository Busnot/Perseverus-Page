import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white">
        <Navbar />
        <section id="inicio"> {/* Sección Inicio */}
          <Hero />
        </section>
        <section id="sobre-nosotros"> {/* Sección Sobre Nosotros */}
          <About />
        </section>
        <section id="servicios"> {/* Sección Servicios */}
          <Services />
        </section>
        <section id="equipo"> {/* Sección Equipo */}
          <Team />
        </section>
        {/* <Portfolio /> */}
        <section id="portafolio"> {/* Sección de portafolio */}
        <Portfolio />
        </section>
        {/* <Testimonios /> */}
        <section id="testimonios"> {/* Sección Testimonios */}
          <Testimonials />
        </section>
        <section id="contacto"> {/* Sección Contacto */}
          <Contact />
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
