import { Link } from "react-router-dom";
import { Calendar, Plane, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
            Our Services
          </h2>
          <p className="text-3xl md:text-4xl font-medium text-foreground">
            Comprehensive support for your busy life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-md transition-all duration-base"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-base">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-medium text-card-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button asChild variant="premium-outline" size="lg">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
