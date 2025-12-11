import React from "react";
import Hero from "./Sections/Hero";
import AboutUs from "./Sections/AboutUs";
import Mission from "./Sections/Mission";
import Values from "./Sections/Values";
import ServicesOri from "./Sections/ServicesOri";
import Footer from "./Sections/footer";


const LandingPage = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Mission />
      <Values />
      <ServicesOri />
      <Footer />
      </div>
  );
};

export default LandingPage;