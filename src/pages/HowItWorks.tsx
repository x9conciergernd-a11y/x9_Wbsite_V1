import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";



const steps = [
  {
    number: "01",
    title: "Request Access",
    description: "Complete a simple application form. We review every request personally to ensure X9 is the right fit for your needs.",
    details: [
      "Brief application process",
      "Dedicated Concierge manager",
      "Personal review within 24 hours",
    ],
  },
  {
    number: "02",
    title: "Get Matched with Your Assistant",
    description: "Once approved, you're paired with a dedicated personal assistant who learns your preferences, priorities, and communication style.",
    details: [
      "Personalized onboarding call",
      "Understand your needs and preferences",
      "Single point of contact established",
    ],
  },
  {
    number: "03",
    title: "Start Delegating",
    description: "Send requests via your preferred channel—chat, call, or email. Your assistant handles everything and keeps you informed.",
    details: [
      "Multiple communication channels",
      "Real-time updates on tasks",
      "No request too big or small",
    ],
  },
];

export default function HowItWorks() {
  return (
    <Layout>
            <Helmet>
        {/* Primary SEO */}
        <title>How X9 Works | Premium Concierge & Virtual Assistant Services</title>
        <meta
          name="description"
          content="Learn how X9 Concierge works. In three simple steps, get matched with a dedicated personal assistant and start delegating tasks effortlessly."
        />
        <meta
          name="keywords"
          content="how x9 works, concierge service process, virtual assistant onboarding, lifestyle concierge, personal assistant service"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.x9concierge.com/how-it-works"
        
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="How X9 Works – Concierge & Virtual Assistant Services"
        />
        <meta
          property="og:description"
          content="Discover how X9 Concierge connects you with a dedicated assistant in three simple steps. Request access, get matched, and start delegating."
        />
        <meta
          property="og:url"
          content="https://www.x9concierge.com/how-it-works"
        />
        <meta property="og:site_name" content="X9 Concierge" />
        <meta
          property="og:image"
          content="https://www.x9concierge.com/og/how-it-works.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="How X9 Works – Concierge & Virtual Assistant Services"
        />
        <meta
          name="twitter:description"
          content="Getting started with X9 Concierge is easy. Learn how our personal assistant service works in three simple steps."
        />
        <meta
          name="twitter:image"
          content="https://www.x9concierge.com/og/how-it-works.jpg"
        />
      </Helmet>


      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
              How <span className="gold-text">X9</span> Works
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Getting started is simple. In three easy steps, you'll have a dedicated assistant ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-16 first:pt-0 last:pb-0"
              >
                {/* Vertical line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-[4.5rem] top-28 bottom-0 w-px bg-border" />
                )}

                {/* Number */}
                <div className="lg:col-span-2">
                  <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-semibold">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-10">
                  <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-4">
                    {step.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-3 text-foreground">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
<div className="max-w-2xl mx-auto text-center mt-20 p-12 rounded-3xl bg-primary text-primary-foreground">
  <h3 className="text-2xl md:text-3xl font-medium mb-4">
    Ready to get started?
  </h3>
  <p className="text-primary-foreground/70 mb-8">
    Apply for membership and experience the freedom of delegation.
  </p>
  <a 
    href="https://wa.me/919633540152?text=Hi%2C%20I%27d%20like%20to%20apply%20for%20X9%20membership" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Button variant="gold" size="xl" className="group">
      Apply membership
      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
    </Button>
  </a>
</div>

        </div>
      </section>
    </Layout>
  );
}
