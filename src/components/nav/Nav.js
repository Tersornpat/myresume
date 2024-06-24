import React, { useEffect, useRef } from 'react';

const Nav = ({ setNavHeight }) => {
    const navRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (navRef.current) {
                setNavHeight(navRef.current.offsetHeight);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setNavHeight]);

    const scrollToSection = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="sidebar" ref={navRef}>
            <div className="logo">
                Sornpat Am.
            </div>
            <ul>
                <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About Me</a></li>
                <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
                <li><a href="#resume" onClick={(e) => { e.preventDefault(); scrollToSection('resume'); }}>Resume</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
            </ul>
        </nav>
    );
}

export default Nav;
