// src/components/Hero.jsx
import React from 'react';
import '../style.css';

const Hero = () => {
  return (
    <section id="hero" className="section hero">
      <div className="hero-content">
        <h1>🚀 Welcome to <span>Praveen Kumar MR's</span> Universe</h1>
        <p>Turning futuristic ideas into reality with technology.</p>
        <a href="sume.pdf" className="cta-button" target="_blank" rel="noopener noreferrer">📄 View Resume</a>
      </div>
    </section>
  );
};

export default Hero;
