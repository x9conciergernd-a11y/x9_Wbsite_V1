import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Silk from "@/components/ui/BgUi";

const values = [
  {
    title: "Time Freedom",
    description:
      "We believe your time is your most valuable asset. Every service we offer is designed to give you more of it.",
  },
  {
    title: "Absolute Trust",
    description:
      "Discretion is not just a policy—it's our foundation. Your privacy and confidentiality are paramount.",
  },
  {
    title: "Thoughtful Simplicity",
    description:
      "Complex problems deserve elegant solutions. We make the difficult feel effortless.",
  },
  {
    title: "Human Connection",
    description:
      "Real people, real understanding. We believe the best service comes from genuine human care.",
  },
];

const glass =
  "backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl";

export default function About() {
  return (
    <Layout>
      <Helmet>
        <title>About X9 Concierge | Private Lifestyle Management Service</title>
        <meta
          name="description"
          content="Learn about X9 Concierge — a private lifestyle management and virtual assistant service built on trust, discretion, and time freedom."
        />
        <link rel="canonical" href="https://www.x9concierge.com/about" />
      </Helmet>

      <div className="relative overflow-hidden bg-[#0a0610]">
        {/* Silk Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Silk
            speed={2.5}
            scale={1.3}
            color="#4a1d4e"
            noiseIntensity={1.2}
            rotation={Math.PI / 8}
          />
        </div>

        <div className="relative z-10 text-white">
          {/* Hero */}
          <section className="py-24 md:py-32">
            <div className="container mx-auto px-6">
              <div
                className={`max-w-3xl mx-auto text-center p-12 rounded-3xl ${glass}`}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                  About <span className="gold-text">X9</span>
                </h1>
                <p className="mt-6 text-lg text-white/70">
                  A private lifestyle management service built on trust,
                  simplicity, and the belief that everyone deserves time
                  freedom.
                </p>
              </div>
            </div>
          </section>

          {/* Mission */}
          <section className="pb-24 md:pb-32">
            <div className="container mx-auto px-6">
              <div
                className={`max-w-4xl mx-auto p-12 md:p-16 rounded-3xl ${glass}`}
              >
                <h2 className="text-sm font-semibold uppercase tracking-wider text-accent mb-6">
                  Our Mission
                </h2>
                <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-white">
                  To give busy people the freedom to focus on what truly matters
                  by handling everything else with care, discretion, and
                  excellence.
                </p>
              </div>
            </div>
          </section>

          {/* Story */}
          <section className="pb-24 md:pb-32">
            <div className="container mx-auto px-6">
              <div
                className={`max-w-3xl mx-auto p-12 md:p-14 rounded-3xl ${glass}`}
              >
                <h2 className="text-sm font-semibold uppercase tracking-wider text-accent mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-lg leading-relaxed text-white/70">
                  <p>
                    X9 was born from a simple observation: the most successful
                    people are often the busiest, and the busiest people often
                    have the least time for the things that matter most.
                  </p>
                  <p>
                    We set out to create something different—a service that
                    combines the personal touch of a dedicated assistant with
                    the reliability of a trusted partner.
                  </p>
                  <p>
                    Today, X9 serves executives, founders, and high-value
                    individuals who understand that time is their most precious
                    resource.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-24 md:py-32">
            <div className="container mx-auto px-6">
              <div
                className={`max-w-4xl mx-auto p-12 rounded-3xl ${glass}`}
              >
                <h2 className="text-sm font-semibold uppercase tracking-wider text-accent mb-6 text-center">
                  Our Values
                </h2>
                <h3 className="text-3xl md:text-4xl font-medium text-center mb-16">
                  What we believe in
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {values.map((value) => (
                    <div
                      key={value.title}
                      className="p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10"
                    >
                      <h4 className="text-xl font-medium mb-3">
                        {value.title}
                      </h4>
                      <p className="text-white/70 leading-relaxed">
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
              <div
                className={`max-w-2xl mx-auto text-center p-12 rounded-3xl ${glass}`}
              >
                <h3 className="text-2xl md:text-3xl font-medium mb-4">
                  Experience X9 for yourself
                </h3>
                <p className="text-white/70 mb-8">
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
        </div>
      </div>
    </Layout>
  );
}