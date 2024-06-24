import React from 'react';
import './css/style.css'

function About() {
    return (
        <div className='container px-3'>
            <div className='row'>
                <div className='col-lg-6 mt-5'>
                    <p>Hello, my name is Sornpat Amthiangtham.</p>
                    <p>I am a new graduate and aspiring full-stack developer, holding a Bachelor's degree in Computer Science from King Mongkut's Institute of Technology Ladkrabang (KMITL).</p>
                    <p>I am enthusiastic about applying my knowledge and skills to your projects, and I'm eager to contribute to creating efficient solutions that address business needs.</p>
                </div>
                <div className='col-lg-6 d-flex justify-content-center align-items-center mt-3'>
                    <img className='profile-resize rounded' src='https://media.discordapp.net/attachments/1115203267954221116/1254694900012683304/youngman.jpg?ex=667a6d2f&is=66791baf&hm=ad643b7181e72b63dc471aae0b5cad5c893ea6d8198db23329765c622baac491&=&format=webp&width=537&height=671' alt='Profile' />
                </div>
            </div>
        </div>
    );
}

export default About;