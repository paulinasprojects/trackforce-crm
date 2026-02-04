import { featuresDataOne } from "../../lib/data";
import GradientButton from "../common/gradient-button";
import FeatureCard from "../home-page/feature-card";

const FeaturedProductSection = () => {
  return (
    <section className='md:my-[100px] my-10 xl:mx-20 md:mx-10 mx-6'>
      <div className="grid md:grid-cols-2">
        <div>
          <p className="text-white lg:text-5xl text-headingMedium font-medium leading-lg text-center md:text-start">
            Empower Your Team with Seamless Collaboration
          </p>
        </div>
        <div>
          <p className="text-sm md:text-md lg:text-lg mt-4 md:mt-0 text-center md:text-start text-lightGray">
            Unlock the potential of your team with tools that streamline workflows, enhance accountability, and improve communication.
          </p>
          <GradientButton className="mt-6 w-full md:w-fit">
            View All Benefits
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
    </section>
  )
}

export default FeaturedProductSection