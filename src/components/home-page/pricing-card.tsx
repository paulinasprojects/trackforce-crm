import { cn } from "../../lib/utils";
import { BsCheck } from "react-icons/bs";
import GradientButton from "../common/gradient-button";

interface PricingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  isStarter: boolean;
  mostPopular: boolean;
  name: string;
  duration: string;
  description: string;
  price: string;
  features: string[];
}

const PricingCard = ({ name, duration, description, price, features, mostPopular, isStarter }: PricingCardProps) => {
  return (
    <div className="">
      <div className={cn(
        "h-full",
        mostPopular ? "outline rounded-2xl outline-[#7c84ff]" : "wrapper rounded-2xl",
      )}>
        {mostPopular && (
          <div className="bg-[#7c84ff] text-white text-center rounded-t-2xl py-2  text-md font-medium">
            Most Popular
          </div>
        )}
        <div className="p-6">
          <p className="text-2xl font-medium text-white">{name}</p>
          <p className="text-sm text-lightGray mt-4">{description}</p>
          <div className="mt-6">
            <span className="text-[40px] font-medium text-white">{price}</span>
            <span className="text-lg text-white">{duration}</span>
            <div className="wrapper" />
          </div>
          <div className="mt-4 flex flex-col gap-3">
            {features.map((feature, idx) => (
              <div className="text-white inline-flex items-center" key={idx}>
                <span className="mr-2">
                  <BsCheck className="size-5" />
                </span>
                <span className="text-md">{feature}</span>
              </div>
            ))}
          </div>
          <div className={cn("mt-14 flex flex-col gap-4", mostPopular && "mt-[65px]", isStarter && "mt-[69px]")}>
            <GradientButton>Get Started</GradientButton>
            <span className="text-center text-md text-lightGray">No credit card needed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingCard