"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import Silk from "@/components/ui/BgUi";

export function WhatIsSection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
    
    setIsInView(isVisible);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      {/* Background Effect */}
      {/* <div className="absolute inset-0 z-0">
        <Silk
          speed={2}
          scale={1.2}
          color="#4a1d4e"
          noiseIntensity={1}
          rotation={Math.PI / 10}
        />
      </div> */}

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/30 to-black/60 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-20 py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <style>{`
              @keyframes fadeInUpTitle {
                0% {
                  opacity: 0;
                  transform: translateY(30px);
                }
                100% {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              @keyframes fadeInUpText {
                0% {
                  opacity: 0;
                  transform: translateY(40px);
                }
                100% {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>

            <h2 
              className="text-sm font-semibold uppercase tracking-wider text-[#efdfbb] mb-4"
              style={{
                opacity: 0,
                animation: isInView 
                  ? 'fadeInUpTitle 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s both'
                  : 'none',
                animationFillMode: 'forwards'
              }}
            >
              What is X9 Concierge
            </h2>

            <p 
              className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight"
              style={{
                opacity: 0,
                animation: isInView 
                  ? 'fadeInUpText 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s both'
                  : 'none',
                animationFillMode: 'forwards'
              }}
            >
              X9 is a private lifestyle management and concierge service that acts as your virtual personal assistant.
            </p>

            <p 
              className="mt-8 text-lg text-gray-200 leading-relaxed"
              style={{
                opacity: 0,
                animation: isInView 
                  ? 'fadeInUpText 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s both'
                  : 'none',
                animationFillMode: 'forwards'
              }}
            >
              From scheduling and travel to daily coordination, X9 Concierge manages
              the details so you don't have to. One trusted point of contact.
              Complete discretion. Total peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
