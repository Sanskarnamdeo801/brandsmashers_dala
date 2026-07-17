import React from 'react';
import BlurText from '../Animations/BlurText'; 
import CircularGallery from '../CircularGallery/CircularGallery.jsx';

export function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full bg-transparent z-20 py-32 overflow-hidden">
      
      {/* Title Section */}
      <div className="w-full flex flex-col items-center text-center px-6 md:px-20 mb-16">
        <span className="text-[#FF2E2B] font-bold uppercase tracking-widest text-[13px] mb-4">
          Wall of Love
        </span>
        <BlurText 
          text="Client Success Stories." 
          className="text-4xl md:text-5xl font-bold text-white tracking-tight" 
        />
      </div>

      {/* 3D Circular Gallery Section */}
      <div className="w-full relative" style={{ height: '600px' }}>
        <CircularGallery
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.05}
          font="bold 30px sans-serif"
          scrollSpeed={2}
          // Yahan aap items array bhej sakte hain apne clients ke images ke sath
          // items={[
          //   { image: '/client1.jpg', text: 'Awesome Work' },
          //   { image: '/client2.jpg', text: 'Great AI Team' }
          // ]}
        />
      </div>
      
    </section>
  );
}