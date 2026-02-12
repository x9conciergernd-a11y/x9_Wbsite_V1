import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Plane, Heart, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Silk from "@/components/ui/BgUi";

const services = [
  {
    icon: Calendar,
    title: "Virtual Personal Assistant",
    description:
      "Your dedicated assistant handles emails, calls, research, and administrative tasks with precision and care. They become an extension of you, understanding your preferences and priorities.",
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
    description:
      "Never miss an important meeting or double-book again. We manage your schedule, send reminders, and coordinate with all parties to ensure seamless time management.",
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
    description:
      "From booking flights to arranging ground transportation and accommodations, we handle every detail of your travel. Arrive relaxed, not stressed.",
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
    description:
      "The everyday tasks that consume your time—we handle them. Errands, reservations, gift sourcing, home management, and personal coordination.",
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
    <>
      {/* Silk Background */}
      <div className="fixed inset-0 -z-10">
        <Silk
          speed={2.5}
          scale={1.3}
          color="#4a1d4e"
          noiseIntensity={1.2}
          rotation={Math.PI / 8}
        />
      </div>

      <Layout>
        <Helmet>
          <title>
            Services | X9 Concierge – Virtual Assistant & Lifestyle Management
          </title>
          <meta
            name="description"
            content="Explore X9 Concierge’s premium virtual assistant services including calendar management, travel planning, lifestyle support, and personal assistance."
          />
          <meta
            name="keywords"
            content="virtual assistant services, lifestyle concierge, personal assistant, calendar management, travel planning"
          />
          <link
            rel="canonical"
            href="https://www.x9concierge.com/services"
          />
        </Helmet>

        {/* Hero */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                Services tailored to your{" "}
                <span className="gold-text">lifestyle</span>
              </h1>
              <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
                From daily tasks to complex coordination, X9 provides
                comprehensive support designed around your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="pb-24 md:pb-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-16">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12 rounded-3xl
                  bg-white/10 backdrop-blur-xl border border-white/15 shadow-xl"
                >
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                      <service.icon className="w-7 h-7 text-gold-400" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-white/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="lg:pl-8 lg:border-l border-white/15">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4">
                      What's included
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-white/80"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="max-w-2xl mx-auto text-center mt-20 p-12 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/15">
              <p className="text-lg text-white/70 mb-8">
                Ready to delegate and reclaim your time?
              </p>
              <a
                href="https://wa.me/919633540152?text=Hi%2C%20I%27m%20ready%20to%20request%20access%20to%20X9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="gold" size="xl" className="group">
                  Request Access
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}