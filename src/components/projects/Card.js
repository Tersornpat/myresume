import React from 'react';

const Card = ({ title, text, imageUrl }) => {
    return (
        <div className="col">
            <div className="card h-100">
                <img src={imageUrl} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
