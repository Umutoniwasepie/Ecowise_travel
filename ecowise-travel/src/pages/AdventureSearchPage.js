import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Adventure.css'; // Import CSS file for AdventureSearchPage

const adventuresData = [
  {
    id: 1,
    title: 'Rwanda',
    image: './gorilla-rwanda.jpg',
    description: 'Embark on a journey to Rwanda, the land of a thousand hills. Explore the lush rainforests of Volcanoes National Park and encounter the magnificent mountain gorillas in their natural habitat. Immerse yourself in the vibrant culture of Rwanda while supporting sustainable ecotourism initiatives that contribute to wildlife conservation and local community development.',
    rating: 4.8
  },
  {
    id: 2,
    title: 'Turkey',
    image: './goreme-turkey.jpg',
    description: 'Take a hot air balloon ride over stunning rock formations in Cappadocia, a region rich in history. Stay in eco-friendly accommodations and participate in responsible activities that promote environmental and cultural preservation.',
    rating: 4.2
  },
  {
    id: 3,
    title: 'Germany',
    image: './rheinhessen-germany.jpg',
    description: 'Embark on an eco-friendly cycling adventure through charming villages nestled amidst vineyards. Enjoy locally sourced food, stay in eco-lodges, and support sustainable initiatives in a picturesque German wine region.',
    rating: 4.6
  },
  {
    id: 4,
    title: 'Costa Rica',
    image: './aguirre-costarica.jpg',
    description: 'Escape to a secluded island paradise, surrounded by crystal-clear waters teeming with marine life. Engage in responsible ecotourism activities like snorkeling and kayaking, contributing to conservation efforts while enjoying unforgettable experiences.',
    rating: 4.4
  },
  {
    id: 5,
    title: 'Norway',
    image: './green-norway.jpg',
    description: 'Explore awe-inspiring wilderness with majestic mountains, crystal-clear fjords, and cascading waterfalls. Embark on eco-friendly adventures like hiking and kayaking, and experience sustainable travel practices with eco-lodges and local cuisine.',
    rating: 4.8
  },
];


const AdventuresPage = () => {
  return (
    <div className="adventures-container">
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
      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Have any questions or feedback? Feel free to reach out!</p>
        <p><Link to="/">Go back to homepage to fill the contact form.</Link></p>
      </section>
    </div>
  );
};

export default AdventuresPage;
