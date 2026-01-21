import CtaSection from "../components/home-page/cta-section"
import FaqSection from "../components/pricing-page/faq-section"
import PricingHeading from "../components/pricing-page/pricing-heading"
import PricingSection from "../components/pricing-page/pricing-section"

const PricingPage = () => {
  return (
    <div>
      <PricingHeading />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </div>
  )
}

export default PricingPage