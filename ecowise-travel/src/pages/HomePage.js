import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import './Homepage.css'; // Import CSS file for styling

const Homepage = () => {
  const heroSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="homepage-container">
      {/* Header */}
      <header className="header">
        
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <Slider {...heroSettings}>
          <div>
            <img src="hero-image1.jpg" alt=" " />
          </div>
          <div>
            <img src="hero-image2.jpg" alt=" " />
          </div>
          <div>
            <img src="hero-image3.jpg" alt=" " />
          </div>
        </Slider>
        <div className="hero-content">
          <h1>Explore the World Responsibly</h1>
          <p>Discover eco-friendly adventures and make a positive impact on the environment.</p>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <h2>Find Your Next Eco-Friendly Adventure</h2>
        <div className="search-bar">
          <input type="text" placeholder="Search adventures..." aria-label="Search Adventures" />
          <button>Search</button>
        </div>
        <p>Filter by location, activity type, sustainability ratings, and more.</p>
      </section>

     {/* Featured Content */}
      <section className="featured-content">
        <h2>Featured Destinations</h2>
        <div className="featured-cards">
          {/* Add cards or tiles showcasing featured destinations, tips, or testimonials */}
          <div className="card">
            <div className="card-image">
              <img src="featured-image1.jpg" alt=" " />
            </div>
            <div className="card-content">
              <h3>Featured Destination 1</h3>
              <p>Description of the destination...</p>
              <p>A paragraph about the destination goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et eros nec nisi facilisis tincidunt. Quisque vulputate, libero eget consectetur interdum, metus quam scelerisque justo, a luctus velit sapien ut nunc.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="featured-image2.jpg" alt=" " />
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
              <img src="jaco-costarica.jpg" alt="Featured Destination 3" />
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
