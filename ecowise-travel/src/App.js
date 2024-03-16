import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HamburgerIcon from './components/HamburgerIcon';
import HomePage from './components/HomePage';
import AdventureSearchPage from './components/AdventureSearchPage';
import ImpactCalculator from './components/ImpactCalculator';
import TravelTips from './components/TravelTips';
import CommunityForum from './components/CommunityForum';
import ReviewPage from './components/ReviewPage';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Function to toggle menu state
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <HamburgerIcon isOpen={isMenuOpen} onClick={toggleMenu} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/search" element={<AdventureSearchPage />} />
          <Route path="/reviews" element={<ReviewPage />} />
          {/* Add routes for new paths */}
          <Route path="/travel-tips" element={<TravelTips />} />
          <Route path="/adventures" element={<AdventureSearchPage />} />
          <Route path="/community-forum" element={<CommunityForum />} />
          <Route path="/impact-calculator" element={<ImpactCalculator />} />
          <Route path="*" element={null} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
