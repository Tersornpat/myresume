import React from 'react';
import "./css/style.css";
import Card from "../components/projects/Card";
import SimulationTrading from "../img/projects_img/Simulation Trading/1.png"
import CRUD from "../img/projects_img/CRUD-Web-SET/1.jpg"
import HelpYouRich from "../img/projects_img/HelpYouRich/1.png";
import HelpYouRich2 from "../img/projects_img/HelpYouRich/2.png";
import HelpYouRich3 from "../img/projects_img/HelpYouRich/3.png";
import HelpYouRich4 from "../img/projects_img/HelpYouRich/4.png";
import HelpYouRich5 from "../img/projects_img/HelpYouRich/5.png";
import HelpYouRich6 from "../img/projects_img/HelpYouRich/6.png";
import HelpYouRich7 from "../img/projects_img/HelpYouRich/7.png";
import Hostpital from "../img/projects_img/Fullstack-Hostpital/1.png";
import Hostpital2 from "../img/projects_img/Fullstack-Hostpital/2.png";
import Hostpital3 from "../img/projects_img/Fullstack-Hostpital/3.png";
import Alumni from "../img/projects_img/AlumniFlask/1.png";
import FlaskMVC from "../img/projects_img/Flask_MVC/1.png";
import FastAPI from "../img/projects_img/FastAPI_MVC/1.png";
import FastAPI2 from "../img/projects_img/FastAPI_MVC/2.png";
import FastAPI3 from "../img/projects_img/FastAPI_MVC/3.png";
import Diva from "../img/projects_img/DIVA WalkThrough/1.png";
import Diva2 from "../img/projects_img/DIVA WalkThrough/2.png";
import Diva3 from "../img/projects_img/DIVA WalkThrough/3.png";
import Diva4 from "../img/projects_img/DIVA WalkThrough/4.png";
import setCert from '../img/cert_img/SETInternshipCert.jpg';
import scienceCert from '../img/cert_img/ScienceMajorCert.jpg';
import discoveryCert from '../img/cert_img/DiscoveryPicsine.jpg';
import Transcript from '../img/cert_img/Official_Transcript.png';
import Transcript2 from '../img/cert_img/kmitl reg.png';
import DegreeCompletion from '../img/cert_img/Certificate_Of_Academic_Degree_Completion.png';


function Projects() {
  const certData = [
    {
      title: 'Transcript Of Records (Official)',
      text: 'My Transcript Of Records from Majority Computer Science, Faculty of science, King Mongkut\'s Institute of Technology Ladkrabang.',
      imageSrc: Transcript,
      additionalImages: [Transcript2],
    },
    {
      title: 'Certificate of academic degree completion (Official)',
      text: 'My Certificate of academic degree completion Effective since 23 Jul 2024 to 21 Sep 2024 (60 days). ',
      imageSrc: DegreeCompletion,
    },
    {
      title: 'SET Cooperative Certificate',
      text: 'This is Certificate of The Stock Exchange of Thailand (SET). I am internship student worked with Trading System for 6 months.',
      imageSrc: setCert
    },
    {
      title: 'Majority of Science Certificate',
      text: 'This is Certificate of Majority of Science. I got this certificate by passed MVC Design Pattern exam when i was 3rd year.',
      imageSrc: scienceCert
    },
    {
      title: '42 Bangkok Discovert Picsine Certificate',
      text: 'This is Certificate of Elective Subject: Fun With Code that host by 42 Bangkok.This Subject we learned about HTML CSS and UNIX command this coruse was teached by concept "learning by doing" and rushing course in 7 days.',
      imageSrc: discoveryCert
    },
  ]
  const cardsData = [
    {
      title: 'Simulation order feeding in trading system\'s test environment (internship project)',
      text: 'Simulation order feeding in trading sytem is automatic feed order (real transaction) with control panel to create and test the worst situation that\'s can happen in Stock Market',
      imageSrc: SimulationTrading,
    },
    {
      title: 'CRUD of complex database project (internship project)',
      text: 'CRUD of complex database project use to config database that\'s is a access control database manage who\'s can Read/Write.',
      imageSrc: CRUD,
    },
    {
      title: 'Help You Rich ChatBot (อยากรวยช่วยได้)',
      text: 'HelpYouRich ChatBot is My team AI Project. That learn how to do rule based in AI. This project i was using Line ChatBot with flask as webhook dialogflow and Thai-Lottery API. This madde for check winning lottery and predicted number from your dream details.',
      imageSrc: HelpYouRich,
      additionalImages: [HelpYouRich2, HelpYouRich3, HelpYouRich4, HelpYouRich5, HelpYouRich6, HelpYouRich7],
      url: 'https://github.com/donkys/HelpRich'
    },
    {
      title: 'Fullstack-Hostpital ER,API',
      text: 'Fullstack Hospital is My team Fullstack project. That learn how fullstack do to each project since Desgin ER diagram ,coding backend-frontend ,hosting server ,config nginx and install cert to make https.',
      imageSrc: Hostpital,
      additionalImages: [Hostpital2, Hostpital3],
      url: 'https://github.com/Tersornpat/api-server'
    },
    {
      title: 'Alumni Flask',
      text: 'Alumni with Python Flask is My team OS Project. That learn how to access database deploy and automate webhook with Microsoft Azure.',
      imageSrc: Alumni,
    },
    {
      title: 'Flask MVC',
      text: 'Flask MVC is My Flask Project. That use MVC Design Pattern splited flask structure to Model(MySql) View(JinjaTemplate(HTML)) Controller(Python-Flask) and i used this do the exam.',
      imageSrc: FlaskMVC,
      url: 'https://github.com/Tersornpat/mvc-flask-starter-pack'
    },
    {
      title: 'FastAPI MVC',
      text: 'FastAPI MVC is My Fast-API Project. That use MVC Design Pattern but using FastAPI. In FastAPI it has just like Swagger-UI so it is more easy for config routing that Flask so i use it to do exam after Flask.',
      imageSrc: FastAPI,
      additionalImages: [FastAPI2, FastAPI3]
    },
    {
      title: 'DIVA WalkThrough',
      text: 'DIVA Walkthough is My System Security project. it use DIVA (Damn insecure and vulnerable App) Android Application which has high vulnerability following the OWASP Mobile Top 10 like insecure database, log sensitive information. i presented this to my friend how to use each vulnerability.',
      imageSrc: Diva,
      additionalImages: [Diva2, Diva3, Diva4]
    }
  ];

  return (
    <div className="container mt-3 d-flex flex-column justify-content-center align-items-center">
      <h2 className='mb-3'>Certificate</h2>
      <div className="mt-3 mb-3 row row-cols-1 row-cols-md-3 g-5">
        {certData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            text={card.text}
            imageSrc={card.imageSrc}
            additionalImages={card.additionalImages}
            url={card.url}
          />
        ))}
      </div>
      <h2 className='mt-5'>Projects</h2>
      <div className="mt-3 row row-cols-1 row-cols-md-3 g-5">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            text={card.text}
            imageSrc={card.imageSrc}
            additionalImages={card.additionalImages}
            url={card.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
