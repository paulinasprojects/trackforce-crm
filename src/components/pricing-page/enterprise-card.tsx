import { BsCheck } from "react-icons/bs"
import GradientButton from "../common/gradient-button"

const EnterpriceCard = ({ name, description, features }: { name: string, description: string, features: string[] }) => {
  return (
    <div className=" wrapper rounded-xl lg:h-fit h-[553px]">
      <div className="grid lg:grid-cols-3 items-center p-6 gap-2">
        <div>
          <p className="text-2xl font-medium text-white">{name}</p>
          <p className="text-md text-lightGray mt-4">{description}</p>
        </div>
        <div className="lg:grid lg:grid-cols-2 flex flex-col lg:items-center md:gap-1.5 gap-3">
          {features.map((feature, idx) => (
            <div className="text-white inline-flex items-center" key={idx}>
              <span className="mr-2">
                <BsCheck className="size-5" />
              </span>
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
        <div className="my-6 lg:mt-5 mt-36">
          <GradientButton className="w-full">Contact Us and Book a Demo</GradientButton>
        </div>
      </div>
    </div>
  )
}

export default EnterpriceCard