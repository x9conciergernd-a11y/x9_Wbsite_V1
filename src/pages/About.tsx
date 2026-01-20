import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";


const values = [
  {
    title: "Time Freedom",
    description: "We believe your time is your most valuable asset. Every service we offer is designed to give you more of it.",
  },
  {
    title: "Absolute Trust",
    description: "Discretion is not just a policy—it's our foundation. Your privacy and confidentiality are paramount.",
  },
  {
    title: "Thoughtful Simplicity",
    description: "Complex problems deserve elegant solutions. We make the difficult feel effortless.",
  },
  {
    title: "Human Connection",
    description: "Real people, real understanding. We believe the best service comes from genuine human care.",
  },
];

export default function About() {
  return (
    <Layout>

      <Helmet>
        {/* Primary SEO */}
        <title>About X9 Concierge | Private Lifestyle Management Service</title>
        <meta
          name="description"
          content="Learn about X9 Concierge — a private lifestyle management and virtual assistant service built on trust, discretion, and time freedom."
        />
        <meta
          name="keywords"
          content="about x9 concierge, lifestyle concierge service, private concierge, personal assistant service, virtual assistant company"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.x9concierge.com/about"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="About X9 Concierge – Private Lifestyle Management"
        />
        <meta
          property="og:description"
          content="Discover the story, mission, and values behind X9 Concierge — a premium lifestyle management service designed to give you time freedom."
        />
        <meta
          property="og:url"
          content="https://www.x9concierge.com/about"
        />
        <meta property="og:site_name" content="X9 Concierge" />
        <meta
          property="og:image"
          content="https://www.x9concierge.com/og/about.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About X9 Concierge – Private Lifestyle Management"
        />
        <meta
          name="twitter:description"
          content="X9 Concierge helps busy professionals reclaim their time through trusted, human-driven lifestyle management."
        />
        <meta
          name="twitter:image"
          content="https://www.x9concierge.com/og/about.jpg"
        />
      </Helmet>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
              About <span className="gold-text">X9</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              A private lifestyle management service built on trust, simplicity, and the belief that everyone deserves time freedom.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="p-12 md:p-16 rounded-3xl bg-card border border-border">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-accent mb-6">
                Our Mission
              </h2>
              <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-card-foreground leading-relaxed">
                To give busy people the freedom to focus on what truly matters by handling everything else with care, discretion, and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="pb-24 md:pb-32 bg-card">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-card-foreground/80 leading-relaxed">
              <p>
                X9 was born from a simple observation: the most successful people are often the busiest, and the busiest people often have the least time for the things that matter most.
              </p>
              <p>
                We set out to create something different—a service that combines the personal touch of a dedicated assistant with the reliability of a trusted partner. No apps to navigate, no bots to argue with. Just real people who understand your needs and make things happen.
              </p>
              <p>
                Today, X9 serves executives, founders, and high-value individuals who understand that time is their most precious resource. We're proud to help them reclaim it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent mb-6 text-center">
              Our Values
            </h2>
            <h3 className="text-3xl md:text-4xl font-medium text-foreground text-center mb-16">
              What we believe in
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value) => (
                <div key={value.title} className="p-8 rounded-2xl bg-card border border-border">
                  <h4 className="text-xl font-medium text-card-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center p-12 rounded-3xl bg-primary text-primary-foreground">
            <h3 className="text-2xl md:text-3xl font-medium mb-4">
              Experience X9 for yourself
            </h3>
            <p className="text-primary-foreground/70 mb-8">
              Join a community of professionals who value their time.
            </p>
            <Button asChild variant="gold" size="xl">
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
