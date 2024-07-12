import { React, useState, useEffect } from 'react';
import './css/style.css'

import youngman from '../img/about_img/tersornpat3.jpg'

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
                    <div className='col-lg-6 mt-5 md-6 d-flex flex-column' >
                        <div>
                            <h2 className='h4 my2'>Hello, I'm Sornpat Amthiangtham!</h2>
                            <p>I’m a recent graduate with a Bachelor’s degree in Computer Science from King Mongkut’s Institute of Technology Ladkrabang (KMITL).</p>
                            <p>I’m really excited to use my skills and knowledge to work on your projects. I’m looking forward to creating efficient solutions that meet your business needs.</p>
                        </div>
                        <div className="container mt-3">
                            <div className="row">
                                <div className="col-sm-2">
                                    <div className="pb-1">Age:</div>
                                </div>
                                <div className="col-sm-10">
                                    <div className="pb-1 fw-bolder">22</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-2">
                                    <div className="pb-1">Phone:</div>
                                </div>
                                <div className="col-sm-10">
                                    <div className="pb-1 fw-bolder">(+66) 865448466</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-2">
                                    <div className="pb-1">Email:</div>
                                </div>
                                <div className="col-sm-10">
                                    <div className="pb-1 fw-bolder">s.amthiangtham@gmail.com</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-2">
                                    <div className="pb-1">Status:</div>
                                </div>
                                <div className="col-sm-10">
                                    <div className="pb-1 fw-bolder available">Available</div>
                                </div>
                            </div>
                        </div>
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