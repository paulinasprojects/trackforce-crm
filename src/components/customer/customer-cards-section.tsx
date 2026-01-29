import { customersData } from "../../lib/data"
import CustomerCard from "./customer-card"

const CustomerCardsSection = () => {
  return (
    <div className="bg-[#050709] my-20 xl:mx-20 md:mx-16 mx-6">
      <div className="text-white flex flex-col gap-2 items-center">
        <h1 className="lg:text-5xl text-headingMedium font-medium leading-lg lg:text-start text-center">Customer Stories and Success</h1>
        <p className=" lg:text-lg md:text-md text-sm text-lightGray leading-xl text-center">Read their success stories and discover how TrackForce helped them overcome challenges, boost productivity, and strengthen connections with their customers.</p>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:mt-14 md:mt-10 mt-8 gap-6">
        {customersData.map((data) => (
          <CustomerCard
            key={data.id}
            logo={data.logo}
            title={data.title}
            category={data.category}
            series={data.series}
            description={data.description}
            successTitle={data.successTitle}
            successPercent={data.successPercent}
            successTitleTwo={data.successTitleTwo}
            successPercentTwo={data.successPercentTwo}
          />
        ))}
      </div>
    </div>
  )
}

export default CustomerCardsSection