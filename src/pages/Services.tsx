import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Plane, Heart, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Virtual Personal Assistant",
    description: "Your dedicated assistant handles emails, calls, research, and administrative tasks with precision and care. They become an extension of you, understanding your preferences and priorities.",
    features: [
      "Email and inbox management",
      "Research and information gathering",
      "Appointment scheduling",
      "Administrative support",
    ],
  },
  {
    icon: Calendar,
    title: "Calendar & Meeting Management",
    description: "Never miss an important meeting or double-book again. We manage your schedule, send reminders, and coordinate with all parties to ensure seamless time management.",
    features: [
      "Schedule optimization",
      "Meeting coordination",
      "Reminder systems",
      "Time zone management",
    ],
  },
  {
    icon: Plane,
    title: "Travel Planning & Coordination",
    description: "From booking flights to arranging ground transportation and accommodations, we handle every detail of your travel. Arrive relaxed, not stressed.",
    features: [
      "Flight and hotel bookings",
      "Itinerary planning",
      "Ground transportation",
      "Travel documentation",
    ],
  },
  {
    icon: Heart,
    title: "Lifestyle & Daily Task Support",
    description: "The everyday tasks that consume your time—we handle them. Errands, reservations, gift sourcing, home management, and personal coordination.",
    features: [
      "Restaurant reservations",
      "Gift sourcing and delivery",
      "Vendor coordination",
      "Personal errands",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
              Services tailored to your <span className="gold-text">lifestyle</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              From daily tasks to complex coordination, X9 provides comprehensive support designed around your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12 rounded-3xl bg-card border border-border"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-medium text-card-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="lg:pl-8 lg:border-l border-border">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
                    What's included
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-card-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="max-w-2xl mx-auto text-center mt-20">
            <p className="text-lg text-muted-foreground mb-8">
              Ready to delegate and reclaim your time?
            </p>
            <Button asChild variant="premium" size="xl">
              <Link to="/contact">
                Request Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
