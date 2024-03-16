import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AdventureSearchPage from './components/AdventureSearchPage';
import ImpactCalculator from './components/ImpactCalculator';
import TravelTips from './components/TravelTips';
import CommunityForum from './components/CommunityForum';
import ReviewPage from './components/ReviewPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/search" element={<AdventureSearchPage />} />
          <Route path="/impact-calculator" element={<ImpactCalculator />} />
          <Route path="/tips" element={<TravelTips />} />
          <Route path="/forum" element={<CommunityForum />} />
          <Route path="/reviews" element={<ReviewPage />} />
          {/* Add routes for new paths */}
          <Route path="/adventures" element={<AdventureSearchPage />} />
          <Route path="/community-forum" element={<CommunityForum />} />
          <Route path="/impact-calculator" element={<ImpactCalculator />} />
          <Route path="/travel-tips" element={<TravelTips />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
