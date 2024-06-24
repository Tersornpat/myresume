import { BrowserRouter as Router } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './components/details/Home';
import About from './components/details/About';
import Projects from './components/details/Projects';
import Resume from './components/details/Resume';
import Contact from './components/details/Contact';
import './App.css';
import Nav from './components/nav/Nav';

const height = 20;

function App() {
  const [navHeight, setNavHeight] = useState(0);
  return (
    <Router basename="/myresume">
      <div>
        <Nav setNavHeight={setNavHeight} />
        <main className="content">
          <section id="home" className="bg-light" style={{ paddingTop: `${navHeight + height}px` }}>
            <Home />
          </section>
          <section id="about" style={{ paddingTop: `${navHeight + height}px` }}>
            <About />
          </section>
          <section id="projects" style={{ paddingTop: `${navHeight + height}px` }}>
            <Projects />
          </section>
          <section id="resume" style={{ paddingTop: `${navHeight + height}px` }}>
            <Resume />
          </section>
          <section id="contact" style={{ paddingTop: `${navHeight + height}px` }}>
            <Contact />
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;