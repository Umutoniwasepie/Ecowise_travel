import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Homepage.css'; // Import CSS file for styling

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory(); // Initialize history object

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Navigate to AdventuresPage with the search query as a URL parameter
    history.push(`/adventures?q=${searchQuery}`);
  };

  return (
    <div className="homepage-container">
      {/* Header */}
      <header className="header"></header>

      {/* Hero Section */}
      <section className="hero-section">

      </section>

       {/* Search Section */}
      <section className="search-section">
        <h1>Explore the World Responsibly</h1>
        <h2>Find Your Next Eco-Friendly Adventure</h2>
        <form onSubmit={handleSubmit} className="search-bar"> {/* Use form element for submission */}
          <input
            type="text"
            placeholder="Search adventures..."
            aria-label="Search Adventures"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button type="submit">Search</button>
        </form>
        <p>Filter by location, activity type, sustainability ratings, and more.</p>
      </section>

     {/* Featured Content */}
      <section className="featured-content">
        <h2>Featured Destinations</h2>
        <div className="featured-cards">
          {/* Add cards or tiles showcasing featured destinations, tips, or testimonials */}
          <div className="card">
            <div className="card-image">
            </div>
            <div className="card-content">
              <h3>Featured Destination 1</h3>
              <p>Description of the destination...</p>
              <p>A paragraph about the destination goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et eros nec nisi facilisis tincidunt. Quisque vulputate, libero eget consectetur interdum, metus quam scelerisque justo, a luctus velit sapien ut nunc.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
            </div>
            <div className="card-content">
              <h3>Featured Destination 2</h3>
              <p>Rwanda – Your next luxury eco-tourism destination.</p>
              <p>Explore the breathtaking landscapes of Rwanda while supporting sustainable tourism initiatives. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et eros nec nisi facilisis tincidunt.</p>
            </div>
          </div>
          {/* Add more cards as needed */}
          <div className="card">
            <div className="card-image">
            </div>
            <div className="card-content">
              <h3>Featured Destination 3</h3>
              <p>Description of the destination...</p>
              <p>A paragraph about the destination goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et eros nec nisi facilisis tincidunt. Quisque vulputate, libero eget consectetur interdum, metus quam scelerisque justo, a luctus velit sapien ut nunc.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="about-me">
        <h2>About Me</h2>
        <p>
          Hi there! My name is Pierrette U, and I'm passionate about travel and
          environmental responsibility. I believe that exploring the world
          doesn't have to come at the expense of our planet. That's why I
          created EcoWise Travel – a platform to help you discover amazing
          destinations while making sustainable choices. 
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="social-media">
          {/* Use official social media icons */}
          <a href="https://www.facebook.com" title="Facebook"><i className="fab fa-facebook"></i></a>
          <a href="https://www.twitter.com" title="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com" title="Instagram"><i className="fab fa-instagram"></i></a>
        </div>
        <div className="copyright">
          <p>&copy; 2024 EcoWise Travel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
