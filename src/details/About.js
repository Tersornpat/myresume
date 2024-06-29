import { React, useState , useEffect } from 'react';
import './css/style.css'

import youngman from '../img/about_img/tersornpat2.jpg'

function About() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const handleLoad = () => setIsLoaded(true);
        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);
    }, []);
    return (
        <div className='pt-4 px-3 px-lg-4'>
            <div className='container-narrow'>
                <div className='row'>
                    <div className='col-lg-6 mt-5 md-6' >
                        <h2>Hello, I'm Sornpat Amthiangtham.</h2>
                        <p>I am a new graduate and aspiring full-stack developer, holding a Bachelor's degree in Computer Science from King Mongkut's Institute of Technology Ladkrabang (KMITL).</p>
                        <p>I am enthusiastic about applying my knowledge and skills to your projects, and I'm eager to contribute to creating efficient solutions that address business needs.</p>
                    </div>
                    <div className={`col-lg-6 d-flex justify-content-center align-items-center mt-3 fade-in-sectionX ${isLoaded ? 'loaded' : ''}`}>
                        <img className='profile-resize rounded' src={youngman} alt='Profile' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;