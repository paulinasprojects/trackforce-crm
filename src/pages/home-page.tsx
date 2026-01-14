import FeatureSection from "../components/feature-section"
import GettingStarted from "../components/getting-started"
import Hero from "../components/hero"
import PricingSection from "../components/pricing-section"
import SocialProof from "../components/social-proof"

const HomePage = () => {
  return (
    <>
      <Hero />
      <SocialProof />
      <GettingStarted />
      <FeatureSection />
      <PricingSection />
    </>
  )
}

export default HomePage