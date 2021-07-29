import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PortofolioList from "./components/PortofolioList";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PortofolioList />
      <About />
    </>
  );
}

export default App;
