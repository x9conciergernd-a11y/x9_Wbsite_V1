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
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#efdfbb] mb-4">
              Why X9
            </h2>
            <p className="text-3xl md:text-4xl font-medium text-white">
              The difference is in the details
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group text-center p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#efdfbb]/40 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-[#efdfbb]/15 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#efdfbb]/25 transition-colors duration-300">
                  <benefit.icon className="w-7 h-7 text-[#efdfbb]" />
                </div>

                <h3 className="text-lg font-medium text-white mb-2">
                  {benefit.title}
                </h3>

                <p className="text-gray-200 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
