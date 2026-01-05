import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Mail, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      "service_dyhaqzj",   // SERVICE ID
      "template_w4s1ebf",     // TEMPLATE ID
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      "rRR5JwEURWKrgkmEY"      // PUBLIC KEY
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
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
              Request <span className="gold-text">Access</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell us about yourself and your needs. We review every application personally and respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-accent mb-6">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Have questions before applying? We're here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">time@x9concierge.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-medium">+91 90363 54901</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
                  What happens next?
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    We review your application within 24 hours
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    If approved, we schedule an onboarding call
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    You're matched with your dedicated assistant
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-3xl bg-card border border-border">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-card-foreground">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 h-12 bg-background border-border"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-card-foreground">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 h-12 bg-background border-border"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-card-foreground">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2 h-12 bg-background border-border"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-card-foreground">
                      Tell us about your needs
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 min-h-[150px] bg-background border-border resize-none"
                      placeholder="What tasks would you like help with? What does a typical week look like for you?"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="premium"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Request Access
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting, you agree to our privacy policy. We never share your information.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
