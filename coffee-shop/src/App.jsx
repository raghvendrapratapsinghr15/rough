// App.jsx — Root component: assembles all sections
import React from "react";
import Navbar  from "./components/Navbar";
import Hero   from "./components/Hero";
import Menu   from "./components/Menu";
import Footer from "./components/Footer";
import "./App.css";

const App = () => (
  <>
    {/* Fixed navigation bar */}
    <Navbar />

    {/* Page sections */}
    <main>
      <Hero />
      <Menu />
    </main>

    {/* Site footer (also serves as Contact section) */}
    <Footer /> 
  </>
);

export default App;
