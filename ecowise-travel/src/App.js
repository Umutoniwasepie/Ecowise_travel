import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import AdventureSearchPage from './pages/AdventureSearchPage';
import ImpactCalculator from './pages/ImpactCalculator';
import TravelTips from './pages/TravelTips';
import CommunityForum from './pages/CommunityForum';
import ReviewPage from './pages/ReviewPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/search" element={<AdventureSearchPage />} />
          <Route path="/reviews" element={<ReviewPage />} />
          {/* Add routes for new paths */}
          <Route path="/travel-tips" element={<TravelTips />} />
          <Route path="/adventures" element={<AdventureSearchPage />} />
          <Route path="/community-forum" element={<CommunityForum />} />
          <Route path="/impact-calculator" element={<ImpactCalculator />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="*" element={null} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
