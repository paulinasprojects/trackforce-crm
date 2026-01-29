import { gettingStartedData } from "../../lib/data"
import GettingStartedCard from "./getting-started-card"

const GettingStarted = () => {
  return (
    <section className="md:my-20 my-10 xl:mx-20 md:mx-10 mx-6">
      <h2 className="lg:text-5xl md:text-[40px] text-headingMedium font-medium text-center text-white">Getting Started with TrackForce CRM Application</h2>
      <p className="md:text-md text-sm text-lightGray text-center mt-[16px]">
        Your Step-by-Step Guide to Mastering TrackForce and Streamlining Your Business Operations
      </p>
      <div className="flex lg:flex-row flex-col items-center justify-center gap-6 mt-10">
        {gettingStartedData.map((item) => (
          <GettingStartedCard
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

export default GettingStarted