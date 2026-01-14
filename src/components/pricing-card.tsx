import { cn } from "../lib/utils";
import { BsCheck } from "react-icons/bs";

interface PricingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  mostPopular: boolean;
  name: string;
  duration: string;
  description: string;
  price: string;
  features: string[];
}

const PricingCard = ({ name, duration, description, price, features, mostPopular }: PricingCardProps) => {
  return (
    <div className="">
      <div className={cn(
        "",
        mostPopular ? "outline rounded-2xl outline-[#7c84ff]" : "outline outline-[#ffff] rounded-2xl",
      )}>
        {mostPopular && (
          <div className="bg-[#7c84ff] text-white text-center rounded-t-2xl py-[12px]  text-[16px] font-medium">
            Most Popular
          </div>
        )}
        <div className="p-6">
          <p className="text-2xl font-medium">{name}</p>
          <p className="text-[14px] text-[#c2c2c2] mt-4">{description}</p>
          <div className="mt-6">
            <span className="text-[40px] font-medium">{price}</span>
            <span className="text-lg">{duration}</span>
          </div>
          <div className="mt-4 flex flex-col gap-3">
            {features.map((feature, idx) => (
              <div className="text-white inline-flex items-center" key={idx}>
                <span className="mr-2">
                  <BsCheck className="size-5" />
                </span>
                <span className="text-[16px]">{feature}</span>
              </div>
            ))}
          </div>
          <div className="mt-[56px] flex flex-col gap-4">
            <button className="button-gradient px-2 py-2 rounded-md text-sm">Get Started</button>
            <span className="text-center text-[16px] text-[#c2c2c2]">No credit card needed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingCard