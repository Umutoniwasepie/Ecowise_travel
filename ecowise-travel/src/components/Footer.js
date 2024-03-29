import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Assuming Font Awesome is imported centrally
import './Footer.css'; // Import the CSS file

const Footer = () => {
  const year = new Date().getFullYear(); // Get current year dynamically

  return (
    <footer className="footer">
      <div className="footer-content">
        <nav className="footer-nav">
          {/* Navigation links on the left */}
          <ul className="navigation-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
        <div className="copyright">
          {/* Copyright on the bottom */}
          <p>&copy; {year} EcoWise Travel</p>
        </div>
        <nav className="social-media">
          {/* Social media links on the right */}
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/pierrette-umutoniwase/" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon icon="fab fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/your-instagram-handle" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon icon="fab fa-instagram" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
