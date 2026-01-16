import CtaSection from "../components/cta-section"
import FeatureSection from "../components/feature-section"
import GettingStarted from "../components/getting-started"
import Hero from "../components/hero"
import IntegrationSection from "../components/integration-section"
import PricingSection from "../components/pricing-section"
import SocialProof from "../components/social-proof"
import WhatOurCustomersSay from "../components/what-our-customers-say"

const HomePage = () => {
  return (
    <>
      <Hero />
      <SocialProof />
      <GettingStarted />
      <FeatureSection />
      <PricingSection />
      <WhatOurCustomersSay />
      <IntegrationSection />
      <CtaSection />
    </>
  )
}

export default HomePage