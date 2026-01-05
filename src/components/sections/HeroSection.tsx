import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Subtle background gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, hsl(var(--accent) / 0.15), transparent 60%)"
        }}
      />
      
      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-8 animate-fade-down opacity-0 stagger-1">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Private Lifestyle Management
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight tracking-tight animate-fade-up opacity-0 stagger-2">
            Your Personal Assistant for{" "}
            <span className="gold-text">Everything That Matters</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up opacity-0 stagger-3">
            X9 helps busy people delegate everyday tasks so they can focus on what truly matters.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 stagger-4">
            {/* WhatsApp Request Access Button */}
            <a 
              href="https://wa.me/919633540152?text=Hi%2C%20I%20want%20to%20request%20access%20to%20X9" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="premium" size="xl" className="group">
                Request Access
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </a>
            
            <Button asChild variant="premium-outline" size="xl">
              <Link to="/how-it-works">
                How It Works
              </Link>
            </Button>
          </div>

          {/* Trust indicator */}
          <p className="mt-16 text-sm text-muted-foreground animate-fade-up opacity-0 stagger-5">
            Trusted by executives, founders, and high-value individuals worldwide
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
