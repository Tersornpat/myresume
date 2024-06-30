import React from 'react';
import "./css/style.css";
import Card from "../components/projects/Card";
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


function Projects() {
  const cardsData = [
    {
      title: 'Help You Rich ChatBot (อยากรวยช่วยได้)',
      text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      imageSrc: HelpYouRich,
      additionalImages: [HelpYouRich2, HelpYouRich3, HelpYouRich4, HelpYouRich5, HelpYouRich6, HelpYouRich7]
    },
    {
      title: 'Fullstack-Hostpital ER,API',
      text: 'This is another card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      imageSrc: Hostpital,
      additionalImages: [Hostpital2, Hostpital3]
    },
    {
      title: 'Alumni Flask',
      text: 'This is yet another card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      imageSrc: Alumni,
    },
    {
      title: 'Flask MVC',
      text: 'This is another card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      imageSrc: FlaskMVC,
    },
    {
      title: 'FastAPI MVC',
      text: 'This is yet another card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      imageSrc: FastAPI,
      additionalImages: [FastAPI2, FastAPI3]
    },
    {
      title: 'DIVA WalkThrough',
      text: 'This is another card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      imageSrc: Diva,
      additionalImages: [Diva2, Diva3, Diva4]
    }
  ];

  return (
    <div className="container mt-3 d-flex flex-column justify-content-center align-items-center">
    <h2 className='mb-3'>Projects</h2>
      <div className="mt-3 row row-cols-1 row-cols-md-3 g-5">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            text={card.text}
            imageSrc={card.imageSrc}
            additionalImages={card.additionalImages}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
