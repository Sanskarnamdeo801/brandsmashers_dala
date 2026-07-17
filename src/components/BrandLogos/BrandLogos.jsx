// File: src/components/BrandLogos/BrandLogos.jsx
import React from 'react';

const companyLogos = [
  { name: "Panasonic", url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Panasonic_logo.svg" },
  { name: "Airtel", url: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Bharti_Airtel_Logo.svg" },
  { name: "Dell", url: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg" },
  { name: "EY", url: "https://upload.wikimedia.org/wikipedia/commons/3/34/EY_logo_2019.svg" },
  { name: "Godrej", url: "https://upload.wikimedia.org/wikipedia/commons/9/97/Godrej_Logo.svg" },
  { name: "Infosys", url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
  { name: "Gartner", url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Gartner_logo.svg" },
  { name: "DXC", url: "https://upload.wikimedia.org/wikipedia/commons/8/88/DXC_Logo_2021_Purple_Black.png" },
  { name: "BlackRock", url: "https://upload.wikimedia.org/wikipedia/commons/8/85/BlackRock_wordmark.svg" },
];

export function BrandLogos() {
  return (
    <section className="relative z-20 w-full pt-10 pb-8 bg-transparent flex flex-col items-center overflow-hidden">
      
      <style>
        {`
          /* 1. Left aur Right se smooth fade effect */
          .mask-fade {
            mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          }
          
          /* 2. New Marquee Logic - Ye kabhi nahi tootega */
          .marquee-content {
            display: flex;
            flex-shrink: 0;
            min-width: max-content; /* Ensure karta hai ki logos sikud na jayein */
            /* gap-12 = 3rem. Loop ko perfect rakhne ke liye -100% ke sath gap minus karna zaroori hai */
            animation: scroll 30s linear infinite;
          }

          .marquee-container:hover .marquee-content {
            animation-play-state: paused;
          }

          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(calc(-100% - 3rem)); } /* -3rem gap-12 ke barabar hai */
          }
          
          /* 3. Hover karne par Pure White se Exact Color reveal */
          .logo-hover-effect {
            filter: brightness(0) invert(1) opacity(0.6);
            transition: all 0.4s ease;
          }
          .logo-hover-effect:hover {
            filter: brightness(1) invert(0) opacity(1) drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.2));
            transform: scale(1.1);
          }
        `}
      </style>

      {/* Title */}
      <p className="text-gray-400 uppercase tracking-[0.3em] text-[11px] md:text-xs font-bold mb-10 text-center">
        Trusted by industry leaders
      </p>

      {/* 
        Marquee Wrapper
        gap-12 (3rem) dono blocks ke beech lagaya hai
      */}
      <div className="mask-fade w-full max-w-[1200px] mx-auto flex overflow-hidden marquee-container gap-12 px-4">
        
        {/* BLOCK 1: Asli Logos ki Line */}
        <div className="marquee-content gap-12 items-center">
          {companyLogos.map((logo, index) => (
            <div key={`orig-${index}`} className="flex items-center justify-center w-[130px] md:w-[160px] h-[50px] flex-shrink-0 cursor-pointer">
              <img 
                src={logo.url} 
                alt={`${logo.name} logo`}
                className="max-h-8 md:max-h-11 w-full object-contain logo-hover-effect"
              />
            </div>
          ))}
        </div>

        {/* BLOCK 2: Duplicate Logos ki Line (Loop ko seamless banane ke liye) */}
        <div className="marquee-content gap-12 items-center" aria-hidden="true">
          {companyLogos.map((logo, index) => (
            <div key={`dup-${index}`} className="flex items-center justify-center w-[130px] md:w-[160px] h-[50px] flex-shrink-0 cursor-pointer">
              <img 
                src={logo.url} 
                alt={`${logo.name} logo`}
                className="max-h-8 md:max-h-11 w-full object-contain logo-hover-effect"
              />
            </div>
          ))}
        </div>

      </div>
      
    </section>
  );
}