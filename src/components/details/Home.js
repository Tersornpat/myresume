import React from 'react';
import './css/style.css';

function Home() {
    return (
        <div className='container px-3'>
            <div className='row'>
                <div className='col-lg-6 p-2 d-flex justify-content-center align-items-center'>
                    <img className='image-resize' src='https://media.discordapp.net/attachments/1115203267954221116/1254687311468171264/penguin.png?ex=667a661e&is=6679149e&hm=1c4ca835baad16da309693dd745a7cdb2ce9d79765d110d62a77e6e770117113&=&format=webp&quality=lossless&width=525&height=350'></img>
                </div>
                <div className='col-lg-6'>
                    <div className='mt-5'>
                        <p className='lead text-uppercase mb-1 text-left'>
                            Hello!
                        </p>
                        <h1 className='intro-title marker text-left'>
                            I'm Sornpat Amthiangtham
                        </h1>
                        <p className='lead fw-normal mt-3 text-left'>
                            Full Stack Web Developer
                        </p>
                        <div className='home-contact'>
                            <div>Contact</div>
                            <div>Contact</div>
                            <div>Contact</div>
                            <div>Contact</div>
                        </div>
                        <a href='#contact'>
                            <button type='button' className='btn btn-warning'>Contact Me</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;