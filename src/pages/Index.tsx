import { Helmet } from "react-helmet-async";

import { Layout } from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import { WhatIsSection } from "@/components/sections/WhatIsSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { WhyX9Section } from "@/components/sections/WhyX9Section";
import { CTASection } from "@/components/sections/CTASection";


const Index = () => {
  return (
    <>
      {/* ✅ SEO META TAGS FOR GOOGLE */}
      <Helmet>
        <title>X9 Concierge | Private Lifestyle Management Service</title>

        <meta
          name="description"
          content="X9 is a private lifestyle management and concierge service. From travel and scheduling to events and daily coordination, we handle everything with complete discretion."
        />

        <meta
          name="keywords"
          content="X9, X9 Concierge, private concierge service, luxury concierge, lifestyle management service"
        />

        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>

      <Layout>
        <HeroSection />
        <WhatIsSection />
        <ServicesOverview />
        <HowItWorksSection />
        <WhyX9Section />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
