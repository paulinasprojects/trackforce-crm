import { pricingData } from "../../lib/data"
import PricingCard from "../home-page/pricing-card"
import EnterpriceCard from "./enterprise-card"

const PricingSection = () => {
  return (
    <div className="mt-[56px]">
      <div className="xl:mx-20 mx-6">
        <div className="flex lg:flex-row flex-col gap-6 text-white">
          {pricingData.slice(0, 3).map((data) => (
            <PricingCard
              key={data.id}
              name={data.name}
              description={data.description}
              duration={data.duration}
              features={data.features}
              isStarter={data.isStarter}
              mostPopular={data.mostPopular}
              price={data.price}
            />
          ))}
        </div>
        <div className="mt-6">
          {pricingData.slice(3, 4).map((data) => (
            <EnterpriceCard
              key={data.id}
              name={data.name}
              description={data.description}
              features={data.features}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PricingSection