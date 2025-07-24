import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import CafeNavbar from './Components/CafeNavbar';
import HeroSection from './Components/HeroSection';
import Menu from './pages/Menu';         
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Silk from './Components/Silk';
import PlaceOrder from './pages/PlaceOrder'; 

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      >
        <Silk
          speed={5}
          scale={1}
          color="#f8d9de"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      {/* Foreground App */}
      <Router>
        <CafeNavbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/place-order" element={<PlaceOrder />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
