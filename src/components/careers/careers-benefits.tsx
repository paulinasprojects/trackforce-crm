import { careersBenefitsData } from "../../lib/data"
import CareersCard from "./careers-card"

const CareersBenefits = () => {
  return (
    <section className="text-white mt-[34px] xl:mx-20 md:mx-10 mx-6 md:my-[100px] my-10">
      <div className="flex flex-col gap-6 items-center justify-center">
        <h1 className="md:text-5xl text-headingMedium font-medium leading-lg text-white text-center">Our Benefits: Supporting Your Growth and Well-being</h1>
        <p className="text-lightGray text-center lg:text-lg md:text-md text-sm leading-xl">
          From professional growth opportunities to work-life balance, our benefits are designed to help you thrive.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 items-center mt-14">
        {careersBenefitsData.map((item) => (
          <CareersCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  )
}

export default CareersBenefits