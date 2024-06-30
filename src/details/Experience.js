import React from 'react';
import education from '../img/experience_img/education.png'
import internship from '../img/experience_img/internship.png'
import './css/style.css'

function Experience() {
    return (
        <div>
            <div className="container mt-3 d-flex flex-column align-items-center justify-content-center">
                <div className="text-center mb-5">
                    <h2 className="marker marker-center">Education</h2>
                </div>
                <div className="text-center">
                    <p className="mx-auto mb-4" style={{ maxWidth: '600px' }}>
                        I offer services fit for any website or app. I can quickly maximize timely deliverables for real-time schemas.
                    </p>
                </div>
                <div>
                    <img className="mt-4 education-image" src={education} alt="edcation" />
                </div>
                <div className="container d-flex flex-column align-items-center justify-content-center">
                    <div className="text-center mt-5 mb-5">
                        <h2 className="marker marker-center">Internship & Experience</h2>
                    </div>
                    <div className=' d-flex '>
                        <img className="internship-image" src={internship} alt="internship" />
                        <div className='m-5'>
                            <p className=' fw-semibold'>Mainly use</p>
                            <ul className='mt-2 skill-list'>
                                <li>Java Spring Boot</li>
                                <li>SQL</li>
                                <li>ReactJs</li>
                                <li>Elastic Stack</li>
                                <li>Prometheus</li>
                                <li>Grafana</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container d-flex flex-column align-items-center justify-content-center">
                    <div className="text-center mt-5 mb-2">
                        <h2 className="marker marker-center">Skills</h2>
                    </div>
                    <div className='pt-4 px-3 px-lg-4 skill-container'>
                        <div className='container-narrow '>
                            <div className="container mt-3 ">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <div className="row">
                                            <div className="col-12 pb-4 fw-bolder text-center">Soft & Hard Skill</div>
                                            <ul className='skill-list'>
                                                <li><div className="col-12 pb-1 ">Strong  Communication Skills</div></li>
                                                <li><div className="col-12 pb-1 ">Computer Software</div></li>
                                                <li><div className="col-12 pb-1 ">Application Knowledge</div></li>
                                                <li><div className="col-12 pb-1 ">Emotional Intelligence</div></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="row">
                                            <div className="col-12 pb-4 fw-bolder text-center">Frameworks & lib</div>
                                            <ul className='skill-list'>
                                                <li><div className="col-12 pb-1 ">Python-Flask</div></li>
                                                <li><div className="col-12 pb-1 ">Python-FastApi</div></li>
                                                <li><div className="col-12 pb-1 ">React-JS</div></li>
                                                <li><div className="col-12 pb-1 ">Express-JS</div></li>
                                                <li><div className="col-12 pb-1 ">Bootstrap</div></li>
                                                <li><div className="col-12 pb-1 ">Spring Framework</div></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="row">
                                            <div className="col-12 pb-4 fw-bolder text-center">Programming Skill</div>
                                            <ul className='skill-list'>
                                                <li><div className="col-12 pb-1 ">Python</div></li>
                                                <li><div className="col-12 pb-1 ">Java</div></li>
                                                <li><div className="col-12 pb-1 ">PHP</div></li>
                                                <li><div className="col-12 pb-1 ">JavaScript</div></li>
                                                <li><div className="col-12 pb-1 ">SQL</div></li>
                                                <li><div className="col-12 pb-1 ">HTML</div></li>
                                                <li><div className="col-12 pb-1 ">CSS</div></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="row">
                                            <div className="col-12 pb-4 fw-bolder text-center">Tools</div>
                                            <ul className='skill-list'>
                                                <li><div className="col-12 pb-1 ">Git</div></li>
                                                <li><div className="col-12 pb-1 ">Google Cloud</div></li>
                                                <li><div className="col-12 pb-1 ">Microsoft Azure</div></li>
                                                <li><div className="col-12 pb-1 ">Figma</div></li>
                                                <li><div className="col-12 pb-1 ">MySQL</div></li>
                                                <li><div className="col-12 pb-1 ">Digital Ocean</div></li>
                                                <li><div className="col-12 pb-1 ">Docker</div></li>
                                                <li><div className="col-12 pb-1 ">MongoDB</div></li>
                                                <li><div className="col-12 pb-1 ">DBeaver</div></li>
                                                <li><div className="col-12 pb-1 ">SQLyog</div></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
