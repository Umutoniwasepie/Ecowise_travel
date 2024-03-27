import React from 'react';

const AdventureCard = ({ data }) => {
  const { title, image, description, rating } = data; // Destructure data object

  return (
    <div className="adventure-card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="rating">
          <span>Rating:</span>
          <span>{rating}</span>
        </div>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default AdventureCard;
