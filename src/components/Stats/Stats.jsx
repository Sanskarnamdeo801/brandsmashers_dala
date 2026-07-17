// File: src/components/Stats/Stats.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  { id: 1, value: "100+", label: "Projects Delivered"},
  { id: 2, value: "50+", label: "Engineers"},
  { id: 3, value: "10+", label: "Countries"},
  { id: 4, value: "95%", label: "Client Retention"}
];

export function Stats() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.feature-box');
      
      gsap.fromTo(cards, 
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: { 
            trigger: containerRef.current, 
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative z-20 w-full px-6 md:px-12 lg:px-20 py-16 bg-transparent">
      <div className="mx-auto max-w-[1000px]">
        
        {/* Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-y border-white/5 divide-y md:divide-y-0 md:divide-x divide-white/5">
          
          {statsData.map((stat) => (
            <div 
              key={stat.id} 
              className="feature-box relative flex flex-col items-center justify-center py-10 px-4 group cursor-default"
            >
              
              {/* FIX: Mota border hata kar ekdum thin (1px) border border-[#FF2E2B]/60 kar diya hai */}
              <div className="absolute inset-2 border border-[#FF2E2B]/60 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_15px_rgba(255,46,43,0.1)] transition-all duration-300 pointer-events-none z-0"></div>

              <h3 className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-3 bg-gradient-to-b from-[#FF2E2B]/50 via-[#FF2E2B]/20 to-transparent text-transparent bg-clip-text drop-shadow-[0_1px_2px_rgba(255,46,43,0.1)] transition-transform duration-500 group-hover:scale-105">
                {stat.value}
              </h3>
              
              <div className="relative z-10 flex items-center gap-2 text-gray-500/80 group-hover:text-gray-400 transition-colors duration-300">
                <div className="text-base opacity-40 grayscale group-hover:grayscale-0 transition-all duration-300">{stat.icon}</div>
                <p className="text-[13px] md:text-[14px] font-medium tracking-wide">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}