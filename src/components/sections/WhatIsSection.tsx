import Silk from "@/components/ui/BgUi";

export function WhatIsSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Effect */}
      {/* <div className="absolute inset-0 z-0">
        <Silk
          speed={2}
          scale={1.2}
          color="#4a1d4e"
          noiseIntensity={1}
          rotation={Math.PI / 10}
        />
      </div> */}

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/30 to-black/60 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-20 py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#efdfbb] mb-4">
              What is X9 Concierge
            </h2>

            <p className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">
              X9 is a private lifestyle management and concierge service that acts as your virtual personal assistant.
            </p>

            <p className="mt-8 text-lg text-gray-200 leading-relaxed">
              From scheduling and travel to daily coordination, X9 Concierge manages
              the details so you don’t have to. One trusted point of contact.
              Complete discretion. Total peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
