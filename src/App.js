import { BrowserRouter as Router } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './components/details/Home';
import About from './components/details/About';
import Projects from './components/details/Projects';
import Resume from './components/details/Resume';
import Contact from './components/details/Contact';
import './App.css';
import Nav from './components/nav/Nav';

const height = 0;

function App() {
  const [navHeight, setNavHeight] = useState(0);
  return (
    <Router basename="/myresume">
      <div>
        <Nav setNavHeight={setNavHeight} />
        <main className="content">
          <section id="home" className="background-lg" style={{ paddingTop: `${navHeight + height}px` }}>
            <Home />
            <img className='img-spliter' src='https://media.discordapp.net/attachments/1115203267954221116/1254822331830763652/Untitled.jpg?ex=667e2f9d&is=667cde1d&hm=0d2f82f9398ec8603ec8940412a9f055f4e9fceb2ce415598f3137111f77e2c9&=&format=webp&width=1152&height=123'></img>
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