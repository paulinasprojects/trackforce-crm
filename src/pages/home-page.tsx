import CtaSection from "../components/home-page/cta-section"
import FeatureSection from "../components/home-page/feature-section"
import GettingStarted from "../components/home-page/getting-started"
import Hero from "../components/home-page/hero"
import IntegrationSection from "../components/home-page/integration-section"
import PricingSection from "../components/home-page/pricing-section"
import SocialProof from "../components/home-page/social-proof"
import WhatOurCustomersSay from "../components/home-page/what-our-customers-say"

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