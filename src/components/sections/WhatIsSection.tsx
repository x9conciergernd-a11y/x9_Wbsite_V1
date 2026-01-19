export function WhatIsSection() {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* SEO-supporting heading */}
          <h2 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
            What is X9 Concierge
          </h2>

          <p className="text-3xl md:text-4xl lg:text-5xl font-medium text-card-foreground leading-tight">
            X9 is a private lifestyle management and concierge service that acts as your virtual personal assistant.
          </p>

          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            From scheduling and travel to daily coordination, X9 Concierge manages
            the details so you don’t have to. One trusted point of contact.
            Complete discretion. Total peace of mind.
          </p>
        </div>
      </div>
    </section>
  );
}
