interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  imageSrc: string;
}

const FeatureCard = ({ title, description, imageSrc }: Props) => {
  return (
    <div className="outline outline-[#383838] rounded-lg w-full">
      <div className="m-6">
        <img src={imageSrc} alt="" className="object-cover w-full" />
        <p className="md:text-2xl text-md font-medium text-start mt-6 text-white">{title}</p>
        <p className="text-md text-lightGray mt-4">{description}</p>
      </div>
    </div>
  )
}

export default FeatureCard