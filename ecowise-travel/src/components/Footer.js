// Footer.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import for navigation links
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import here

const Footer = () => {
  const year = new Date().getFullYear(); // Get current year dynamically

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="copyright">
          <p>&copy; {year} EcoWise Travel</p>
        </div>
        <nav className="footer-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
    <br></br>
    <br></br>
            <li>
              <Link to="/signin">Sign in</Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </nav>
        <div className="social-media"> {/* Optional: Add social media icons */}
          {/* Replace with your social media links (e.g., Facebook, Instagram) */}
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon icon="fab fa-linkedin" /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/your-instagram-handle" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon icon="fab fa-instagram" /> Instagram
              </a>
            </li>
          </ul>
          {/* Add more social media icons as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
