"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { Calendar, Plane, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Silk from "@/components/ui/BgUi";

const services = [
  {
    icon: Calendar,
    title: "Personal Assistance",
    description: "From daily tasks to complex coordination, we manage it all with precision and care.",
  },
  {
    icon: Plane,
    title: "Travel & Scheduling",
    description: "Seamless travel planning, calendar management, and meeting coordination.",
  },
  {
    icon: Heart,
    title: "Lifestyle Management",
    description: "Personal errands, reservations, gift sourcing, and everything in between.",
  },
  {
    icon: Zap,
    title: "On-Demand Requests",
    description: "Whatever you need, whenever you need it. We're just a message away.",
  },
];

export function ServicesOverview() {
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
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/70 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-20 py-24 md:py-32">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#efdfbb] mb-4">
              Our Services
            </h2>
            <p className="text-3xl md:text-4xl font-medium text-white">
              Comprehensive support for your busy life
            </p>
          </div>

          {/* Services Grid - Animate from sides */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => {
              const isLeftSide = index % 2 === 0; // 0,2 from left | 1,3 from right
              const delay = index * 200; // Staggered timing
              
              return (
                <>
                  <style>{`
                    @keyframes slideInLeft${index} {
                      0% {
                        opacity: 0;
                        transform: translateX(-30px);
                      }
                      100% {
                        opacity: 1;
                        transform: translateX(0);
                      }
                    }
                    @keyframes slideInRight${index} {
                      0% {
                        opacity: 0;
                        transform: translateX(30px);
                      }
                      100% {
                        opacity: 1;
                        transform: translateX(0);
                      }
                    }
                  `}</style>
                  
                  <div
                    key={service.title}
                    className="group p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#efdfbb]/40 hover:shadow-2xl transition-all duration-300"
                    style={{
                      opacity: 0,
                      animation: isInView
                        ? `${isLeftSide ? 'slideInLeft' : 'slideInRight'}${index} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms forwards`
                        : 'none',
                      animationFillMode: 'forwards'
                    }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#efdfbb]/15 flex items-center justify-center mb-6 group-hover:bg-[#efdfbb]/25 transition-colors duration-300">
                      <service.icon className="w-6 h-6 text-[#efdfbb]" />
                    </div>

                    <h3 className="text-xl font-medium text-white mb-3">
                      {service.title}
                    </h3>

                    <p className="text-gray-200 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button asChild variant="premium-outline" size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
