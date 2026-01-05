import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-card-foreground leading-tight">
            Ready to reclaim your time?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Join X9 and experience the freedom of having someone handle the details.
          </p>
          <div className="mt-10">
            {/* WhatsApp Apply for Membership Button */}
            <a 
              href="https://wa.me/919633540152?text=Hi%2C%20I%20want%20to%20apply%20for%20X9%20membership" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="gold" size="xl" className="group">
                Apply for Membership
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
