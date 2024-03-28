import React from 'react';
import './Adventure.css'; // Import CSS file for AdventureSearchPage
import Footer from './Footer'; // Import Footer component

const adventuresData = [
  {
    id: 1,
    title: 'Rwanda',
    image: './mariott-rwanda.jpg',
    description: 'Track gorillas in the mist and discover the stunning Rwandan landscape.',
    rating: 4.7
  },
  {
    id: 2,
    title: 'Turkey',
    image: './goreme-turkey.jpg',
    description: 'Immerse yourself in nature and explore ancient ruins on Turkish hiking trails.',
    rating: 4.2
  },
  {
    id: 3,
    title: 'Germany',
    image: './rheinhessen-germany.jpg',
    description: 'Experience the beauty of German forests on a scenic cycling adventure.',
    rating: 4.6
  },
  {
    id: 4,
    title: 'Costa Rica',
    image: './aguirre-costarica.jpg',
    description: 'Encounter diverse wildlife and support conservation efforts on a Costa Rican safari.',
    rating: 4.4
  },
  {
    id: 5,
    title: 'Norway',
    image: './green-norway.jpg',
    description: 'Explore Norway\'s stunning fjords and experience the beauty of nature by kayak.',
    rating: 4.8
  },
];

const AdventuresPage = () => {
  return (
    <div>
      <div className="adventures-container">
        <h1>Explore Eco-Friendly Adventures Around the World</h1>
        <div className="adventure-cards">
          {adventuresData.map((adventure) => (
            <div key={adventure.id} className="adventure-card">
              <img src={adventure.image} alt={adventure.title} className="adventure-image" />
              <div className="adventure-details">
                <h3>{adventure.title}</h3>
                <p>{adventure.description}</p>
                <p>Rating: {adventure.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default AdventuresPage;
