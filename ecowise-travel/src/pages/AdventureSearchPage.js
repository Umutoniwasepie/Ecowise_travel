import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Adventure.css'; // Import CSS file for AdventureSearchPage

const adventuresData = [
  {
    id: 1,
    title: 'Rwanda',
    image: './mariott-rwanda.jpg',
    description: 'Embark on a journey to Rwanda, the land of a thousand hills. Explore the lush rainforests of Volcanoes National Park and encounter the magnificent mountain gorillas in their natural habitat. Immerse yourself in the vibrant culture of Rwanda while supporting sustainable ecotourism initiatives that contribute to wildlife conservation and local community development.',
    rating: 4.7
  },
  {
    id: 2,
    title: 'Turkey',
    image: './goreme-turkey.jpg',
    description: 'Discover the breathtaking landscapes of Turkey, where ancient history meets stunning natural beauty. Traverse the scenic trails of Cappadocia and marvel at the otherworldly rock formations and fairy chimneys. Experience sustainable tourism practices in action as you stay in eco-friendly accommodations and engage in responsible travel activities that promote environmental conservation and cultural preservation.',
    rating: 4.2
  },
  {
    id: 3,
    title: 'Germany',
    image: './rheinhessen-germany.jpg',
    description: 'Embark on a sustainable adventure in Germany, where picturesque landscapes and eco-friendly practices abound. Cycle through the enchanting forests of Rheinhessen and explore charming villages nestled amidst vineyards and organic farms. Experience the essence of sustainable living as you indulge in locally sourced cuisine, stay in eco-lodges, and support initiatives focused on renewable energy and biodiversity conservation.',
    rating: 4.6
  },
  {
    id: 4,
    title: 'Costa Rica',
    image: './aguirre-costarica.jpg',
    description: 'Experience the wonders of Costa Rica, a paradise for eco-conscious travelers seeking immersive nature experiences. Journey through lush rainforests teeming with biodiversity and encounter fascinating wildlife species, from sloths to toucans. Engage in responsible ecotourism activities such as canopy zip-lining, wildlife watching, and sustainable coffee tours, all while contributing to conservation efforts and community empowerment initiatives.',
    rating: 4.4
  },
  {
    id: 5,
    title: 'Norway',
    image: './green-norway.jpg',
    description: 'Explore the pristine wilderness of Norway, where rugged mountains, crystal-clear fjords, and awe-inspiring glaciers await. Embark on eco-friendly adventures such as hiking, kayaking, and wildlife safaris, and immerse yourself in the tranquility of nature. Experience sustainable travel practices firsthand by staying in eco-lodges, dining on locally sourced cuisine, and participating in eco-conscious excursions that prioritize environmental stewardship and conservation.',
    rating: 4.8
  },
];


const AdventuresPage = () => {
  return (
    <div className="adventures-container">
     {/* Section with an image on top */}
      <section className="page-header">
        <img src="gorilla-rwanda.jpg" alt="Header" />
      </section>
      {/* Title */}
        <h1>Explore Eco-Friendly Adventures Around the World</h1>
          <div className="adventure-cards">
           {adventuresData.map((adventure) => (
             <div key={adventure.id} className="adventure-card">
               {adventure.image && (
                 <img src={adventure.image} alt={adventure.title} className="adventure-image" />
            )}
             
            <div className="adventure-details">
              <h3>{adventure.title}</h3>
                            <br></br>
              <p>{adventure.description}</p>
                            <br></br>
              <p>Rating: {adventure.rating}</p>
                            <br></br>
              {/* Add a button with a Link to the review page */}
              <Link to={"/reviews/"} className="review-button">Write a Review</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdventuresPage;
