import { Clock, Shield, Users, MessageCircle } from "lucide-react";

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
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
            Why X9
          </h2>
          <p className="text-3xl md:text-4xl font-medium text-foreground">
            The difference is in the details
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <benefit.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
