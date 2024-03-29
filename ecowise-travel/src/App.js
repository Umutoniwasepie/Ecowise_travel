//import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import AdventureSearchPage from './pages/AdventureSearchPage';
import ImpactCalculator from './pages/ImpactCalculator';
import CommunityForum from './pages/CommunityForum';
import ContactForm from './pages/ContactForm';
import ReviewPage from './pages/ReviewPage';
import './App.css';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {/* Add routes for new paths */}
          <Route path="/adventures" element={<AdventureSearchPage />} />
          <Route path="/community-forum" element={<CommunityForum />} />
          <Route path="/reviews" element={<ReviewPage />} />
          <Route path="/impact-calculator" element={<ImpactCalculator />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="*" element={null} />
        </Routes>
        <Routes>
            <Route path="/contact-form" element={<ContactForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
