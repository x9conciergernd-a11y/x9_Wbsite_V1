import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Mail, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";
import Silk from "@/components/ui/BgUi";

const glass =
  "backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_dyhaqzj",
        "template_w4s1ebf",
        formData,
        "rRR5JwEURWKrgkmEY"
      );

      toast({
        title: "Request received",
        description: "We'll be in touch within 24 hours.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Request Access | X9 Concierge</title>
        <meta
          name="description"
          content="Request access to X9 Concierge. Apply for premium lifestyle management and concierge services."
        />
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
                  Request <span className="gold-text">Access</span>
                </h1>
                <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
                  Tell us about yourself and your needs. We review every
                  application personally and respond within 24 hours.
                </p>
              </div>
            </div>
          </section>

          {/* Form Section */}
          <section className="pb-24 md:pb-32">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
                {/* Contact Info */}
                <div className={`lg:col-span-2 p-10 rounded-3xl ${glass}`}>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-accent mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-white/70 mb-8 leading-relaxed">
                    Have questions before applying? We're here to help.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-white/50">Email</p>
                        <p className="font-medium">time@x9concierge.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-white/50">Phone</p>
                        <p className="font-medium">+91 90363 54901</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
                      What happens next?
                    </h3>
                    <ul className="space-y-3 text-sm text-white/70">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                        We review your application within 24 hours
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                        If approved, we schedule an onboarding call
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                        You're matched with your dedicated assistant
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Form */}
                <div className="lg:col-span-3">
                  <form
                    onSubmit={handleSubmit}
                    className={`p-10 rounded-3xl ${glass}`}
                  >
                    <div className="space-y-6">
                      {[
                        ["name", "Full Name", "John Smith"],
                        ["email", "Email Address", "john@example.com"],
                        ["phone", "Phone Number", "+91 90000 00000"],
                      ].map(([name, label, placeholder]) => (
                        <div key={name}>
                          <Label className="text-sm text-white">
                            {label}
                          </Label>
                          <Input
                            name={name}
                            value={formData[name]}
                            onChange={handleChange}
                            className="mt-2 h-12 bg-white/5 border-white/10 text-white placeholder:text-white/40"
                            placeholder={placeholder}
                            required={name !== "phone"}
                          />
                        </div>
                      ))}

                      <div>
                        <Label className="text-sm text-white">
                          Tell us about your needs
                        </Label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="mt-2 min-h-[150px] bg-white/5 border-white/10 text-white placeholder:text-white/40"
                          placeholder="What tasks would you like help with?"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="gold"
                        size="xl"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Request Access"}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>

                      <p className="text-xs text-center text-white/50">
                        By submitting, you agree to our privacy policy.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}