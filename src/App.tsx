import React, { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Project";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

const App = () => {
  const [activeSection, setActiveSection] = useState("Home");

  return (
    <div className="bg-[#080b12] min-h-screen text-slate-100 font-sans selection:bg-purple-500 selection:text-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Home />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;