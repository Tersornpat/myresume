import React, { useState } from 'react';
import '../projects/style.css';

function checkUrl(url) {
    return url || "";
}

const Card = ({ title, text, imageSrc, url, additionalImages = [] }) => {
    // State to manage the popup visibility and the current image
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(imageSrc);
    // Handle card click to open the popup
    const handleCardClick = () => {
        setIsPopupOpen(true);
    };

    // Handle popup close
    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    // Handle image change
    const handleImageChange = (newImage) => {
        setCurrentImage(newImage);
    };

    checkUrl(url)
    return (
        <>
            <div className="col">
                <div className="card h-100">
                    <div className='image-container mt-2' onClick={handleCardClick}>
                        <img src={imageSrc} className="card-image" alt={title} />
                    </div>
                    <div className="card-body" onClick={handleCardClick}>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                    </div>
                    <div className='link'>
                        {url ? <a href={url}>{url}</a> : <a></a>}
                    </div>
                </div>
            </div>
            {isPopupOpen && (
                <div className="popup-overlay"
                    style={{
                        width: '100%',
                        height: '100%',
                        margin: '0',
                        padding: '0',
                        transition: '0.15s ease-in'
                    }}
                    onClick={handleClosePopup}>
                    <div>
                        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                            <div>
                                <img src={currentImage} className="popup-image" alt={title} />
                            </div>
                            <div className="image-thumbnails">
                                {[imageSrc, ...additionalImages].map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        className="thumbnail"
                                        alt={`Thumbnail ${index}`}
                                        onClick={() => { handleImageChange(img); console.log(img) }}
                                    />

                                ))}
                            </div>
                            <div>
                                <button className="btn btn-outline-danger close-button" onClick={handleClosePopup}> CLOSE</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Card;
