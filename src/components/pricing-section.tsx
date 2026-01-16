import { pricingData } from "../lib/data"
import PricingCard from "./pricing-card"

const PricingSection = () => {
  return (
    <section className="md:my-[100px] my-[40px] xl:mx-[80px] md:mx-[40px] mx-[24px] ">
      <div className="text-center">
        <h2 className="lg:text-[48px] text-[32px] font-medium text-center  leading-[120%] text-white">Flexible Plans for Every Business</h2>
        <p className="text-[#c2c2c2] text-lg mt-6">TrackForce offers pricing plans tailored to fit your needs. Choose the plan that works best for you and <br /> start growing your customer relationships today!</p>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-2 mt-[56px] gap-6">
        {pricingData.map((data) => (
          <PricingCard
            name={data.name}
            mostPopular={data.mostPopular}
            duration={data.duration}
            description={data.description}
            price={data.price}
            features={data.features}
            key={data.id}
          />
        ))}
      </div>
    </section>
  )
}

export default PricingSection