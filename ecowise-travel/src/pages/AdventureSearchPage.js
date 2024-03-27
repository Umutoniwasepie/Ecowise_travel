import React from 'react';
import AdventureCard from './AdventureCard'; // Import AdventureCard component
import './Adventure.css'; // Import CSS file for AdventureSearchPage

const adventuresData = [
  {
    id: 1,
    title: 'Explore the Volcanoes of Rwanda',
    image: 'rwanda-volcanoes.jpg',
    description: 'Track gorillas in the mist and discover the stunning Rwandan landscape.',
    rating: 4.5
  },
  {
    id: 2,
    title: 'Hike the Breathtaking Trails of Turkey',
    image: 'turkey-hiking.jpg',
    description: 'Immerse yourself in nature and explore ancient ruins on Turkish hiking trails.',
    rating: 4.0
  },
  {
    id: 3,
    title: 'Cycle Through Germany\'s Enchanting Forests',
    image: 'germany-cycling.jpg',
    description: 'Experience the beauty of German forests on a scenic cycling adventure.',
    rating: 4.7
  },
  {
    id: 4,
    title: 'Sustainable Safari in Costa Rica',
    image: 'costa-rica-safari.jpg',
    description: 'Encounter diverse wildlife and support conservation efforts on a Costa Rican safari.',
    rating: 4.2
  },
  {
    id: 5,
    title: 'Kayak the Pristine Waters of Norway',
    image: 'norway-kayaking.jpg',
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
          <AdventureCard key={adventure.id} data={adventure} />
        ))}
      </div>
    </div>
  );
};

export default AdventuresPage;
