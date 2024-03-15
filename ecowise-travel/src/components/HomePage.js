import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'; // Import CSS file for styling

const Homepage = () => {
    return (
        <div className="homepage-container">
            {/* Header */}
            <header className="header">
                <div className="logo">
                    <img src="ecowise-logo.png" alt="EcoWise Travel Logo" />
                </div>
                <nav className="navigation">
                    <ul>
                        <li><Link to="/adventures">Adventures</Link></li>
                        <li><Link to="/impact-calculator">Impact Calculator</Link></li>
                        <li><Link to="/travel-tips">Travel Tips</Link></li>
                        <li><Link to="/community-forum">Community Forum</Link></li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Explore the World Responsibly</h1>
                    <p>Discover eco-friendly adventures and make a positive impact on the environment.</p>
                </div>
                <div className="hero-image">
                    <img src="hero-image.jpg" alt="Eco-Friendly Travel Destinations" />
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
                        <img src="featured-image1.jpg" alt="Featured Destination 1" />
                        <h3>Featured Destination 1</h3>
                        <p>Description of the destination...</p>
                    </div>
                    <div className="card">
                        <img src="featured-image2.jpg" alt="Featured Destination 2" />
                        <h3>Featured Destination 2</h3>
                        <p>Description of the destination...</p>
                    </div>
                    {/* Add more cards as needed */}
                </div>
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
                    <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                </div>
                <div className="copyright">
                    <p>&copy; 2024 EcoWise Travel. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Homepage;
