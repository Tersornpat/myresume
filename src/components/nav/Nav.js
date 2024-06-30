import React, { useEffect, useRef } from 'react';
import { saveAs } from 'file-saver';

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

    const handleDownload = () => {
        // API endpoint URL to fetch the PDF
        const apiEndpoint = 'https://export-download.canva.com/_FSfg/DAGIvA_FSfg/27/0-8784703543911155367.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20240627%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240627T071849Z&X-Amz-Expires=25109&X-Amz-Signature=2bef188586edf4f584b549ca08fe14c3fc923762761b8e7bd1cab5474d167955&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Resume_Sornpat.pdf&response-expires=Thu%2C%2027%20Jun%202024%2014%3A17%3A18%20GMT';

        // Fetch the PDF file from the API
        fetch(apiEndpoint)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.blob();
            })
            .then(blob => {
                saveAs(blob, 'downloaded-file.pdf');
            })
            .catch(error => {
                console.error('Error downloading the file:', error);
            });
    }

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
            <div className='download'>
                <button className="btn btn-danger" onClick={handleDownload}>
                    Resume PDF
                </button>
            </div>
        </nav>
    );
}

export default Nav;
