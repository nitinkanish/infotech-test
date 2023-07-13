import React from "react";
import "./App.css";
import Navbar from "../src/pages/Home/components/Navbar/Navbar";
import Intro from "../src/pages/Home/components/Intro/Intro";
import Header from "../src/pages/Services/components/Header/Header";
import Services from "../src/pages/Services/components/ServicesSection/Services";
import Platforms from "../src/pages/How we work/Platforms/Platforms";
import WorkProcess from "../src/pages/How we work/Platforms/WorkProcess";
import Portfolio from "../src/pages/Portfolio/Portfolio";
import Testimonial from "../src/pages/Testimonial/Testimonial";
import ContactUs from "../src/pages/Contact Us/ContactUs";
import Footer from "../src/pages/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Header />
      <Services />
      <Platforms />
      <WorkProcess />
      <Portfolio />
      <Testimonial />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
