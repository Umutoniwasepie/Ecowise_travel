// Footer.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import for navigation links

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
              <Link to="/signin">Sign up</Link>
            </li>
            <li>
              <Link to="/Signup">Sign in</Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </nav>
        <div className="social-media"> {/* Optional: Add social media icons */}
          {/* Replace with your social media links (e.g., Facebook, Instagram) */}
          <a href="https://www.linkedin.com/in/pierrette-umutoniwase/" target="_blank" rel="noreferrer noopener">
                <i className="fab fa-linkedin"></i> LinkedIn
          </a>
         <a href="https://www.instagram.com/your-instagram-handle" target="_blank" rel="noreferrer noopener">
                <i className="fab fa-instagram"></i> Instagram
         </a>
          {/* Add more social media icons as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
