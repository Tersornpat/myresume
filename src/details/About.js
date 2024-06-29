import React from 'react';
import './css/style.css'

import youngman from '../img/about_img/youngman.jpg'

function About() {
    return (
        <div className='container px-3 px-lg-4'>
            <div className='row'>
                <div className='col-lg-6 mt-5'>
                    <p>Hello, my name is Sornpat Amthiangtham.</p>
                    <p>I am a new graduate and aspiring full-stack developer, holding a Bachelor's degree in Computer Science from King Mongkut's Institute of Technology Ladkrabang (KMITL).</p>
                    <p>I am enthusiastic about applying my knowledge and skills to your projects, and I'm eager to contribute to creating efficient solutions that address business needs.</p>
                </div>
                <div className='col-lg-6 d-flex justify-content-center align-items-center mt-3'>
                    <img className='profile-resize rounded' src={youngman} alt='Profile' />
                </div>
            </div>
        </div>
    );
}

export default About;