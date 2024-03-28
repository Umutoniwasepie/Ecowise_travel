import React from 'react';
import './Adventure.css'; // Import CSS file for AdventureSearchPage

const adventuresData = [
  {
    id: 1,
    title: 'Explore the Volcanoes of Rwanda',
    image: 'https://example.com/image1.jpg',
    description: 'Track gorillas in the mist and discover the stunning Rwandan landscape.',
    rating: 4.5
  },
  {
    id: 2,
    title: 'Turkey',
    image: 'https://example.com/image2.jpg',
    description: 'Immerse yourself in nature and explore ancient ruins on Turkish hiking trails.',
    rating: 4.0
  },
  {
    id: 3,
    title: 'Germany',
    image: 'https://example.com/image3.jpg',
    description: 'Experience the beauty of German forests on a scenic cycling adventure.',
    rating: 4.7
  },
  {
    id: 4,
    title: 'Costa Rica',
    image: 'https://example.com/image4.jpg',
    description: 'Encounter diverse wildlife and support conservation efforts on a Costa Rican safari.',
    rating: 4.3
  },
  {
    id: 5,
    title: 'Norway',
    image: 'https://example.com/image5.jpg',
    description: 'Explore Norway\'s stunning fjords and experience the beauty of nature by kayak.',
    rating: 4.8
  },
];

const AdventuresPage = () => {
  return (
    <div className="adventures-container">
      <h1>Explore Eco-Friendly Adventures Around the World</h1>
      <div className="adventure-cards">
        {adventuresData.map((adventure) => (
          <div key={adventure.id} className="adventure-card">
            <div className="adventure-image" style={{ backgroundImage: `url(${adventure.image})` }}></div>
            <div className="adventure-details">
              <h3>{adventure.title}</h3>
              <p>{adventure.description}</p>
              <p>Rating: {adventure.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdventuresPage;
