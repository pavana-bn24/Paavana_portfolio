import React, { useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x4ade80,
        backgroundColor: 0x0a0f28,
        points: 12.0,
        maxDistance: 20.0,
        spacing: 17.0
      });
    }

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <>
      <div id="vanta-bg" ref={vantaRef} style={{ position: "fixed", width: "100%", height: "100%", top: 0, left: 0, zIndex: -1 }} />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Experience />
      <Footer />
    </>
  );
}

export default App;
