import { featuresDataOne, featuresDataTwo } from "../../lib/data"
import GradientButton from "../common/gradient-button"
import FeatureCard from "./feature-card"

const FeatureSection = () => {
  return (
    <section className="md:my-[100px] my-10 xl:mx-20 md:mx-10 mx-6">
      <div className="grid md:grid-cols-2">
        <div>
          <p className="text-white lg:text-5xl text-headingMedium font-medium leading-lg text-center md:text-start">
            Unlock Even More Powerful Features
          </p>
        </div>
        <div>
          <p className="text-sm md:text-md lg:text-lg mt-4 md:mt-0 text-center md:text-start text-lightGray">
            Explore additional tools designed to enhance your customer management, streamline workflows, and drive business growth.
          </p>
          <GradientButton
            className="mt-6 w-full md:w-fit"
          >
            View All Features
          </GradientButton>
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
      <div className="flex lg:flex-row flex-col gap-6 mt-6">
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