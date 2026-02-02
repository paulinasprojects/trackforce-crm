import { Link } from "react-router-dom";

interface Props {
  title: string;
  description: string;
  image: string;
  benefits: string[];
}

const CollaborationCard = ({ title, description, image, benefits }: Props) => {
  return (
    <div className="flex lg:flex-row flex-col-reverse  items-center gap-14">
      <div className="flex flex-col gap-4 lg:max-w-[564px]">
        <p className="xl:text-headingMedium lg:text-2xl md:text-xl text-lg text-white">{title}</p>
        <p className="lg:text-md text-sm text-lightGray">{description}</p>
        <p className="text-lightGray text-md">Key Benefits:</p>
        <div className="flex flex-col gap-1">
          {benefits.map((benefit) => (
            <div className="" key={benefit}>
              <span className="text-lightGray">•</span>
              <span className="text-sm ml-1 text-lightGray">{benefit}</span>
            </div>
          ))}
        </div>
        <Link to="#" className="text-md font-medium text-[#5C6CF2] mt-2">Explore More</Link>
      </div>
      <div>
        <img src={image} className="xl:w-[580px] lg:w-[580px] md:w-[750px] w-full" alt="" />
      </div>
    </div>
  )
}

export default CollaborationCard