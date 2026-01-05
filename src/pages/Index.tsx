import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhatIsSection } from "@/components/sections/WhatIsSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { WhyX9Section } from "@/components/sections/WhyX9Section";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhatIsSection />
      <ServicesOverview />
      <HowItWorksSection />
      <WhyX9Section />
      <CTASection />
    </Layout>
  );
};

export default Index;
