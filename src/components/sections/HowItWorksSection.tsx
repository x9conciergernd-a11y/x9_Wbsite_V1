"use client"; // Add this if using Next.js App Router
import { useEffect, useState, useRef, useCallback } from "react";
import Silk from "@/components/ui/BgUi";

const steps = [
  {
    number: "01",
    title: "Join X9",
    description: "Request access and complete a simple onboarding process tailored to your needs.",
  },
  {
    number: "02",
    title: "Assign a Request",
    description: "Send us a task via chat, call, or email. No request is too big or too small.",
  },
  {
    number: "03",
    title: "We Take Care of It",
    description: "Your dedicated assistant handles everything, keeping you informed every step of the way.",
  },
];

export function HowItWorksSection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
    
    setIsInView(isVisible);
  }, []);

  useEffect(() => {
    handleScroll(); // Check initial position
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      {/* Animated Background */}
      {/* <div className="absolute inset-0 z-0">
        <Silk
          speed={2}
          scale={1.15}
          color="#4a1d4e"
          noiseIntensity={1}
          rotation={Math.PI / 12}
        />
      </div> */}

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/70 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-20 py-24 md:py-32">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#efdfbb] mb-4">
              How It Works
            </h2>
            <p className="text-3xl md:text-4xl font-medium text-white">
              Three simple steps to freedom
            </p>
          </div>

          {/* Steps */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {steps.map((step, index) => {
                const delay = index * 400; // 0ms, 400ms, 800ms
                
                return (
                  <>
                    <style>{`
                      @keyframes popStep${index} {
                        0% {
                          opacity: 0;
                          transform: scale(0.3) translateY(3rem);
                        }
                        60% {
                          opacity: 1;
                          transform: scale(1.1);
                        }
                        100% {
                          opacity: 1;
                          transform: scale(1) translateY(0);
                        }
                      }
                    `}</style>
                    
                    <div 
                      key={step.number} 
                      className="relative"
                      style={{
                        opacity: 0,
                        animation: isInView 
                          ? `popStep${index} 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms forwards`
                          : 'none',
                        animationFillMode: 'forwards'
                      }}
                    >
                      {/* Connector line */}
                      {index < steps.length - 1 && (
                        <div 
                          className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-white/20 origin-left"
                          style={{
                            opacity: 0,
                            animation: isInView 
                              ? `popStep${index} 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay + 600}ms forwards`
                              : 'none',
                            transformOrigin: 'left'
                          }}
                        />
                      )}

                      <div className="text-center relative z-10 group">
                        <div className="w-16 h-16 rounded-full bg-[#efdfbb] text-[#270e29] flex items-center justify-center text-xl font-semibold mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {step.number}
                        </div>
                        <h3 className="text-xl font-medium text-white mb-3">{step.title}</h3>
                        <p className="text-gray-200 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
