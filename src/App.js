import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PortofolioList from "./components/PortofolioList";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PortofolioList />
      <About />
      <Contact />
    </>
  );
}

export default App;
