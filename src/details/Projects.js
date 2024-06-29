import React from 'react';
import "./css/style.css";
import Card from "../components/projects/Card"

function Projects() {
  const cardsData = [
    {
      title: 'Card title 1',
      text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Card title 2',
      text: 'This is another card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Card title 3',
      text: 'This is yet another card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      imageUrl: 'https://via.placeholder.com/150',
    }, {
      title: 'Card title 2',
      text: 'This is another card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Card title 3',
      text: 'This is yet another card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      imageUrl: 'https://via.placeholder.com/150',
    }, {
      title: 'Card title 2',
      text: 'This is another card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      imageUrl: 'https://via.placeholder.com/150',
    }
  ];
  return (
    <div className="container mt-3">
      <h1 className='text-center mb-5'>Projects</h1>
      <div className="row row-cols-1 row-cols-md-3 g-5">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            text={card.text}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
