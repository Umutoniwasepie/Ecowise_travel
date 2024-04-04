//import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
//import PrivateRoute from './pages/PrivateRoute';
import AdventureSearchPage from './pages/AdventureSearchPage';
import ImpactCalculator from './pages/ImpactCalculator';
import CommunityForum from './pages/CommunityForum';
import ContactForm from './pages/ContactForm';
import ReviewPage from './pages/ReviewPage';
import UserProfile from './components/UserProfile';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
          <Route path="/profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
          <Route path="*" element={null} />
        </Routes>
{/* <ContactForm /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
