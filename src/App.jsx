
import { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Main from "./components/Main";
import Features from "./components/Features";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Main />

      {/* Features */}
      <Features />

      {/* About */}
      <About />

      {/* Services */}
      <Services />

      {/* Team */}
      <Team />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;
