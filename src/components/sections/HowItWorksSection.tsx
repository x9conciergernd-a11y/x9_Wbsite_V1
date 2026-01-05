const steps = [
  {
    number: "01",
    title: "Join X9",
    description: "Request access and complete a simple onboarding process tailored to your needs.",
  },
  {
    number: "02",
    title: "Assign a Request",
    description: "Send us a task via chat, call, or email. No request is too big or too small.",
  },
  {
    number: "03",
    title: "We Take Care of It",
    description: "Your dedicated assistant handles everything, keeping you informed every step of the way.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
            How It Works
          </h2>
          <p className="text-3xl md:text-4xl font-medium">
            Three simple steps to freedom
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-primary-foreground/20" />
                )}
                
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-semibold mx-auto mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                  <p className="text-primary-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
