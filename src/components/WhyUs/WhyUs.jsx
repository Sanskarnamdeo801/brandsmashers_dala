import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlurText from '../Animations/BlurText';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: 1,
    title: "Fast Scaling",
    description: "Deploy engineering teams in days, not months."
  },
  {
    id: 2,
    title: "AI Expertise",
    description: "Human-in-the-loop evaluation and AI-ready engineering."
  },
  {
    id: 3,
    title: "End-to-End Delivery",
    description: "From strategy to deployment."
  },
  {
    id: 4,
    title: "Long-Term Partnership",
    description: "We're invested in outcomes, not just deliverables."
  }
];

export function WhyUs() {
  const sectionRef = useRef(null);
  const pinContainerRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current.children,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: pinContainerRef.current,
            start: 'top 60%'
          }
        }
      );

      const totalScrollWidth = cardsRef.current.scrollWidth;

      gsap.to(cardsRef.current, {
        x: () => -(totalScrollWidth - window.innerWidth + 150),
        ease: "none",
        scrollTrigger: {
          trigger: pinContainerRef.current,
          start: "top top",
          end: () => `+=${totalScrollWidth}`,
          pin: true,
          scrub: 1,
          pinSpacing: true,
          invalidateOnRefresh: true,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative w-full bg-transparent z-10">
      <div
        ref={pinContainerRef}
        className="w-full h-screen flex flex-col justify-center overflow-hidden pt-10"
      >
        <div className="w-full flex flex-col items-center text-center px-6 md:px-12 lg:px-20 mb-16 lg:mb-20">
          <span className="inline-block mb-4 text-[13px] font-bold tracking-[0.2em] text-[#FF2E2B] uppercase">
            What makes us different
          </span>

          <BlurText
            text="Elite Engineering. Unwavering Accountability."
            delay={100}
            animateBy="words"
            direction="top"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] max-w-4xl"
          />
        </div>

        <div className="w-full mt-8 md:mt-10 lg:mt-14">
          <div
            ref={cardsRef}
            className="flex flex-nowrap items-center gap-8 lg:gap-12 w-max pl-6 md:pl-12 lg:pl-20 pr-[10vw] pb-20"
          >
            {features.map((feature, index) => (
              <div key={feature.id} className="shrink-0">
                <div
                  className={`group relative flex flex-col justify-center items-center text-center transition-transform duration-500 hover:scale-[1.03] w-[300px] sm:w-[350px] lg:w-[380px] ${
                    index % 2 === 0
                      ? 'translate-y-8 lg:translate-y-16'
                      : '-translate-y-8 lg:-translate-y-16'
                  }`}
                >
                  <div className="absolute inset-0 border-[16px] border-[#111] group-hover:border-[#FF2E2B]/50 group-hover:shadow-[0_0_50px_rgba(255,46,43,0.2)] rounded-[120px] transition-all duration-700 ease-out z-0 backdrop-blur-sm bg-black/20"></div>

                  <div className="relative z-10 px-6 py-20 md:py-24 flex flex-col items-center">
                    <div className="mb-6 w-16 h-16 flex items-center justify-center rounded-2xl bg-[#FF2E2B]/10 border border-[#FF2E2B]/20 text-[#FF2E2B] font-mono text-2xl font-bold group-hover:scale-110 transition-transform duration-500">
                      {feature.icon}
                    </div>

                    <h3 className="mb-4 text-xl md:text-2xl font-bold text-white tracking-tight max-w-[200px]">
                      {feature.title}
                    </h3>

                    <p className="text-[14px] md:text-[15px] leading-relaxed text-gray-400 group-hover:text-gray-200 transition-colors duration-300 max-w-[240px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}