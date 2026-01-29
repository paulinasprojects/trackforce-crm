import { pricingData } from "../../lib/data"
import PricingCard from "./pricing-card"

const PricingSection = () => {
  return (
    <section className="md:my-[100px] my-10 xl:mx-20 md:mx-10 mx-6">
      <div className="text-center">
        <h2 className="lg:text-5xl text-headingMedium font-medium text-center leading-lg text-white">Flexible Plans for Every Business</h2>
        <p className="text-lightGray text-lg mt-6">
          TrackForce offers pricing plans tailored to fit your needs. Choose the plan that works best for you and <br /> start growing your customer relationships today!
        </p>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 mt-14 gap-6">
        {pricingData.map((data) => (
          <PricingCard
            name={data.name}
            mostPopular={data.mostPopular}
            duration={data.duration}
            description={data.description}
            price={data.price}
            isStarter={data.isStarter}
            features={data.features}
            key={data.id}
          />
        ))}
      </div>
    </section>
  )
}

export default PricingSection