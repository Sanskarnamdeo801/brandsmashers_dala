import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Aapke purane saare original sections
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { BrandLogos } from './components/BrandLogos/BrandLogos';
import { Stats } from './components/Stats/Stats';
import { WhyUs } from './components/WhyUs/WhyUs';
import { Testimonials } from './components/Testimonials/Testimonials';
//import { About } from './components/About/About'; 
//import { Services } from './components/Services/Services';
//import { Portfolio } from './components/Portfolio/Portfolio';
import { Careers } from './components/Careers/Careers';
import { Footer } from './components/Footer/Footer';
import { useLenis } from './hooks/useLenis';

import { HeroCanvas } from './components/Hero/HeroCanvas.jsx'; 
import { OurExpertise } from './components/Process/OurExpertise.jsx';

function Home() {
  return (
    <main className="w-full flex flex-col bg-transparent">
      <Hero />
      <BrandLogos />
      <Stats />
      <WhyUs />
      <Testimonials /> 
      <OurExpertise />
    </main>
  );
}

export default function App() {
  useLenis(); // Smooth scrolling intact

  return (
    <Router>
      {/* 'overflow-x-hidden' lagaya hai taaki layout fate nahi */}
      <div className="relative min-h-screen w-full bg-[#050505] overflow-x-hidden selection:bg-[#FF2E2B] selection:text-white">
        
        {/* Background 3D Canvas */}
        <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
          <HeroCanvas />
        </div>
       
        <div className="relative z-10 flex flex-col w-full">
          
          {/* Navbar global hai */}
          <Navbar />
          
          {/* Routing logic: URL ke hisaab se page switch hoga */}
          <Routes>
            {/* Default home page */}
            <Route path="/" element={<Home />} />
            
            {/* Careers page */}
            <Route path="/careers" element={
              <main className="w-full flex flex-col bg-transparent pt-24 min-h-screen">
                <Careers />
              </main>
            } />
          </Routes>

          {/* Footer global hai */}
          <Footer />
          
        </div>
        
      </div>
    </Router>
  );
}