import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PortofolioList from "./components/PortofolioList";
import About from "./components/About";
import Contact from "./components/Contact";
import Advice from "./components/Advice";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PortofolioList />
      <About />
      <Contact />
      <Advice />
    </>
  );
}

export default App;
