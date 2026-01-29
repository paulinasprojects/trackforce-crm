import CustomerCardsSection from "../components/customer/customer-cards-section"
import CustomerHeading from "../components/customer/customer-heading"
import CtaSection from "../components/home-page/cta-section"
import WhatOurCustomersSay from "../components/home-page/what-our-customers-say"

const CustomerPage = () => {
  return (
    <>
      <CustomerHeading />
      <CustomerCardsSection />
      <WhatOurCustomersSay />
      <CtaSection />
    </>
  )
}

export default CustomerPage