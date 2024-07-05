import React from "react";
import TypingAnimation from "./TypingAnimation";
import Home from "./components/Home/Home";
import About from "./components/About/About"
import What from "./components/What_I_Do/What";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import LatestNews from "./components/LatestNews/LatestNews";
import Work from "./components/WorkTogether/Work";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <Home />
      <About />
      <What />
      <Portfolio />
      <Testimonials />
      <LatestNews />
      <Work />
      <Footer />


    </div>
  );
}

export default App;
