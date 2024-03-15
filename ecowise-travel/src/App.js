import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AdventureSearchPage from './components/AdventureSearchPage';
import ImpactCalculator from './components/ImpactCalculator';
import TravelTips from './components/TravelTips';
import CommunityForum from './components/CommunityForum';
import ReviewPage from './components/ReviewPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={AdventureSearchPage} />
          <Route path="/calculator" component={ImpactCalculator} />
          <Route path="/tips" component={TravelTips} />
          <Route path="/forum" component={CommunityForum} />
          <Route path="/reviews" component={ReviewPage} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

