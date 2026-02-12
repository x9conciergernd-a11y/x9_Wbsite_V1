"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { Clock, Shield, Users, MessageCircle } from "lucide-react";
import Silk from "@/components/ui/BgUi";

const benefits = [
  {
    icon: Clock,
    title: "Saves Time",
    description: "Reclaim hours every week by delegating tasks to your personal assistant.",
  },
  {
    icon: Shield,
    title: "Reliable & Discreet",
    description: "Complete confidentiality and dependable service you can count on.",
  },
  {
    icon: Users,
    title: "Human-Led Assistance",
    description: "Real people who understand nuance, not bots following scripts.",
  },
  {
    icon: MessageCircle,
    title: "One Point of Contact",
    description: "A dedicated assistant who knows you and your preferences.",
  },
];

export function WhyX9Section() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
    
    setIsInView(isVisible);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden [perspective:1200px]">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/70 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-20 py-24 md:py-32">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#efdfbb] mb-4">
              Why X9
            </h2>
            <p className="text-3xl md:text-4xl font-medium text-white">
              The difference is in the details
            </p>
          </div>

          {/* Benefits Grid - 3D Flip on Vertical Axis */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => {
              const delay = index * 150; // Faster stagger for flip effect
              
              return (
                <>
                  <style>{`
                    @keyframes flip3D${index} {
                      0% {
                        opacity: 0;
                        transform: rotateY(-85deg) scale(0.9);
                      }
                      50% {
                        opacity: 1;
                        transform: rotateY(10deg) scale(1.05);
                      }
                      100% {
                        opacity: 1;
                        transform: rotateY(0deg) scale(1);
                      }
                    }
                  `}</style>
                  
                  <div
                    key={benefit.title}
                    className="group text-center p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#efdfbb]/40 hover:shadow-2xl transition-all duration-300 preserve-3d origin-center"
                    style={{
                      opacity: 0,
                      transformStyle: 'preserve-3d',
                      animation: isInView
                        ? `flip3D${index} 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms both`
                        : 'none',
                      animationFillMode: 'forwards'
                    }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-[#efdfbb]/15 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#efdfbb]/25 transition-colors duration-300 origin-center">
                      <benefit.icon className="w-7 h-7 text-[#efdfbb]" />
                    </div>

                    <h3 className="text-lg font-medium text-white mb-2">
                      {benefit.title}
                    </h3>

                    <p className="text-gray-200 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
