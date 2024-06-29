import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './css/style.css';

import penguin from '../img/home_img/penguin.png'

function Home() {
    return (
        <div className='container px-3'>
            <div className='row'>
                <div className='col-lg-6 p-2 d-flex justify-content-center align-items-center'>
                    <img className='image-resize' src={penguin}></img>
                </div>
                <div className='col-lg-6'>
                    <div className='mt-5'>
                        <p className='lead text-uppercase mb-1 text-left'>
                            Hello!
                        </p>
                        <h1 className='intro-title marker text-left'>
                            I am Sornpat Amthiangtham
                        </h1>
                        <p className='lead fw-normal mt-3 text-left'>
                            Full Stack Web Developer
                        </p>
                        <div className='home-contact'>
                            <SocialIcon bgColor="black" fgColor="white" url="https://github.com/tersornpat" />
                            <SocialIcon bgColor="black" fgColor="white" href="#contact" network="email" />
                            <SocialIcon bgColor="black" fgColor="white" url="https://www.linkedin.com/in/tersornpat" />
                            <SocialIcon bgColor="black" fgColor="white" url="https://www.facebook.com/tersornpat" />
                        </div>
                        <div className='mt-5'>
                            <a href='#contact'>
                                <button type='button' className='btn btn-warning hover-effect'>Contact Me</button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;