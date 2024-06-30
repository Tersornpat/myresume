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

    return (
        <nav id="header-nav" className="sidebar" ref={navRef}>
            <div className="logo">
                <a href="#home">Sornpat Am</a>
            </div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <a className='download' href='https://drive.google.com/file/d/1mllEBEEVJWu4_9hmaSQg3WChtinUtEUB/view'>
                <button className="btn btn-danger">
                    Resume PDF
                </button>
            </a>
        </nav>
    );
}

export default Nav;
