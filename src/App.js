// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import LandingPage from './Pages/LandingPage'; // Import LandingPage
import '@fontsource/inter/600.css';
import Contact from './Pages/Contact';
import Customers from './Pages/Customers';
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes with the new syntax */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
       <Route path="/customers" element={<Customers />} />
        {/* You can add more routes here */}
      </Routes>
    </Router>
  );
};

export default App;
