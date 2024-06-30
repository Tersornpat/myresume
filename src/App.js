import { BrowserRouter as Router } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Home from './details/Home';
import About from './details/About';
import Projects from './details/Projects';
import Experience from './details/Experience';
import Contact from './details/Contact';
import './App.css';
import Nav from './components/nav/Nav';
import Footer from './components/nav/Footer'

import waveImage from './img/home_img/wave.jpg'

const height = 0;

function App() {
  const [navHeight, setNavHeight] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => setIsLoaded(true);
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <Router basename="/myresume">
      <div>
        <Nav setNavHeight={setNavHeight} />
        <main className="content">
          <section id="home" className="background-lg" style={{ paddingTop: `${navHeight + height}px` }}>
            <Home />
            <img className={`img-spliter fade-in-sectionY ${isLoaded ? 'loaded' : ''}`} src={waveImage} alt='wave'></img>
          </section>
          <section id="about" style={{ paddingTop: `${navHeight + height}px` }}>
            <About />
          </section>
          <section id="experience" style={{ paddingTop: `${navHeight + height}px` }}>
            <Experience />
          </section>
          <section id="projects" style={{ paddingTop: `${navHeight + height}px` }}>
            <Projects />
          </section>
          <section id="contact" style={{ paddingTop: `${navHeight + height}px` }}>
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;