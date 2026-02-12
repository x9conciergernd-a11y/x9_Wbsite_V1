import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Silk from "@/components/ui/BgUi";

export function CTASection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <Silk
          speed={2}
          scale={1.15}
          color="#4a1d4e"
          noiseIntensity={1}
          rotation={Math.PI / 12}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/70 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-20 py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center bg-white/5 backdrop-blur-xl rounded-3xl p-10 md:p-14 border border-white/10 shadow-2xl">
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">
              Ready to reclaim your time?
            </h2>

            <p className="mt-6 text-lg text-gray-200">
              Join X9 and experience the freedom of having someone handle the details.
            </p>

            <div className="mt-10">
              <a
                href="https://wa.me/919633540152?text=Hi%2C%20I%20want%20to%20apply%20for%20X9%20membership"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button variant="gold" size="xl" className="group">
                  Apply for Membership
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}