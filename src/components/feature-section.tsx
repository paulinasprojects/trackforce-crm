import { featuresDataOne, featuresDataTwo } from "../lib/data"
import FeatureCard from "./feature-card"

const FeatureSection = () => {
  return (
    <section className="md:my-[100px] my-[40px] xl:mx-[80px] md:mx-[40px] mx-[24px]">
      <div className="grid md:grid-cols-2">
        <div>
          <p className="text-white lg:text-[48px] text-[32px] font-medium leading-[120%]  text-center md:text-start">Unlock Even More Powerful Features</p>
        </div>
        <div>
          <p className="text-sm md:text-[16px] lg:text-lg mt-4 md:mt-0 text-center md:text-start text-[#c2c2c2]">Explore additional tools designed to enhance your customer management, streamline workflows, and drive business growth.</p>
          <button className="mt-[24px] button-gradient px-3 py-2 rounded-md w-full md:w-fit text-white">View All Features</button>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-6 mt-[57px]">
        {featuresDataOne.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            imageSrc={feature.imageSrc}
          />
        ))}
      </div>
      <div className="flex lg:flex-row flex-col gap-6 mt-[24px]">
        {featuresDataTwo.map((featuretwo) => (
          <FeatureCard key={featuretwo.id}
            title={featuretwo.title}
            description={featuretwo.description}
            imageSrc={featuretwo.imageSrc}
          />
        ))}
      </div>
    </section>
  )
}

export default FeatureSection