import { gettingStartedData } from "../../lib/data"
import GettingStartedCard from "./getting-started-card"

const GettingStarted = () => {
  return (
    <section className="md:my-[80px] my-[40px] xl:mx-[80px] md:mx-[40px] mx-[24px]">
      <h2 className="lg:text-[48px] md:text-[40px] text-[32px] font-medium text-center text-white">Getting Started with TrackForce CRM Application</h2>
      <p className="md:text-[16px] text-sm text-[#C2C2C2] text-center mt-[16px]">Your Step-by-Step Guide to Mastering TrackForce and Streamlining Your Business Operations</p>
      <div className="flex lg:flex-row flex-col items-center justify-center gap-6 mt-10">
        {gettingStartedData.map((item) => (
          <GettingStartedCard key={item.id} title={item.title} description={item.description} icon={item.icon} />
        ))}
      </div>
    </section>
  )
}

export default GettingStarted